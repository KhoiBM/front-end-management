/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),

        },
        '& .MuiPagination-ul .MuiButtonBase-root': {
            // background: "#fff",

            // border: "1px solid #fff"
        }

    }
}));
export const PaginationBar = (props) => {
    const classes = useStyles();
    // const [page, setPage] = useState(1);
    const handleChangePagination = (event, value) => {
        // setPage(value);
        // console.log(value)
        props.setPage(value)
    };
    return (
        <>

            <div className={classes.root}>
                {/* <Pagination count={props.totalPage} variant="outlined" shape="rounded" color="secondary" onChange={handleChangePagination} showFirstButton showLastButton /> */}
                <Pagination count={props.totalPage} page={props.page} variant="outlined" shape="rounded" color="primary" onChange={handleChangePagination} showFirstButton showLastButton />
            </div>
        </>
    )
}