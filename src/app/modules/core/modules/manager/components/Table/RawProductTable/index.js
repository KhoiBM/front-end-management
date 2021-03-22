/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'
// import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';
// import { toast } from 'react-toastify';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { ManageRawProductServices } from '../../../../../../../services/CoreServices/ManagerServices';
// import config from '../../../../../../../../environments/config';
// import { uuid } from 'uuidv4';
// import { useTable } from 'src/app/utils';
// import { PaginationBar } from 'src/app/modules/core/components';
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
//             localStorage.setItem("pps-token", "eyJraWQiOiJSTmkrS25iRXEyXC9nWkIwbFhoekt1TnJnekpYaldXb00rV1RtdndTQ1c1ST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2NWRlMWNiMC0xMDNiLTQ1MTEtYmNlYy0yNTQ3YjlmZGExODkiLCJldmVudF9pZCI6IjliNmM0MDAwLTU3NjgtNDlhYS1iN2Q2LTA1YWU5NWFlNDA2YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTU5OTM2OTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV80SWF6OUtFTFMiLCJleHAiOjE2MTU5OTcyOTMsImlhdCI6MTYxNTk5MzY5MywianRpIjoiNjk2ZTVkZmYtY2JkZi00YTFhLWJlZDctNWU4ZDI0M2VkOGVjIiwiY2xpZW50X2lkIjoiNThwNnM1aDBqZWJlY29yY2Z1cmhwYnM4MWciLCJ1c2VybmFtZSI6InZ1dnUifQ.Cn62JnCsbkMJQ7KIvwrrVhcfaH_yBbx9_ENXp655vTYx3uTE_-yC6IXIaacZgwgdOPbCWvXaI8iZy1fbwWRGVR8w5pvUL4rmh4_yBXEv1sZ3rjsSoscJXm2Ieozww_63YWMr_Ee2Mv1Y9mAYoryjcN4yqn_eT3TQlm8E1xWwS7wbi7utQbj-PHTAb2Yvse6pSNbqWpv47egRMpZbZe1z0d-w94dFNITjQGppJR_tc5KniYLX5_XgqGAVYj4G15z2ailVdAr7mabjWjbaau6UhCo21WyUqz75n-KzZ6p48Nj6QmKlj4MQbVLorZSiKmIPt7CpVqmWNkX7hvigna33sg")
//             // const response = await (await ManageRawProductServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
//             const response = await (await ManageRawProductServices.view({
//                 "category": ["1", "2"],
//                 "offset": "1",
//                 "limit": "3"
//             })).data

//             console.log("response: " + JSON.stringify(response))
//             const records = response.info.rawProductLists
//             setRecords(records)
//             // setTotalPage(response.info.totalPage)
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
//                                 <StyledTableCell >{row.rawPrductName}</StyledTableCell>
//                                 <StyledTableCell >{row.price}</StyledTableCell>
//                                 <StyledTableCell >{row.quantity}</StyledTableCell>
//                                 <StyledTableCell >{row.size}</StyledTableCell>
//                                 <StyledTableCell >{row.color}</StyledTableCell>
//                                 <StyledTableCell >{row.description}</StyledTableCell>


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






/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom, Fade } from '@material-ui/core';
import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { ManageRawProductServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { useTable } from 'src/app/utils';
import { PaginationBar, ConfirmDialog } from 'src/app/modules/core/components';
import { RiTruckLine, RiInformationLine } from 'react-icons/ri';


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


export const RawProductTable = (props) => {
    const classes = useStyles();

    const { keywords, searchAction, clickSearch } = props

    const headCells = ['Mã sản phẩm thô', "Tên sản phẩm thô", "Giá đơn vị", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Tạo bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

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
        try {
            const response = await (await ManageRawProductServices.view({ filterBy: "all", page: page, limit: limit })).data

            const records = response.info.records

            setRecords(records)
            setTotalPage(response.info.totalPage)
            // console.log("page: " + page)
            console.log("loadinit")
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }
    }

    const search = async () => {
        try {
            const response = await (await ManageRawProductServices.search({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data

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
            const data = { rawProductID: rawProductID }
            const response = await (await ManageRawProductServices.delete(data)).data
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

                                <StyledTableCell>
                                    {row.rawProductID}
                                </StyledTableCell>
                                <StyledTableCell >{row.rawProductName}</StyledTableCell>
                                <StyledTableCell >{row.unitPrice}</StyledTableCell>
                                <StyledTableCell >{row.totalQuantity}</StyledTableCell>
                                <StyledTableCell >{row.size}</StyledTableCell>
                                <StyledTableCell >{row.color}</StyledTableCell>
                                <StyledTableCell >{row.description}</StyledTableCell>
                                <StyledTableCell >{row.categoryName}</StyledTableCell>

                                <StyledTableCell >{row.createdBy}</StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell style={{ minWidth: "130px" }}>{row.updatedAt}</StyledTableCell>

                                <StyledTableCell style={{ minWidth: "230px" }}>
                                    <Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết">

                                        <Button onClick={(event) => {
                                            event.stopPropagation()

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

