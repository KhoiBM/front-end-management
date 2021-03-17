/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { Table, TableContainer, makeStyles, Paper, Typography, TableRow, TableHead, withStyles, TableCell } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    tableContainer: {
        width: "95%",
        marginTop: theme.spacing(10),

    },
    table: {
        '& thead th': {
            fontWeight: '900',
            color: "#000",
            backgroundColor: "#FAFAFA"

        },
        '& tbody td': {
            fontWeight: "200",
        },
        '& tbody tr:hover': {
            backgroundColor: "#fffbf2",
            cursor: "pointer"
        }
    }
}));
const StyledTableCell = withStyles((theme) => ({
    root: {
    },
    head: {
        // fontWeight: "900",
        // borderTop: "1px solid black"
    },
    body: {
        // fontWeight: "100",
        // borderBottom: 'none',
    }
}))(TableCell);

export const useTable = (records, headCells) => {
    const classes = useStyles();
    const TblContainer = props => (
        <TableContainer component={Paper} elevation={0} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="account table">
                {props.children}
            </Table>
        </TableContainer>
    )
    const TblHead = props => (
        <TableHead>
            <TableRow >
                {headCells.map((text, index) =>
                    <StyledTableCell key={index} >
                        <Typography variant="subtitle1">  {text}</Typography>
                    </StyledTableCell>
                )
                }
            </TableRow>
        </TableHead>
    )

    return { TblContainer, TblHead }
}


