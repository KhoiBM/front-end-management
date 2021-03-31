/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Zoom, Tooltip } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { BusinessStaffProcessOrderServices } from 'src/app/services';
import config from 'src/environments/config';
import { useTable } from 'src/app/utils';
import { PaginationBar, ViewOrderInformation } from 'src/app/modules/core/components';
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


export const CanceledOrderTable = (props) => {
    const classes = useStyles();

    // const headCells = ['Mã ID', "Mã Code", "Mã khách hàng", "Ghi chú", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Địa chỉ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Mã Code khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })


    useEffect(() => {
        loadInit()
    }, [page, refresh])

    const loadInit = async () => {
        try {
            const response = await (await BusinessStaffProcessOrderServices.viewCanceledOrder({ filterBy: "all", page: page, limit: limit })).data
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


    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }
    const handleCloseModal = () => {
        setViewOrderInformationModal({ isOpen: false })
        handleRefresh()
    }

    return (
        <>
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

                                < StyledTableCell >
                                    <Switch
                                        color="primary"
                                        checked={switchCheck[`switchID:${row.orderID}`]}
                                        // onChange={handleChangeSwitch}
                                        name={`switchID:${row.orderID}`}
                                    // onClick={handleChangeStatus(row)}
                                    />
                                </ StyledTableCell>


                                {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}
                                {/* <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell> */}

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                <StyledTableCell >


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
                                </StyledTableCell>


                            </StyledTableRow>

                        )

                        )
                        }
                    </TableBody>

                </TblContainer>
            </div >

            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}


            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
            </div>
        </>
    );
}

