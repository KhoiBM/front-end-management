/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),

        }
    }
}));
const PaginationBar = (props) => {
    const classes = useStyles();
    // const [page, setPage] = useState(1);
    const handleChangePagination = (event, value) => {
        // setPage(value);
        console.log(value)
        props.setPage(value)
    };
    return (
        <>

            <div className={classes.root}>
                <Pagination count={props.totalPage} variant="outlined" shape="rounded" color="primary" onChange={handleChangePagination} showFirstButton showLastButton />
            </div>
        </>
    )
}
export default PaginationBar