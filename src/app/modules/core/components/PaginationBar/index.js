/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // background: "red",
        paddingTop: "2rem",
        paddingBottom: "3rem",
        // paddingRight: theme.spacing(6)
        paddingRight: theme.spacing(1.5)
    },
    paginationWrapper: {
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
    const { totalPage } = props
    // const [page, setPage] = useState(1);
    const handleChangePagination = (event, value) => {
        // setPage(value);
        // console.log(value)
        props.setPage(value)
    };
    return (
        <>
            {totalPage != null && totalPage > 1 &&
                <div className={classes.paginationContainer}>
                    <div className={classes.paginationWrapper}>
                        <Pagination count={props.totalPage} page={props.page} variant="outlined" shape="rounded" color="primary" onChange={handleChangePagination} showFirstButton showLastButton />
                    </div>
                </div>

            }

        </>
    )
}