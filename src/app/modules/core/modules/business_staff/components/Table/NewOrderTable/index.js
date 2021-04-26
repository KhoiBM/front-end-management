
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Tooltip, Zoom, Box } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { RiInformationLine, RiExchangeBoxLine, RiMailSendLine } from 'react-icons/ri';
import config from 'src/environments/config';
import { BusinessStaffProcessOrderServices } from 'src/app/services';
import { useTable, useCustomStyles, useRefresh, useLoadingEffect } from 'src/app/utils';
import { ConfirmDialog, PaginationBar, ChangeStatusOrder, ViewOrderInformation } from 'src/app/modules/core/components';
import { NotFound, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({



}));



export const NewOrderTable = (props) => {

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    const { keywords, searchAction, clickSearch } = props

    const { filterList, action, clickFilter } = props

    // const headCells = ['Mã ID', "Mã Code", "Mã khách hàng", "Ghi chú", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày giao", "Địa chỉ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    // const headCells = ["Mã Code", "Mã ID khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    // const headCells = ["Mã Code", "Mã Code khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Tên người dùng", "Tên khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })



    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)
        if (keywords && keywords != null && keywords.length > 0) {
            if (searchAction) {
                search()
            } else {
                loadInit()
            }
        } else {
            loadInit()
        }
    }, [page, refresh])


    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)
        setPage(1)
        if (keywords && keywords != null && keywords.length > 0) {
            if (searchAction) {
                search()
            } else {
                loadInit()
            }
        } else {
            loadInit()
        }

    }, [clickSearch])



    const loadInit = async () => {

        try {
            const response = await (await BusinessStaffProcessOrderServices.viewNewOrder({ filterBy: "all", page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {


                    loadData(response)

                    console.log("loadInit")


                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }



    const loadData = async (response) => {

        const records = response.info.records

        console.log("records: " + JSON.stringify(records))

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {

            const switchObj = records.reduce((acc, curr) => {

                acc[`switchID:${curr.orderID}`] = curr.statusPayment

                return acc

            }, {})

            // console.log("switchObj: " + JSON.stringify(switchObj));

            setSwitchCheck(switchCheck => ({ ...switchCheck, ...switchObj }));

            setRecords(records)

        } else {
            setRecords([])

            setSwitchCheck({})
        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)

    }


    const search = async () => {
        try {
            const response = await (await BusinessStaffProcessOrderServices.searchNewOrder({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("search")

                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }











    const handleCloseModal = () => {
        setViewOrderInformationModal({ isOpen: false })
        handleRefresh()
    }

    const handleChangeSwitch = (event) => {
        setSwitchCheck({ ...switchCheck, [event.target.name]: event.target.checked });
    };

    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleStatusPaymentChange = (orderID) => async (event) => {
        await checkPayMent(orderID, event)
    }

    const checkPayMent = async (orderID, event) => {
        const data = {
            orderID: orderID,
            isActive: !switchCheck[`switchID:${orderID}`]
        }
        // toast.dark(`test switchID:${orderID}: ${!switchCheck[`switchID:${orderID}`]}`)
        // if (switchCheck[`switchID:${orderID}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        try {
            const response = await (await BusinessStaffProcessOrderServices.checkPayment(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success(`${!switchCheck[`switchID:${orderID}`] ? "Đã thanh toán thành công" : "Chưa thanh toán"}`)
                    handleRefresh()               // toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                    setSwitchCheck({
                        ...switchCheck,
                        [event.target.name]: event.target.checked
                    })
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
            setSwitchCheck({
                ...switchCheck,
                [event.target.name]: event.target.checked
            })
        }
    }



    const onAccept = async (orderID) => {

        try {
            const data = { orderID, statusOrder: config.useStatusOrder.BUSINESS_STAFF.CHANGE[0] }
            console.log("data: " + JSON.stringify(data))
            const response = await (await BusinessStaffProcessOrderServices.acceptNewOrder(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    toast.success("Chấp nhận thành công")

                    handleRefresh()
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }
            console.log("onAccept")
            console.log("orderID: " + orderID)
        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }


    }

    const onReject = async (orderID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        try {
            const data = { orderID, statusOrder: config.useStatusOrder.BUSINESS_STAFF.CHANGE[1] }
            console.log("data: " + JSON.stringify(data))
            const response = await (await BusinessStaffProcessOrderServices.rejectNewOrder(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    toast.success("Từ chối thành công")

                    handleRefresh()
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

            console.log("onReject")
            console.log("orderID: " + orderID)

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }


    return (
        <>
            {/* <p>NewOrderTable</p> */}
            {/* <Loader loading={loading} /> */}

            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (
                        <StyledTableRow key={row.orderID}>

                            {/* <StyledTableCell>{row.orderID}</StyledTableCell> */}
                            <StyledTableCell>{row.orderCode}</StyledTableCell>
                            {/* <StyledTableCell >{row.customerID}</StyledTableCell> */}
                            {/* <StyledTableCell >{row.customerCode}</StyledTableCell> */}
                            <StyledTableCell >{row.username}</StyledTableCell>
                            <StyledTableCell >{row.customerName}</StyledTableCell>

                            {/* <StyledTableCell >{row.note}</StyledTableCell> */}
                            <StyledTableCell >{row.statusOrder}</StyledTableCell>

                            <StyledTableCell>
                                <Switch
                                    color="primary"
                                    checked={switchCheck[`switchID:${row.orderID}`]}
                                    onChange={handleChangeSwitch}
                                    name={`switchID:${row.orderID}`}
                                    onClick={handleStatusPaymentChange(row.orderID)}
                                />
                            </StyledTableCell>

                            {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}
                            {/* <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell> */}

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            <StyledTableCell >{row.updatedAt}</StyledTableCell>


                            <StyledTableCell style={{ minWidth: "230px" }}>


                                <Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        // props.handleViewInformation(row)
                                        setViewOrderInformationModal({
                                            isOpen: true,
                                            recordForViewInformation: row,
                                            handleCloseModal
                                        })
                                    }
                                    }>
                                        <RiInformationLine />
                                    </Button>

                                </ Tooltip>


                                <Tooltip TransitionComponent={Zoom} placement="top" title="Chấp nhận">

                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        onAccept(row.orderID)
                                    }
                                    }>
                                        <AiOutlineCheck className={classesCustom.acceptIcon} />
                                    </Button>

                                </Tooltip>


                                <Tooltip TransitionComponent={Zoom} placement="top" title="Từ chối">

                                    <Button onClick={(event) => {
                                        event.stopPropagation();
                                        setConfirmDialog(
                                            {
                                                isOpen: true,
                                                title: "Bạn có chắc là muốn từ chối?",
                                                subTitle: "Bạn không thể hoàn tác hành động này",
                                                onConfirm: () => { onReject(row.orderID) }

                                            }
                                        )

                                    }
                                    }>
                                        <AiOutlineClose className={classesCustom.rejectIcon} />
                                    </Button>

                                </Tooltip>

                            </StyledTableCell>

                        </StyledTableRow>

                    ))
                        : <NotFound />

                    }
                </TblBody>
            </TblContainer>

            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}


            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}


