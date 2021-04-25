/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableBody, Paper, TableRow, withStyles, TableCell, Typography, Switch, Button, MenuItem, FormHelperText, Select, InputLabel, FormControl, Tooltip, Zoom, Box } from '@material-ui/core';
import { toast } from 'react-toastify';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { RiInformationLine, RiExchangeBoxLine, RiMailSendLine } from 'react-icons/ri';
import config from 'src/environments/config';
import { BusinessStaffProcessOrderServices } from 'src/app/services';
import { useTable, useCustomStyles, useRefresh, useLoadingEffect } from 'src/app/utils';
import { PaginationBar, ChangeStatusOrder, ViewOrderInformation } from 'src/app/modules/core/components';
import { NotFound, Loader } from 'src/app/components';


const useStyles = makeStyles(theme => ({

}));




export const CanceledOrderTable = (props) => {
    const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    const classes = useStyles();
    const { classesCustom } = useCustomStyles()

    const headCells = ["Mã Code", "Mã Code khách hàng", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const [switchCheck, setSwitchCheck] = useState({});

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })

    useEffect(() => {
        loadInit()
    }, [page, refresh])


    const loadInit = async () => {


        try {
            const response = await (await BusinessStaffProcessOrderServices.viewCanceledOrder({ filterBy: "all", page: page, limit: limit })).data
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

                acc[`switchID:${curr.orderID}`] = curr.statusPayment

                return acc

            }, {})

            // console.log("switchObj: " + JSON.stringify(switchObj));

            setSwitchCheck(switchCheck => ({ ...switchCheck, ...switchObj }));

            setRecords(records)

        } else {
            setRecords([])
            setSwitchCheck({})
        }

        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)

    }

    const handleCloseModal = () => {
        setViewOrderInformationModal({ isOpen: false })
        handleRefresh()
    }



    return (
        <>
            <Loader loading={loading} />

            <div className={classes.tableWrapper}>
                <TblContainer>
                    <TblHead />
                    <TblBody>
                        {records && records != null && records.length > 0 ? records.map((row) => (
                            <StyledTableRow key={row.orderID}>

                                {/* <StyledTableCell>{row.orderID}</StyledTableCell> */}
                                <StyledTableCell>{row.orderCode}</StyledTableCell>
                                {/* <StyledTableCell >{row.customerID}</StyledTableCell> */}
                                <StyledTableCell >{row.customerCode}</StyledTableCell>

                                {/* <StyledTableCell >{row.note}</StyledTableCell> */}
                                <StyledTableCell >{row.statusOrder}</StyledTableCell>

                                <StyledTableCell>
                                    <Switch
                                        color="primary"
                                        checked={switchCheck[`switchID:${row.orderID}`]}
                                        // onChange={handleChangeSwitch}
                                        name={`switchID:${row.orderID}`}
                                    // onClick={handleStatusPaymentChange(row.orderID)}
                                    />
                                </StyledTableCell>

                                {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}
                                {/* <StyledTableCell style={{ maxWidth: "100px", whiteSpace: "normal" }}>{row.address}</StyledTableCell> */}

                                <StyledTableCell >{row.createdAt}</StyledTableCell>
                                <StyledTableCell >{row.updatedAt}</StyledTableCell>


                                <StyledTableCell style={{ minWidth: "230px" }}>


                                    < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            // props.handleViewInformation(row)
                                            setViewOrderInformationModal({
                                                isOpen: true,
                                                recordForViewInformation: row,
                                                handleCloseModal
                                            })
                                            // console.log("ViewOrderInformationModal: " + viewOrderInformationModal)
                                        }
                                        }>
                                            <RiInformationLine />
                                        </Button>

                                    </ Tooltip>




                                </StyledTableCell>

                            </StyledTableRow>

                        ))
                            : <NotFound />

                        }
                    </TblBody>
                </TblContainer>
            </div >

            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}

            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

        </>
    );
}


