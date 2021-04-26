

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button } from '@material-ui/core';

import { toast } from 'react-toastify';
import { ManageRawProductServices, ManageRawProductImportationServices } from '../../../../../../../services/CoreServices/ManagerServices';
import config from '../../../../../../../../environments/config';
import { useTable, useCustomStyles, useRefresh, useLoadingEffect } from 'src/app/utils';
import { PaginationBar } from 'src/app/modules/core/components';
import { NotFound, Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({

}));



export const RawProductImportationTable = (props) => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    // const headCells = ['ID', "Tên sản phẩm thô", "Số lượng", "Cung cấp bởi", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]
    const headCells = ['Mã Code', "Mã Code sản phẩm thô", "Tên sản phẩm thô", "Số lượng", "Cung cấp bởi", "Ngày tạo", "Ngày sửa đổi"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()


    useEffect(() => {
        loadInit()
    }, [page, refresh])


    const loadInit = async () => {

        try {

            const response = await (await ManageRawProductImportationServices.view({ filterBy: "all", page: page, limit: limit })).data

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

            setRecords(records)

        } else {

            setRecords([])

        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)
    }




    return (
        <>
            {/* <p>Table</p> */}
            {/* <Loader loading={loading} /> */}

            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (
                        <StyledTableRow key={row.importedRawProductID} >

                            {/* <StyledTableCell>{row.importedRawProductID}</StyledTableCell> */}
                            <StyledTableCell>{row.importedRawProductCode}</StyledTableCell>
                            {/* <StyledTableCell >{row.rawProductID}</StyledTableCell> */}
                            <StyledTableCell >{row.rawProductCode}</StyledTableCell>
                            <StyledTableCell >{row.rawProductName}</StyledTableCell>
                            <StyledTableCell >{row.quantity}</StyledTableCell>
                            <StyledTableCell >{row.providedBy}</StyledTableCell>

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            <StyledTableCell >{row.updatedAt}</StyledTableCell>

                        </StyledTableRow>

                    )) : <NotFound />
                    }
                </TblBody>
            </TblContainer>


            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}

