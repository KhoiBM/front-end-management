/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Typography } from '@material-ui/core'

const PageHeader = (props) => {
    return (
        <>
            <Container>
                <Typography variant={"h5"} color={"primary"}>{props.children}</Typography>
            </Container>
        </>
    )
}

export default PageHeader
