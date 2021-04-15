import React, { useState } from 'react'

export const useRefresh = () => {

    const [refresh, setRefresh] = useState(false)
    const [first, setFirst] = useState(true)

    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }
    return { refresh, setRefresh, first, setFirst, handleRefresh }
}
// const  { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()