

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

const useStyles = makeStyles(theme => ({

    rootGrid: {

    },
    gridItem1: {

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

    const { recordForCartItemDetail } = props

    const { CartItemDetailModal, setCartItemDetailModal } = props
    const { isOpen, handleCloseModal } = CartItemDetailModal
    // const [recordForCart, setRecordForCart] = useState({})

    useEffect(() => {
        // if (recordForCartItemDetail && recordForCartItemDetail != null) {

        // }
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


                </DialogContent>

            </Dialog >


        </>
    )
}


