

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';

import { toast } from 'react-toastify';
import PaginationBar from '../../../../../components/PaginationBar';
import { AiOutlineEdit } from 'react-icons/ai';
import { ManageRawProductServices, ManageRawProductImportationServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { uuid } from 'uuidv4';
import { useTable } from 'src/app/utils';
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


export const CustomersRawProductImportationTable = (props) => {
    const classes = useStyles();
    // const headCells = ['ID', "Tên sản phẩm thô", "Số lượng", "Cung cấp bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ['Mã nhập', "Tên sản phẩm thô của khách hàng", "Số lượng", "Cung cấp bởi", "Ngày tạo", "Ngày sửa đổi"]
    const [records, setRecords] = useState([
        {
            id: 1,
            rawProductName: "afb",
            quantity: 1,
            providedBy: "abvc",
            createdAt: '02-02-2020',
            updatedAt: '02-02-2020'
        }
    ])
    const { TblContainer, TblHead } = useTable(records, headCells);
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(5);
    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)
    const handleChangePagination = (event, value) => {
        setPage(value);
        // console.log(page)
    };
    useEffect(() => {
        loadInit()
    }, [page])

    const loadInit = async () => {
        try {
            const response = await (await ManageRawProductImportationServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }

    useEffect(async () => {
    }, [refresh])


    return (
        <>
            {/* <p>Table</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records.map((row) => (
                            <StyledTableRow key={row.importedRawProductID} >

                                <StyledTableCell component="th" scope="row">
                                    {row.importedRawProductID}
                                </StyledTableCell>
                                <StyledTableCell >{row.rawProductName}</StyledTableCell>
                                <StyledTableCell >{row.quantity}</StyledTableCell>
                                <StyledTableCell >{row.providedBy}</StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                {/* <StyledTableCell >
                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        props.handleEdit(row)
                                    }
                                    }>
                                        <AiOutlineEdit />
                                    </Button>
                                </StyledTableCell> */}

                            </StyledTableRow>

                        )
                        )
                        }
                    </TableBody>
                </TblContainer>
            </div>


            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} />
            </div>
        </>
    );
}

