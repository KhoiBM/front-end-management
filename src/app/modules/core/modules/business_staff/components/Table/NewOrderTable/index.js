/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Tooltip, Zoom } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BusinessStaffProcessOrderServices } from '../../../../../../../services/CoreServices/BusinessStaffServices';
import config from '../../../../../../../../environments/config';
import { uuid } from 'uuidv4';
import { useTable } from 'src/app/utils';
import { PaginationBar, ConfirmDialog } from 'src/app/modules/core/components';
import { RiInformationLine } from 'react-icons/ri';
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


export const NewOrderTable = (props) => {
    const classes = useStyles();

    const headCells = ['Mã ID', "Mã Code", "Mã khách hàng", "Ghi chú", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày giao", "Địa chỉ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)


    const [statusOrder, setStatusOrder] = useState("1")


    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })


    useEffect(async () => {
        // if (!first) {
        // }
        // setFirst(false)
    }, [refresh])


    useEffect(() => {
        loadInit()
        // console.log("load")
    }, [page])


    const loadInit = async () => {

        try {
            const response = await (await BusinessStaffProcessOrderServices.viewNewOrder({ filterBy: "all", page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const records = response.info.records

                    const switchObj = records.reduce((acc, curr) => {
                        acc[`switchID:${curr.orderID}`] = curr.statusPayment
                        return acc
                    }, {})

                    console.log("switchObj: " + JSON.stringify(switchObj));

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



    const handleStatusOrderChange = (event) => {
        setStatusOrder(event.target.value)
    }

    const handleChangePagination = (event, value) => {
        setPage(value);
        console.log(page)
    };



    // console.log("page:" + page)
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
                    setRefresh(!refresh)
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


    const onReject = async (orderID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        try {
            const response = await (await BusinessStaffProcessOrderServices.rejectNewOrder({ orderID })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Từ chối thành công")
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

    const onAccept = async (orderID) => {

        try {
            const response = await (await BusinessStaffProcessOrderServices.acceptNewOrder({ orderID })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Chấp nhận thành công")
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


    return (
        <>
            {/* <p>NewOrderTable</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records && records.map((row) => (
                            <StyledTableRow key={row.orderID}>

                                <StyledTableCell>{row.orderID}</StyledTableCell>
                                <StyledTableCell>{row.orderCode}</StyledTableCell>
                                <StyledTableCell >{row.customerID}</StyledTableCell>

                                <StyledTableCell >{row.note}</StyledTableCell>
                                <StyledTableCell >{row.statusOrder}</StyledTableCell>
                                {/* <>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="statusOrder-label">

                                        </InputLabel>
                                        <Select
                                            labelId="statusOrder-label"
                                            id="statusOrder"
                                            value={statusOrder}
                                            onChange={handleStatusOrderChange}
                                            name="statusOrder"
                                        >
                                            <MenuItem value={1}>Đang xử lý</MenuItem>
                                            <MenuItem value={2}></MenuItem>
                                            <MenuItem value={3}></MenuItem>
                                            <MenuItem value={4}></MenuItem>
                                        </Select>
                                        <FormHelperText></FormHelperText>
                                    </FormControl>
                                </> */}
                                <StyledTableCell>
                                    <Switch
                                        color="primary"
                                        checked={switchCheck[`switchID:${row.orderID}`]}
                                        onChange={handleChangeSwitch}
                                        name={`switchID:${row.orderID}`}
                                        onClick={handleStatusPaymentChange(row.orderID)}
                                    />
                                </StyledTableCell>

                                <StyledTableCell >{row.shipAt}</StyledTableCell>
                                <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                <StyledTableCell style={{ minWidth: "230px" }}>


                                    < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            props.handViewDetail(row)
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
                                            <AiOutlineCheck className={classes.acceptIcon} />
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
                                            <AiOutlineClose className={classes.rejectIcon} />
                                        </Button>

                                    </Tooltip>
                                </StyledTableCell>

                            </StyledTableRow>

                        )

                        )
                        }
                    </TableBody>
                </TblContainer>
            </div >

            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
            </div>
        </>
    );
}


