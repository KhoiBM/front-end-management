/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Typography } from '@material-ui/core'

export const PageHeader = (props) => {
    return (
        <>

            {/* <Typography variant={"h5"} color={"secondary"}>{props.children}</Typography> */}
            <Typography variant={"h5"} color={"primary"}>{props.children}</Typography>

        </>
    )
}
