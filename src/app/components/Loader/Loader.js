import React, { useEffect, useState } from 'react'
import { LinearProgress } from '@material-ui/core'

const Loader = () => {
    const [loading, setLoading] = useState(true)
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    const wait = async (milliseconds = 2000) => {
        await sleep(milliseconds);
        setLoading(false)

    };
    useEffect(() => {
        wait();

    }, [])
    return (
        <>
            {loading && <LinearProgress color="primary" />}
        </>
    )
}

export default Loader
