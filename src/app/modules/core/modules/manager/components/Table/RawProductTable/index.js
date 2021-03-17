/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';

import { toast } from 'react-toastify';
import PaginationBar from '../../../../../components/PaginationBar';
import { AiOutlineEdit } from 'react-icons/ai';
import { ManageRawProductServices } from '../../../../../../../services/CoreServices/ManagerServices';
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


export const RawProductTable = (props) => {
    const classes = useStyles();
    const headCells = ['Mã sản phẩm thô', "Tên sản phẩm thô", "Giá đơn vị", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const [records, setRecords] = useState([])
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
            localStorage.setItem("pps-token", "eyJraWQiOiJSTmkrS25iRXEyXC9nWkIwbFhoekt1TnJnekpYaldXb00rV1RtdndTQ1c1ST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2NWRlMWNiMC0xMDNiLTQ1MTEtYmNlYy0yNTQ3YjlmZGExODkiLCJldmVudF9pZCI6IjliNmM0MDAwLTU3NjgtNDlhYS1iN2Q2LTA1YWU5NWFlNDA2YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU5OTM2OTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV80SWF6OUtFTFMiLCJleHAiOjE2MTU5OTcyOTMsImlhdCI6MTYxNTk5MzY5MywianRpIjoiNjk2ZTVkZmYtY2JkZi00YTFhLWJlZDctNWU4ZDI0M2VkOGVjIiwiY2xpZW50X2lkIjoiNThwNnM1aDBqZWJlY29yY2Z1cmhwYnM4MWciLCJ1c2VybmFtZSI6InZ1dnUifQ.Cn62JnCsbkMJQ7KIvwrrVhcfaH_yBbx9_ENXp655vTYx3uTE_-yC6IXIaacZgwgdOPbCWvXaI8iZy1fbwWRGVR8w5pvUL4rmh4_yBXEv1sZ3rjsSoscJXm2Ieozww_63YWMr_Ee2Mv1Y9mAYoryjcN4yqn_eT3TQlm8E1xWwS7wbi7utQbj-PHTAb2Yvse6pSNbqWpv47egRMpZbZe1z0d-w94dFNITjQGppJR_tc5KniYLX5_XgqGAVYj4G15z2ailVdAr7mabjWjbaau6UhCo21WyUqz75n-KzZ6p48Nj6QmKlj4MQbVLorZSiKmIPt7CpVqmWNkX7hvigna33sg")
            // const response = await (await ManageRawProductServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
            const response = await (await ManageRawProductServices.view({
                "category": ["1", "2"],
                "offset": "1",
                "limit": "3"
            })).data

            console.log("response: " + JSON.stringify(response))
            const records = response.info.rawProductLists
            setRecords(records)
            // setTotalPage(response.info.totalPage)
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
                            <StyledTableRow key={row.rawProductID} >

                                <StyledTableCell>
                                    {row.rawProductID}
                                </StyledTableCell>
                                <StyledTableCell >{row.rawPrductName}</StyledTableCell>
                                <StyledTableCell >{row.price}</StyledTableCell>
                                <StyledTableCell >{row.quantity}</StyledTableCell>
                                <StyledTableCell >{row.size}</StyledTableCell>
                                <StyledTableCell >{row.color}</StyledTableCell>
                                <StyledTableCell >{row.description}</StyledTableCell>


                                <StyledTableCell >
                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        props.handleEdit(row)
                                    }
                                    }>
                                        <AiOutlineEdit />
                                    </Button>
                                </StyledTableCell>

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






// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'
// import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';

// import { toast } from 'react-toastify';
// import PaginationBar from '../../../../../components/PaginationBar';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { ManageRawProductServices } from '../../../../../../../services/CoreServices/ManagerServices';
// import config from '../../../../../../../../environments/config';
// import { uuid } from 'uuidv4';
// import { useTable } from 'src/app/utils';
// const useStyles = makeStyles(theme => ({
//     paginationContainer: {
//         display: "flex",
//         justifyContent: "flex-end",
//         alignItems: "center",
//         // background: "red",
//         paddingTop: "1rem",
//         paddingBottom: "5rem",
//         paddingRight: theme.spacing(6)
//     },
//     tableWrapper: {
//         display: "flex",
//         justifyContent: "flex-end",
//         paddingRight: theme.spacing(6)
//     }
// }));
// const StyledTableCell = withStyles((theme) => ({
//     root: {
//     },
//     head: {
//         fontWeight: "900",
//     },
//     body: {
//         fontWeight: "100",
//         // borderBottom: 'none',
//     }
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//     },
// }))(TableRow);


// export const RawProductTable = (props) => {
//     const classes = useStyles();
//     const headCells = ['Mã sản phẩm thô', "Tên sản phẩm thô", "Giá đơn vị", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
//     const [records, setRecords] = useState([])
//     const { TblContainer, TblHead } = useTable(records, headCells);
//     const [totalPage, setTotalPage] = useState(10);
//     const [page, setPage] = useState(1);
//     const [rowPerPage, setRowPerPage] = useState(5);
//     const [refresh, setRefresh] = useState(false)
//     const [first, setFirst] = useState(true)
//     const handleChangePagination = (event, value) => {
//         setPage(value);
//         // console.log(page)
//     };
//     useEffect(() => {
//         loadInit()
//     }, [page])

//     const loadInit = async () => {
//         try {
//             // const response = await (await ManageRawProductServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
//             const response = await (await ManageRawProductServices.view({
//                 "category": ["1", "2"],
//                 "offset": "1",
//                 "limit": "3"
//             })).data
//             const records = response.info.records

//             setRecords(records)
//             setTotalPage(response.info.totalPage)
//             // console.log("page: " + page)
//         } catch (err) {
//             toast.error(config.useMessage.fetchApiFailure)
//         }

//     }

//     useEffect(async () => {
//     }, [refresh])


//     return (
//         <>
//             {/* <p>Table</p> */}

//             <div className={classes.tableWrapper}>
//                 <TblContainer>
//                     <TblHead />
//                     <TableBody>
//                         {records.map((row) => (
//                             <StyledTableRow key={row.rawProductID} >

//                                 <StyledTableCell>
//                                     {row.rawProductID}
//                                 </StyledTableCell>
//                                 <StyledTableCell >{row.rawProductName}</StyledTableCell>
//                                 <StyledTableCell >{row.unitPrice}</StyledTableCell>
//                                 <StyledTableCell >{row.totalQuantity}</StyledTableCell>
//                                 <StyledTableCell >{row.size}</StyledTableCell>
//                                 <StyledTableCell >{row.color}</StyledTableCell>
//                                 <StyledTableCell >{row.description}</StyledTableCell>
//                                 <StyledTableCell >{row.categoryName}</StyledTableCell>
//                                 <StyledTableCell >{row.createdAt}</StyledTableCell>
//                                 <StyledTableCell >{row.updatedAt}</StyledTableCell>


//                                 <StyledTableCell >
//                                     <Button onClick={(event) => {
//                                         event.stopPropagation()
//                                         props.handleEdit(row)
//                                     }
//                                     }>
//                                         <AiOutlineEdit />
//                                     </Button>
//                                 </StyledTableCell>

//                             </StyledTableRow>

//                         )
//                         )
//                         }
//                     </TableBody>
//                 </TblContainer>
//             </div>


//             <div className={classes.paginationContainer}>
//                 <PaginationBar totalPage={totalPage} setPage={setPage} />
//             </div>
//         </>
//     );
// }

