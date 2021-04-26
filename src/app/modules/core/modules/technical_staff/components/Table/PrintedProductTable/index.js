/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, Tooltip, Zoom } from '@material-ui/core';

import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useTable, useCustomStyles, useRefresh, useLoadingEffect } from 'src/app/utils';
import { ManagePrintedProductServices } from 'src/app/services';
import config from 'src/environments/config';
import { PaginationBar, ConfirmDialog } from 'src/app/modules/core/components';
import { RiInformationLine } from 'react-icons/ri';
import { NotFound, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const useStyles = makeStyles(theme => ({

}));



export const PrintedProductTable = (props) => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    const { keywords, searchAction, clickSearch } = props

    // const headCells = ['Mã ID', "Mã Code", "Mã ID đơn hàng", "Mã ID sản phẩm thô", "Tên sản phẩm đã in", "Tổng sản phẩm", "Mô tả", "Ghi chú", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ["Mã Code", "Mã Code đơn hàng", "Mã Code sản phẩm thô", "Tên sản phẩm đã in", "Tổng sản phẩm", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

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

            const response = await (await ManagePrintedProductServices.view({ filterBy: "all", page: page, limit: limit })).data

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

        try {

            const response = await (await ManagePrintedProductServices.search({ filterBy: "all", keywords: keywords, page: page, limit: limit })).data

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

    }


    const onDelete = async (printedProductID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        try {
            console.log("onDelete")
            console.log("printedProductID: " + printedProductID)
            const data = { printedProductID: printedProductID }
            const response = await (await ManagePrintedProductServices.delete(data)).data
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


    }

    return (
        <>
            <Loader loading={loading} />

            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (

                        <StyledTableRow key={row.printedProductID} >

                            {/* <StyledTableCell>{row.printedProductID}</StyledTableCell> */}
                            <StyledTableCell>{row.printedProductCode}</StyledTableCell>
                            {/* <StyledTableCell>{row.orderID}</StyledTableCell> */}
                            <StyledTableCell>{row.orderCode}</StyledTableCell>
                            {/* <StyledTableCell>{row.rawProductID}</StyledTableCell> */}
                            <StyledTableCell>{row.rawProductCode}</StyledTableCell>

                            <StyledTableCell>{row.printedProductName}</StyledTableCell>

                            <StyledTableCell >{row.totalQuantity}</StyledTableCell>
                            {/* <StyledTableCell >{row.description}</StyledTableCell> */}
                            {/* <StyledTableCell >{row.note}</StyledTableCell> */}

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            <StyledTableCell >{row.updatedAt}</StyledTableCell>

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
                                        setConfirmDialog(
                                            {
                                                isOpen: true,
                                                title: "Bạn có chắc là muốn xoá ?",
                                                subTitle: "Bạn không thể hoàn tác hành động này",
                                                onConfirm: () => { onDelete(row.printedProductID) }

                                            }
                                        )

                                    }
                                    }>
                                        <AiOutlineDelete className={classesCustom.deleteIcon} />
                                    </Button>

                                </Tooltip>

                            </StyledTableCell>

                        </StyledTableRow>

                    ))
                        : <NotFound />
                    }
                </TblBody>
            </TblContainer>


            {confirmDialog.isOpen && <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />}


            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}

