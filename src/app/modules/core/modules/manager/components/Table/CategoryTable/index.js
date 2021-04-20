/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { ManageServiceServices, ManageCategoryServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { useTable, useCustomStyles, useRefresh } from 'src/app/utils';
import { PaginationBar } from 'src/app/modules/core/components';
import { NotFound } from 'src/app/components';

const useStyles = makeStyles(theme => ({

}));


export const CategoryTable = (props) => {

    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    // const headCells = ['Mã ID', "Mã Code", "Tên thể loại", "Mô tả", "Trạng thái", "Tên dịch vụ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Tên thể loại", "Mô tả", "Trạng thái", "Tên dịch vụ", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()


    useEffect(() => {
        loadInit()
    }, [page, refresh])

    const loadInit = async () => {

        try {

            const response = await (await ManageCategoryServices.view({ filterBy: "all", page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInit")

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


    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {

            const switchObj = records.reduce((acc, curr) => {

                acc[`switchID:${curr.categoryID}`] = curr.active

                return acc

            }, {})

            // console.log("switchObj: " + JSON.stringify(switchObj));

            setSwitchCheck({ ...switchCheck, ...switchObj });

            setRecords(records)

        } else {

            setRecords([])

            setSwitchCheck({})

        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)
    }


    const handleChangeSwitch = (event) => {
        setSwitchCheck({ ...switchCheck, [event.target.name]: event.target.checked });
    };

    // console.log("switchCheck: " + JSON.stringify(switchCheck));
    const handleChangeStatus = (row) => async (event) => {
        await activeOrDeActive(row, event)
    }

    const activeOrDeActive = async (row, event) => {
        const data = {
            id: row.categoryID,
            active: !switchCheck[`switchID:${row.categoryID}`]
        }
        // toast.dark(`test switchID:${row.id}: ${!switchCheck[`switchID:${row.id}`]}`)
        // if (switchCheck[`switchID:${row.id}`]) {
        //     console.log('deactive')
        // } else {
        //     console.log('active')
        // }
        try {
            const response = switchCheck[`switchID:${row.categoryID}`] ? await (await ManageCategoryServices.deActive(data)).data : await (await ManageCategoryServices.active(data)).data
            if (response.result == config.useResultStatus.SUCCESS) {
                toast.success(`${!switchCheck[`switchID:${row.categoryID}`] ? "Kích hoạt thành công" : "Vô hiệu hoá thành công"}`)
                handleRefresh()
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


            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (

                        <StyledTableRow key={row.categoryID}>

                            {/* <StyledTableCell>{row.categoryID}</StyledTableCell> */}

                            <StyledTableCell>{row.categoryCode}</StyledTableCell>
                            <StyledTableCell >{row.categoryName}</StyledTableCell>
                            <StyledTableCell >{row.description}</StyledTableCell>

                            <StyledTableCell >{row.active ? "đã kích hoạt" : "vô hiệu hoá"}</StyledTableCell>

                            {/* <StyledTableCell>
                                <Switch
                                    color="primary"
                                    checked={switchCheck[`switchID:${row.categoryID}`]}
                                    onChange={handleChangeSwitch}
                                    name={`switchID:${row.categoryID}`}
                                    onClick={handleChangeStatus(row)}
                                />
                            </StyledTableCell> */}

                            <StyledTableCell >{row.serviceName}</StyledTableCell>

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

