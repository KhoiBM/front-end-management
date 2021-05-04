/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Tooltip, Zoom, Box } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { RiInformationLine, RiExchangeBoxLine, RiMailSendLine } from 'react-icons/ri';
import config from 'src/environments/config';
import { BusinessStaffProcessOrderServices, TechnicalStaffProcessOrderServices } from 'src/app/services';
import { useTable, useCustomStyles, useRefresh, useLoadingEffect } from 'src/app/utils';
import { ConfirmDialog, PaginationBar, ChangeStatusOrder, ViewOrderInformation } from 'src/app/modules/core/components';
import { NotFound, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
}));



export const AcceptedOrderTable = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    const classes = useStyles();

    const { classesCustom } = useCustomStyles()

    const { keywords, searchAction, clickSearch } = props

    const { filterList, action, clickFilter } = props

    const headCells = ["Mã Code", "Tên người dùng", "Tên khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const useStatusOrder = config.useStatusOrder.TECHNICAL_STAFF
    const statusOrderToChange = useStatusOrder.CHANGE

    const [changeStatusModal, setChangeStatusModal] = useState({ isOpen: false })

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })


    useEffect(() => {
        // console.log("keywords: " + keywords)
        console.log("searchAction: " + searchAction)
        if (!first) {
            setPage(1)
            if (keywords && keywords != null && keywords.length > 0) {
                if (searchAction) {
                    search()
                } else {
                    loadInitByFilter()
                }
            } else {
                loadInitByFilter()
            }

        }

    }, [clickSearch])



    useEffect(() => {
        console.log("clickFilter")
        if (!first) {
            setPage(1)

            if (action == "filter") {
                loadInitByFilter()
            }
        }

    }, [clickFilter])

    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)

        if (keywords && keywords != null && keywords.length > 0) {
            if (searchAction) {
                search()
            }
            // else if (action == "filter") {
            //     loadInitByFilter()
            // }

        } else {
            if (action == "filter") {
                loadInitByFilter()
            }
        }

        setFirst(false)


    }, [page, refresh])


    const loadInitByFilter = async () => {

        // console.log("action: " + action)
        // console.log("filterList:" + JSON.stringify(filterList))
        // console.log("Page: " + page)

        try {

            const response = await (await TechnicalStaffProcessOrderServices.viewAcceptedOrder({ filterBy: filterList, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInitByFilter")

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

        // console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)

    }

    // console.log("totalPage: " + totalPage)

    const search = async () => {

        try {

            const data = { filterBy: filterList, keywords: keywords, page: page, limit: limit }
            console.log("data: " + JSON.stringify(data))


            const response = await (await TechnicalStaffProcessOrderServices.searchAcceptedOrder(data)).data
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
        setChangeStatusModal({ isOpen: false })
        setViewOrderInformationModal({ isOpen: false })
        handleRefresh()
    }


    return (
        <>
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
                                {/* <Switch
                                    color="primary"
                                    checked={switchCheck[`switchID:${row.orderID}`]}
                                    name={`switchID:${row.orderID}`}

                                /> */}
                                {`${row.statusPayment ? "Đã thanh toán" : "Chưa thanh toán"}`}
                            </StyledTableCell>

                            {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}
                            {/* <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell> */}

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            {/* <StyledTableCell >{row.updatedAt}</StyledTableCell> */}


                            <StyledTableCell style={{ minWidth: "230px" }}>


                                < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        // props.handleViewInformation(row)
                                        setViewOrderInformationModal({
                                            isOpen: true,
                                            recordForViewInformation: row,
                                            handleCloseModal
                                        })
                                        // console.log("ViewOrderInformationModal: " + viewOrderInformationModal)
                                    }
                                    }>
                                        <RiInformationLine />
                                    </Button>

                                </ Tooltip>

                                < Tooltip TransitionComponent={Zoom} placement="top" title="Thay đổi trạng thái đơn hàng" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()

                                        const data = {
                                            orderID: row.orderID,
                                            statusOrder: row.statusOrder
                                        }
                                        // console.log("data: " + JSON.stringify(data))
                                        setChangeStatusModal({
                                            isOpen: true,
                                            recordForChangeStatus: data,
                                            statusOrderToChange,
                                            handleCloseModal
                                        })

                                    }
                                    }>
                                        <RiExchangeBoxLine />
                                    </Button>

                                </ Tooltip>


                            </StyledTableCell>

                        </StyledTableRow>

                    ))
                        : <NotFound />

                    }
                </TblBody>
            </TblContainer>


            {changeStatusModal.isOpen && <ChangeStatusOrder changeStatusModal={changeStatusModal} setChangeStatusModal={setChangeStatusModal} />}

            {viewOrderInformationModal.isOpen && <ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}

            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}


