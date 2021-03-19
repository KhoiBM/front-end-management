/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { BusinessStaffProcessOrderServices } from '../../../../../../../services/CoreServices/BusinessStaffServices';
import config from '../../../../../../../../environments/config';
import { useTable } from 'src/app/utils';
import { PaginationBar } from 'src/app/modules/core/components';
const useStyles = makeStyles(theme => ({
    paginationContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // background: "red",
        paddingTop: "1rem",
        paddingBottom: "5rem",
        paddingRight: theme.spacing(6)
    },
    tableWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(6)
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

    const headCells = ['Mã đơn hàng', "Mã khách hàng", "Ghi chú", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày giao", "Địa chỉ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});


    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)


    const [statusOrder, setStatusOrder] = useState("1")

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
    useEffect(() => {
        loadInit()
    }, [page])

    const loadInit = async () => {
        try {
            const response = await (await BusinessStaffProcessOrderServices.viewAcceptedOrder({ filterBy: "all", page: page, limit: limit })).data
            const records = response.info.records

            const switchObj = records.reduce((acc, curr) => {
                acc[`switchID:${curr.orderID}`] = curr.statusPayment
                return acc
            }, {})
            // console.log("switchObj: " + JSON.stringify(switchObj));
            setSwitchCheck({ ...switchCheck, ...switchObj });
            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }

    useEffect(async () => {
        // if (!first) {
        // }
        // setFirst(false)
    }, [refresh])

    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleChangeStatus = (row) => async (event) => {
        await checkPayMent(row, event)
    }

    const checkPayMent = async (row, event) => {
        const data = {
            orderID: row.orderID,
            isActive: !switchCheck[`switchID:${row.orderID}`]
        }
        // toast.dark(`test switchID:${row.id}: ${!switchCheck[`switchID:${row.id}`]}`)
        // if (switchCheck[`switchID:${row.id}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        try {
            // switchCheck[`switchID:${row.id}`] ? 
            const response = await (await BusinessStaffProcessOrderServices.checkPayment(data)).data
            if (response.result == config.useResultStatus.SUCCESS) {
                toast.success(`${!switchCheck[`switchID:${row.orderID}`] ? "Đã thanh toán thành công" : "Chưa thanh toán"}`)
                setRefresh(!refresh)
            } else {
                toast.error(config.useMessage.resultFailure)
                setSwitchCheck({
                    ...switchCheck,
                    [event.target.name]: event.target.checked
                })
            }
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
            setSwitchCheck({
                ...switchCheck,
                [event.target.name]: event.target.checked
            })
        }
    }
    return (
        <>
            <p>AcceptedOrderTable</p>


            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records.map((row) => (

                            <StyledTableRow key={row.orderID}>

                                <StyledTableCell>{row.orderID}</StyledTableCell>
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
                                        onClick={handleChangeStatus(row)}
                                    />
                                </StyledTableCell>

                                <StyledTableCell >{row.shipAt}</StyledTableCell>
                                <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                <StyledTableCell >
                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        // props.handleEdit(row)
                                    }
                                    }>
                                        <AiOutlineEdit />

                                    </Button>

                                    {/* <>
                                        <Button style={{ marginLeft: "8px" }} onClick={(event) => {
                                            event.stopPropagation()
                                            // props.handleEdit(row)
                                        }
                                        }>

                                            Từ chối
                                    </Button>
                                    </> */}

                                </StyledTableCell>


                            </StyledTableRow>

                        )

                        )
                        }
                    </TableBody>
                </TblContainer>
            </div >


            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} />
            </div>
        </>
    );
}

