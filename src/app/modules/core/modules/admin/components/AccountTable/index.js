/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';
import { AuthService } from 'src/app/services/AuthServices/AuthService';
import { ManageAccountServices } from 'src/app/services/CoreServices/AdminServices/ManageAcccountServices';

import config from 'src/environments/config';
import { toast } from 'react-toastify';
import PaginationBar from '../../../../components/PaginationBar';
import { AiOutlineEdit } from 'react-icons/ai';
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


const AccountTable = (props) => {
    const classes = useStyles();
    const headCells = ['Mã tài khoản', "Tên người dùng", "Email", "Vai trò", "Trạng thái", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const [records, setRecords] = useState([])
    const { TblContainer, TblHead } = useTable(records, headCells);
    const [switchCheck, setSwitchCheck] = useState({});
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)

    useEffect(async () => {
        loadInit()
    }, [page])

    useEffect(async () => {
        // if (!first) {
        //     const data = await (await ManageAccountServices.viewAccountTest({ filterBy: "all", page: page })).data

        // }
        // setFirst(false)
    }, [refresh])


    const loadInit = async () => {

        try {
            const response = await (await ManageAccountServices.viewAccount({ filterBy: "all", page: page })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const records = response.info.records

                    const switchObj = records.reduce((acc, curr) => {
                        acc[`switchID:${curr.id}`] = curr.isActive
                        return acc
                    }, {})

                    // console.log("switchObj: " + JSON.stringify(switchObj));
                    setSwitchCheck({ ...switchCheck, ...switchObj });
                    setRecords(records)
                    setTotalPage(response.info.totalPage)
                    // console.log("page: " + page)

                    // toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Reponse is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`,)
        }

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

    const handleChangeStatus = (row) => async (event) => {
        const data = {
            id: row.id,
            isActive: !switchCheck[`switchID:${row.id}`]
        }
        // toast.dark(`test switchID:${row.id}: ${!switchCheck[`switchID:${row.id}`]}`)
        // if (switchCheck[`switchID:${row.id}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        // try {
        //     if (response.result == config.useResultStatus.SUCCESS) {
        //         toast.success(`${!switchCheck[`switchID:${row.id}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
        //         setRefresh(!refresh)
        //     } else {
        //         toast.error(config.useMessage.resultFailure)
        //         setSwitchCheck({
        //             ...switchCheck,
        //             [event.target.name]: event.target.checked
        //         })
        //     }
        // } catch (err) {
        //     toast.error(config.useMessage.fetchApiFailure)
        //     setSwitchCheck({
        //         ...switchCheck,
        //         [event.target.name]: event.target.checked
        //     })
        // }

        try {
            const response = switchCheck[`switchID:${row.id}`] ? await (await ManageAccountServices.deActiveAccount(data)).data : await (await ManageAccountServices.activeAccount(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success(`${!switchCheck[`switchID:${row.id}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
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
                throw new Error("Reponse is null or undefined")
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
            {/* <p>AccountTable</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell >{row.username}</StyledTableCell>
                                <StyledTableCell >{row.email}</StyledTableCell>
                                <StyledTableCell >{row.roleName}</StyledTableCell>
                                <StyledTableCell>
                                    <Switch
                                        color="primary"
                                        checked={switchCheck[`switchID:${row.id}`]}
                                        onChange={handleChangeSwitch}
                                        name={`switchID:${row.id}`}
                                        onClick={handleChangeStatus(row)}
                                    />
                                </StyledTableCell>

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>
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
                        ))}
                    </TableBody>
                </TblContainer>
            </div>
            <div className={classes.paginationContainer}>
                <PaginationBar totalPage={totalPage} setPage={setPage} />
            </div>
        </>
    );
}


export default AccountTable
