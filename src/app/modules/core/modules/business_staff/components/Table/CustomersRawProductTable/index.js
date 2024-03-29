



/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom, Fade } from '@material-ui/core';
import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { ManageRawProductServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { useTable, useCustomStyles, useRefresh, useFormat, useLoadingEffect } from 'src/app/utils';
import { PaginationBar, ConfirmDialog } from 'src/app/modules/core/components';
import { RiTruckLine, RiInformationLine } from 'react-icons/ri';
import { NotFound, Loader } from 'src/app/components';
import { ManageCustomersRawProductServices } from 'src/app/services';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({


}));




export const CustomersRawProductTable = (props) => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    const { keywords, searchAction, clickSearch } = props

    // const headCells = ['Mã ID sản phẩm thô', 'Mã Code sản phẩm thô', "Tên sản phẩm thô", "Giá đơn vị", "Tổng sản phẩm", "Kích thước", "Màu sắc", "Mô tả", "Thể loại", "Tạo bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Tên sản phẩm thô", "Tổng sản phẩm", "Thể loại", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })





    useEffect(() => {
        // console.log("keywords: " + keywords)
        // console.log("searchAction: " + searchAction)
        if (!first) {
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
        }
    }, [clickSearch])

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

        setFirst(false)

    }, [page, refresh])


    const loadInit = async () => {
        showLoader()
        try {

            const response = await (await ManageCustomersRawProductServices.view({ filterBy: "all", page: page, limit: limit })).data

            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInit")

                } else {

                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {

                throw new Error("Response is null or undefined")

            }

        } catch (err) {

            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)

        }
        hideLoader()
    }


    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {



            setRecords(records)

        } else {

            setRecords([])


        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)
    }



    const search = async () => {
        showLoader()
        try {

            const response = await (await ManageCustomersRawProductServices.search({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data

            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("search")

                } else {

                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {

                throw new Error("Response is null or undefined")

            }


        } catch (err) {
            toast.error(config.useMessage.fetchApiFailure)
        }
        hideLoader()
    }

    const onDelete = async (rawProductID) => {
        showLoader()
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        try {
            console.log("onDelete")
            const data = { rawProductID: rawProductID }
            const response = await (await ManageCustomersRawProductServices.delete(data)).data
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                    handleRefresh()
                } else {
                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

        hideLoader()
    }




    return (
        <>
            {/* <p>Table</p> */}



            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (
                        <StyledTableRow key={row.rawProductID} >

                            {/* <StyledTableCell>{row.rawProductID}</StyledTableCell> */}
                            <StyledTableCell>{row.rawProductCode}</StyledTableCell>
                            <StyledTableCell >{row.rawProductName}</StyledTableCell>
                            {/* <StyledTableCell >{`${useFormat().formatMoney(row.unitPrice)} đ`}</StyledTableCell> */}
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
                                        <AiOutlineDelete className={classesCustom.deleteIcon} />
                                    </Button>

                                </Tooltip>

                            </StyledTableCell>

                        </StyledTableRow>

                    )) : <NotFound />
                    }
                </TblBody>
            </TblContainer>


            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />


            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}

