/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useTable } from 'src/app/utils';
import { ManagePrintedProductServices } from 'src/app/services';
import config from 'src/environments/config';
import { PaginationBar, ConfirmDialog } from 'src/app/modules/core/components';
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
    deleteIcon: {
        color: "red"
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


export const PrintedProductTable = (props) => {
    const classes = useStyles();

    const { keywords, searchAction, clickSearch } = props


    const headCells = ['Mã ID', "Mã ID đơn hàng", "Mã ID sản phẩm thô", "Tên sản phẩm đã in", "Tổng sản phẩm", "Mô tả", "Ghi chú", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)



    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })




    // const handleChangePagination = (event, value) => {
    //     setPage(value);
    //     // console.log(page)
    // };

    // useEffect(async () => {
    // }, [refresh])




    useEffect(() => {
    }, [refresh])

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
        console.log("loadinit")
        try {
            const response = await (await ManagePrintedProductServices.view({ filterBy: "all", page: page, limit: limit })).data
            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)

        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }


    const search = async () => {
        try {
            const response = await (await ManagePrintedProductServices.search({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data

            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)
            console.log("search")
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }



    const onDelete = async (printedProductID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        try {
            console.log("onDelete")
            console.log("printedProductID: " + printedProductID)
            const data = { printedProductID: printedProductID }
            const response = await (await ManagePrintedProductServices.delete(data)).data
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                    setRefresh(!refresh)
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

    return (
        <>
            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records && records.map((row) => (

                            <StyledTableRow key={row.printedProductID} >

                                <StyledTableCell>{row.printedProductID}</StyledTableCell>
                                <StyledTableCell>{row.orderID}</StyledTableCell>
                                <StyledTableCell>{row.rawProductID}</StyledTableCell>

                                <StyledTableCell>{row.printedProductName}</StyledTableCell>

                                <StyledTableCell >{row.totalQuantity}</StyledTableCell>
                                <StyledTableCell >{row.description}</StyledTableCell>
                                <StyledTableCell >{row.note}</StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>

                                <StyledTableCell style={{ minWidth: "160px" }} >

                                    <Tooltip TransitionComponent={Zoom} placement="top" title="Chỉnh sửa">
                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            props.handleEdit(row)
                                        }
                                        }>
                                            <AiOutlineEdit />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip TransitionComponent={Zoom} placement="top" title="Xoá">

                                        <Button onClick={(event) => {
                                            event.stopPropagation();
                                            setConfirmDialog(
                                                {
                                                    isOpen: true,
                                                    title: "Bạn có chắc là muốn xoá ?",
                                                    subTitle: "Bạn không thể hoàn tác hành động này",
                                                    onConfirm: () => { onDelete(row.printedProductID) }

                                                }
                                            )

                                        }
                                        }>
                                            <AiOutlineDelete className={classes.deleteIcon} />
                                        </Button>

                                    </Tooltip>

                                </StyledTableCell>

                            </StyledTableRow>

                        )
                        )
                        }
                    </TableBody>
                </TblContainer>
            </div>


            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />


            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
            </div>
        </>
    );
}

