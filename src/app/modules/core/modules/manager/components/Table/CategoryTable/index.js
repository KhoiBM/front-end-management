/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';
import useTable from 'src/app/utils/handles/useTable';
import { toast } from 'react-toastify';
import PaginationBar from '../../../../../components/PaginationBar';
import { AiOutlineEdit } from 'react-icons/ai';
import { ManageServiceServices, ManageCategoryServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { uuid } from 'uuidv4';
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


export const CategoryTable = (props) => {
    const classes = useStyles();
    const headCells = ['ID', "Tên thể loại", "Mô tả", "Trạng thái", "Tên dịch vụ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const [records, setRecords] = useState([])
    const { TblContainer, TblHead } = useTable(records, headCells);
    const [switchCheck, setSwitchCheck] = useState({});
    const [totalPage, setTotalPage] = useState(10);
    const [page, setPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(5);
    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)
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
            const data = await (await ManageCategoryServices.view({ filterBy: "all", page: page, rowPerPage: rowPerPage })).data
            const records = data.info.records

            const switchObj = records.reduce((acc, curr) => {
                acc[`switchID:${curr.id}`] = curr.isActive
                return acc
            }, {})
            // console.log("switchObj: " + JSON.stringify(switchObj));
            setSwitchCheck({ ...switchCheck, ...switchObj });
            setRecords(records)
            setTotalPage(data.info.totalPage)
            // console.log("page: " + page)
            console.log("page: " + data.info.page)
        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }

    }

    useEffect(async () => {
    }, [refresh])

    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleChangeStatus = (row) => async (event) => {
        await activeOrDeActive(row, event)
    }

    const activeOrDeActive = async (row, event) => {
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
        try {
            const response = switchCheck[`switchID:${row.id}`] ? await (await ManageCategoryServices.deActive(data)).data : await (await ManageCategoryServices.active(data)).data
            if (response.result == config.useResultStatus.SUCCESS) {
                toast.success(`${!switchCheck[`switchID:${row.id}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
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
            {/* <p>Table</p> */}

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records.map((row) => {
                            return (

                                <StyledTableRow key={row.id}>

                                    <StyledTableCell component="th" scope="row">
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.categoryName}</StyledTableCell>
                                    <StyledTableCell >{row.description}</StyledTableCell>

                                    <StyledTableCell>
                                        <Switch
                                            color="primary"
                                            checked={switchCheck[`switchID:${row.id}`]}
                                            onChange={handleChangeSwitch}
                                            name={`switchID:${row.id}`}
                                            onClick={handleChangeStatus(row)}
                                        />
                                    </StyledTableCell>

                                    <StyledTableCell >{row.serviceName}</StyledTableCell>

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

                            )
                        }
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

