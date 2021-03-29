/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { RiInformationLine } from 'react-icons/ri';
import { useTable } from 'src/app/utils';
import { ManageCustomersRawProductServices } from 'src/app/services';
import config from 'src/environments/config';
import { ConfirmDialog, PaginationBar } from 'src/app/modules/core/components';
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


export const CustomersRawProductTable = (props) => {
    const classes = useStyles();

    const { keywords, searchAction, clickSearch } = props

    // const headCells = ['Mã ID', "Mã Code", "Tên sản phẩm thô", "Giá đơn vị", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Tạo bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    // const headCells = ['Mã ID', "Mã Code", "Tên sản phẩm thô", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Tạo bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const headCells = ['Mã ID', "Mã Code", "Tên sản phẩm thô", "Tổng sản phẩm", "Thể loại", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)


    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })


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
            const response = await (await ManageCustomersRawProductServices.view({ filterBy: "all", page: page, limit: limit })).data
            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            console.log("loadinit")
            // console.log("page: " + page)
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }

    const search = async () => {
        try {
            const response = await (await ManageCustomersRawProductServices.search({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data

            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)
            console.log("search")
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }





    const onDelete = async (rawProductID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        try {
            console.log("onDelete")
            console.log("deleterawProductID:  " + rawProductID)
            const data = { rawProductID: rawProductID }
            const response = await (await ManageCustomersRawProductServices.delete(data)).data
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
            {/* <p>Table</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records && records.map((row) => (
                            <StyledTableRow key={row.rawProductID} >

                                <StyledTableCell>{row.rawProductID}</StyledTableCell>
                                <StyledTableCell>{row.rawProductCode}</StyledTableCell>
                                <StyledTableCell >{row.rawProductName}</StyledTableCell>
                                {/* <StyledTableCell >{row.unitPrice}</StyledTableCell> */}
                                <StyledTableCell >{row.totalQuantity}</StyledTableCell>
                                {/* <StyledTableCell >{row.size}</StyledTableCell> */}
                                {/* <StyledTableCell >{row.color}</StyledTableCell> */}
                                {/* <StyledTableCell >{row.description}</StyledTableCell> */}
                                <StyledTableCell >{row.categoryName}</StyledTableCell>

                                {/* <StyledTableCell >{row.createdBy}</StyledTableCell> */}

                                {/* <StyledTableCell >{row.createdAt}</StyledTableCell> */}
                                {/* <StyledTableCell >{row.updatedAt}</StyledTableCell> */}


                                <StyledTableCell style={{ minWidth: "230px" }}>


                                    <Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết">

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            props.handleViewInformation(row)
                                        }
                                        }>
                                            <RiInformationLine />
                                        </Button>

                                    </Tooltip>


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
                                            // onDelete(row.rawProductID)
                                            setConfirmDialog(
                                                {
                                                    isOpen: true,
                                                    title: "Bạn có chắc là muốn xoá ?",
                                                    subTitle: "Bạn không thể hoàn tác hành động này",
                                                    onConfirm: () => { onDelete(row.rawProductID) }

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

