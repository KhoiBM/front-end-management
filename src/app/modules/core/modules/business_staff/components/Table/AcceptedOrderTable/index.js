/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Tooltip, Zoom } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { RiInformationLine, RiExchangeBoxLine, RiMailSendLine } from 'react-icons/ri';
import config from 'src/environments/config';
import { BusinessStaffProcessOrderServices } from 'src/app/services';
import { useTable } from 'src/app/utils';
import { ConfirmDialog, PaginationBar, ChangeStatusOrder, ViewOrderInformation } from 'src/app/modules/core/components';

const useStyles = makeStyles(theme => ({
    paginationContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // background: "red",
        paddingTop: "1rem",
        paddingBottom: "5rem",
        // paddingRight: theme.spacing(6)
        paddingRight: theme.spacing(2)
    },
    tableWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        // paddingRight: theme.spacing(6)
        paddingRight: theme.spacing(2)
    },
    rejectIcon: {
        color: "red"
    },
    acceptIcon: {
        color: "green"
    }
}));
const StyledTableCell = withStyles((theme) => ({
    root: {
    },
    head: {
        fontWeight: "900",
    },
    body: {
        fontWeight: "100",
        // borderBottom: 'none',
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
    },
}))(TableRow);


export const AcceptedOrderTable = (props) => {
    const classes = useStyles();

    const { keywords, searchAction, clickSearch } = props

    const { filterList, action, clickFilter } = props

    // const headCells = ['Mã ID', "Mã Code", "Mã khách hàng", "Ghi chú", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày giao", "Địa chỉ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    // const headCells = ["Mã Code", "Mã ID khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Mã Code khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)

    const [statusOrder, setStatusOrder] = useState("Đang chờ")
    const useStatusOrder = config.useStatusOrder.BUSINESS_STAFF
    const statusOrderToChange = useStatusOrder.CHANGE

    const [changeStatusModal, setChangeStatusModal] = useState({ isOpen: false })

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })

    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)
        if (keywords && keywords != null && keywords.length > 0) {
            if (searchAction) {
                search()
            } else if (action == "filter") {
                loadInitByFilter()
            }

        } else {
            if (action == "filter") {
                loadInitByFilter()
            }
        }
    }, [page, refresh])


    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)
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

        } else {
            setFirst(false)
        }

    }, [clickSearch])



    useEffect(() => {
        console.log("clickFilter")
        if (!first) {
            setPage(1)

            if (action == "filter") {
                loadInitByFilter()
            }
        } else {
            setFirst(false)
        }

    }, [clickFilter])


    const loadInitByFilter = async () => {
        console.log("loadInitByFilter")
        console.log("action: " + action)
        console.log("filterList:" + JSON.stringify(filterList))
        console.log("Page: " + page)
        try {
            const response = await (await BusinessStaffProcessOrderServices.viewAcceptedOrder({ filterBy: filterList, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const records = response.info.records

                    const switchObj = records.reduce((acc, curr) => {
                        acc[`switchID:${curr.orderID}`] = curr.statusPayment
                        return acc
                    }, {})

                    // console.log("switchObj: " + JSON.stringify(switchObj));

                    setSwitchCheck(switchCheck => ({ ...switchCheck, ...switchObj }));
                    setRecords(records)
                    setTotalPage(response.info.totalPage)
                    // console.log("page: " + page)


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



    const search = async () => {
        try {
            const response = await (await BusinessStaffProcessOrderServices.searchNewOrder({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    const records = response.info.records

                    const switchObj = records.reduce((acc, curr) => {
                        acc[`switchID:${curr.orderID}`] = curr.statusPayment
                        return acc
                    }, {})

                    // console.log("switchObj: " + JSON.stringify(switchObj));

                    setSwitchCheck(switchCheck => ({ ...switchCheck, ...switchObj }));
                    setRecords(records)
                    setTotalPage(response.info.totalPage)
                    // console.log("page: " + page)
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






    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }
    const handleCloseModal = () => {
        setChangeStatusModal({ isOpen: false })
        setViewOrderInformationModal({ isOpen: false })
        handleRefresh()
    }

    // const handleStatusOrderChange = (event) => {
    //     setStatusOrder(event.target.value)
    // }


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
                    handleRefresh()
                    // toast.success("Thành công")
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



    return (
        <>
            {/* <p>NewOrderTable</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records && records.map((row) => (
                            <StyledTableRow key={row.orderID}>

                                {/* <StyledTableCell>{row.orderID}</StyledTableCell> */}
                                <StyledTableCell>{row.orderCode}</StyledTableCell>
                                {/* <StyledTableCell >{row.customerID}</StyledTableCell> */}
                                <StyledTableCell >{row.customerCode}</StyledTableCell>

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


                                    {/* < Tooltip TransitionComponent={Zoom} placement="top" title="Thay đổi trạng thái đơn hàng" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()

                                            const data = {
                                                orderID: row.orderID,
                                                statusOrder: row.statusOrder
                                            }

                                            props.handleChangeStatus(data)
                                        }
                                        }>
                                            <RiExchangeBoxLine />
                                        </Button>

                                    </ Tooltip> */}


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



                                    < Tooltip TransitionComponent={Zoom} placement="top" title="Gửi sản phẩm mẫu" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            props.handleOpenSendDemoProduct()
                                        }
                                        }>
                                            <RiMailSendLine />
                                        </Button>

                                    </ Tooltip>

                                </StyledTableCell>

                            </StyledTableRow>

                        )

                        )
                        }
                    </TableBody>
                </TblContainer>
            </div >

            {<ChangeStatusOrder changeStatusModal={changeStatusModal} setChangeStatusModal={setChangeStatusModal} />}
            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}
            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
            </div>
        </>
    );
}


