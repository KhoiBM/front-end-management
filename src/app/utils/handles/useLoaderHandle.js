import React, { useState } from 'react'
import useWait from 'src/app/utils/handles/useWait.js'
export const useLoaderHandle = () => {
    const [loading, setLoading] = useState(true)
    const { wait } = useWait()

    const hideLoader = async () => {
        await wait(500)
        setLoading(false)
    }
    const showLoader = async () => {
        setLoading(true)
    }

    return { loading, setLoading }
}
