/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { Table, TableContainer, makeStyles, Paper, Typography, TableRow, TableHead, withStyles, TableCell, TableBody } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    tableWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        minHeight: "500px",
        // backgroundColor: "red",
    },
    tableContainer: {
        width: "99%",
        height: "auto",
        minHeight: "300px",
    },
    table: {
        '& thead th': {
            fontWeight: '900',
            color: "#000",
            backgroundColor: "#FAFAFA"

        },
        '& tbody td': {
            fontWeight: "200",
            height: "50px",
        },
        '& .MuiTableBody-root': {
            fontWeight: "200",
            width: "100%",
            maxHeight: "500px !important"
        },
        '& tbody tr:hover': {
            backgroundColor: "#fffbf2",
            cursor: "pointer"
        }
    }
}));
const StyledTableHeadCell = withStyles((theme) => ({
    root: {
    },
    head: {
        fontWeight: "900",
        // borderTop: "1px solid black",
        "& .MuiTypography-root": {
            fontWeight: '900 !important',
            color: "#000",
        }
    },
    body: {
        fontWeight: "100",
        // borderBottom: 'none',
    }
}))(TableCell);

const StyledTableCell = withStyles((theme) => ({
    root: {
    },
    head: {
        fontWeight: "900",

    },
    body: {
        fontWeight: "100",
        // borderBottom: 'none',
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
    },
}))(TableRow);

export const useTable = (records, headCells) => {
    const classes = useStyles();



    const TblContainer = props => (
        <div className={classes.tableWrapper}>
            <TableContainer component={Paper} elevation={0} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="account table">
                    {props.children}
                </Table>
            </TableContainer>
        </div>
    )
    const TblHead = props => (
        <TableHead>
            <TableRow >
                {headCells.map((text, index) =>
                    <StyledTableHeadCell key={index} >
                        <Typography variant={"body1"}>{text}</Typography>
                    </StyledTableHeadCell>
                )
                }
            </TableRow>
        </TableHead>
    )
    const TblBody = props => (
        <TableBody style={{ position: "relative", height: "auto", minHeight: "1000px" }}>
            {props.children}
        </TableBody>
    )

    return { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell }
}


