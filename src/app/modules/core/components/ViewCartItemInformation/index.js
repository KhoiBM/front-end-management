

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, TextField, Switch, FormControlLabel, Divider, DialogTitle, DialogContent, Slide, Dialog } from '@material-ui/core'
import { toast } from 'react-toastify';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose } from 'src/app/components';
import config from 'src/environments/config';
import { useLoadPhotoList } from 'src/app/utils';
import { PageHeader } from 'src/app/modules/core/components';
import { ViewCart } from '../ViewCart';
import { GirdCartItemPhotoList } from '../GirdCartItemPhotoList';

const useStyles = makeStyles(theme => ({

    rootGridCartItemDetail: {

    },
    gridItemPhotoList: {

        // background: "blue",

    },
    gridItem2: {



    },
    dialog: {



    },
    dialogTitle: {
        position: "relative",
        // // backgroundColor: "red"
        padding: theme.spacing(2),


    },
    dialogContent: {

    },
    dialogAction: {

    },
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export const ViewCartItemInformation = (props) => {

    const classes = useStyles();

    const { cartItemDetailModal, setCartItemDetailModal } = props

    const { isOpen, recordForCartItemDetail, handleCloseModal } = cartItemDetailModal


    const [recordForGridCartItemPhotoList, setRecordForGridCartItemPhotoList] = useState({})

    useEffect(() => {
        if (recordForCartItemDetail && recordForCartItemDetail != null) {

            const { orderCode, orderDetailCode, categoryCode, rawProductCode, createdBy } = recordForCartItemDetail

            setRecordForGridCartItemPhotoList({
                orderCode,
                orderDetailCode,
                categoryCode,
                rawProductCode,
                createdBy
            })
            console.table(recordForCartItemDetail)
        }
    }, [recordForCartItemDetail])

    return (
        <>
            {/* isOpen */}
            <Dialog fullScreen open={isOpen} classes={{ paper: classes.dialog }} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <IconClose handleClose={handleCloseModal} />

                    <PageHeader>Xem thông tin chi tiết mục trong đơn hàng</PageHeader>
                    <Grid container spacing={1} className={classes.rootGridCartItemDetail}>

                        <Grid item xs={8} sm={8} md={8} className={classes.gridItemPhotoList}>
                            <GirdCartItemPhotoList recordForGridCartItemPhotoList={recordForGridCartItemPhotoList} />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} className={classes.gridItemContent}>
                            <Grid container>
                                {/* <Grid item xs={12} sm={12} md={12} className={classes.}>

                                </Grid> */}
                            </Grid>



                        </Grid>

                    </Grid>


                </DialogContent>

            </Dialog >


        </>
    )
}


