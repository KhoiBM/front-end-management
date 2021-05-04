/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';
import { AuthService } from 'src/app/services/AuthServices/AuthService';
import { ManageAccountServices } from 'src/app/services/CoreServices/AdminServices/ManageAcccountServices';

import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { useTable, useRefresh, useLoadingEffect } from 'src/app/utils';
import { PaginationBar } from 'src/app/modules/core/components';
import { NotFound, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({

}));


export const AccountTable = (props) => {
    const classes = useStyles();

    const { filterList, action, clickFilter } = props

    const headCells = ['Mã ID', "Tên người dùng", "Email", "Vai trò", "Trạng thái", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [switchCheck, setSwitchCheck] = useState({});

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    // const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    useEffect(() => {
        console.log("clickFilter")
        if (!first) {
            setPage(1)

            if (action == "filter") {
                loadInitByFilter()
            }
        }

    }, [clickFilter])


    useEffect(() => {

        if (action == "filter") {
            loadInitByFilter()
        }

        setFirst(false)
    }, [page, refresh])




    const loadInitByFilter = async () => {
        // console.log("action: " + action)
        // console.log("filterList:" + JSON.stringify(filterList))
        // console.log("Page: " + page)

        try {
            const response = await (await ManageAccountServices.view({ roleIDList: filterList, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {


                    loadData(response)

                    console.log("loadInitByFilter")


                } else {
                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }

    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {


            const switchObj = records.reduce((acc, curr) => {

                acc[`switchID:${curr.accountID}`] = curr.active

                return acc

            }, {})


            setSwitchCheck({ ...switchCheck, ...switchObj });

            setRecords(records)

        } else {

            setRecords([])


        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)
        // setTotalPage(2)


        // console.log("page: " + page)
    }




    const handleChangeSwitch = (event) => {
        setSwitchCheck({ ...switchCheck, [event.target.name]: event.target.checked });
    };


    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleChangeStatus = (row) => async (event) => {
        // toast.info(`test switchID:${row.accountID}: ${!switchCheck[`switchID:${row.accountID}`]}`)
        // if (switchCheck[`switchID:${row.accountID}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        const data = {
            id: row.accountID,
            active: !switchCheck[`switchID:${row.accountID}`]
        }

        try {
            const response = switchCheck[`switchID:${row.accountID}`] ? await (await ManageAccountServices.deActive(data)).data : await (await ManageAccountServices.active(data)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success(`${!switchCheck[`switchID:${row.accountID}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
                    handleRefresh()
                    // toast.success("Thành công")
                } else {
                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                    setSwitchCheck({
                        ...switchCheck,
                        [event.target.name]: event.target.checked
                    })
                }
            } else {
                throw new Error("Response is null or undefined")
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
            {/* <Loader loading={loading} /> */}


            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (
                        <StyledTableRow key={row.accountID}>
                            <StyledTableCell>{row.accountID}</StyledTableCell>
                            <StyledTableCell>{row.username}</StyledTableCell>
                            <StyledTableCell>{row.email}</StyledTableCell>
                            <StyledTableCell>{row.roleName}</StyledTableCell>

                            <StyledTableCell>
                                <Switch
                                    color="primary"
                                    checked={switchCheck[`switchID:${row.accountID}`]}
                                    onChange={handleChangeSwitch}
                                    name={`switchID:${row.accountID}`}
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
                    ))
                        : <NotFound />
                    }
                </TblBody>
            </TblContainer>



            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />


        </>
    );
}




