/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { ManageServiceServices } from '../../../../../../../services/CoreServices/ManagerServices';
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


export const ServiceTable = (props) => {
    const classes = useStyles();

    const headCells = ['Mã dịch vụ', "Tên dịch vụ", "Mô tả", "Trạng thái", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(1);

    const { TblContainer, TblHead } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)


    useEffect(() => {
        loadInit()
    }, [page])

    const loadInit = async () => {
        try {
            const response = await (await ManageServiceServices.view({ filterBy: "all", page: page, limit: limit })).data
            const records = response.info.records

            const switchObj = records.reduce((acc, curr) => {
                acc[`switchID:${curr.serviceID}`] = curr.isActive
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

    const handleChangePagination = (event, value) => {
        setPage(value);
        // console.log(page)
    };

    // console.log("page:" + page)
    const handleChangeSwitch = (event) => {
        setSwitchCheck({ ...switchCheck, [event.target.name]: event.target.checked });
    };


    useEffect(async () => {
        // if (!first) {
        //     const data = await (await ManageAccountServices.viewAccountTest({ filterBy: "all", page: page })).data
        //     const records = data.info.records

        //     const switchObj = records.reduce((acc, curr) => {
        //         acc[`switchID:${curr.id}`] = curr.isActive
        //         return acc
        //     }, {})

        //     // console.log("switchObj: " + JSON.stringify(switchObj));
        //     setSwitchCheck({ ...switchCheck, ...switchObj });
        //     setRecords(records)
        //     setTotalPage(data.info.totalPage)
        //     // console.log("page: " + page)
        //     console.log("page: " + data.info.page)
        // }
        // setFirst(false)
    }, [refresh])

    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleChangeStatus = (row) => async (event) => {
        await activeOrDeActive(row, event)
    }

    const activeOrDeActive = async (row, event) => {
        const data = {
            id: row.serviceID,
            isActive: !switchCheck[`switchID:${row.serviceID}`]
        }
        // toast.dark(`test switchID:${row.id}: ${!switchCheck[`switchID:${row.id}`]}`)
        // if (switchCheck[`switchID:${row.id}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        try {
            const response = switchCheck[`switchID:${row.serviceID}`] ? await (await ManageServiceServices.deActive(data)).data : await (await ManageServiceServices.active(data)).data
            if (response.result == config.useResultStatus.SUCCESS) {
                toast.success(`${!switchCheck[`switchID:${row.serviceID}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
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

                                <StyledTableRow key={row.serviceID}>

                                    <StyledTableCell>
                                        {row.serviceID}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.serviceName}</StyledTableCell>
                                    <StyledTableCell >{row.description}</StyledTableCell>

                                    <StyledTableCell>
                                        <Switch
                                            color="primary"
                                            checked={switchCheck[`switchID:${row.serviceID}`]}
                                            onChange={handleChangeSwitch}
                                            name={`switchID:${row.serviceID}`}
                                            onClick={handleChangeStatus(row)}
                                        />
                                    </StyledTableCell>


                                    <StyledTableCell >{row.createdAt}</StyledTableCell>
                                    <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                    <StyledTableCell >
                                        <Tooltip TransitionComponent={Zoom} placement="top" title="Chỉnh sửa">

                                            <Button onClick={(event) => {
                                                event.stopPropagation()
                                                props.handleEdit(row)
                                            }
                                            }>
                                                <AiOutlineEdit />
                                            </Button>

                                        </Tooltip>

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

