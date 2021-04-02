import React, { useState } from 'react'

export const useToggleViewInformation = () => {
    const [recordForViewInformation, setRecordForViewInformation] = useState({})

    const [openViewInformation, setOpenViewInformation] = useState(false);

    const handleViewInformation = (row) => {
        setOpenViewInformation(true)
        setRecordForViewInformation(row)
    }
    const handleCloseViewInformation = () => {
        setOpenViewInformation(false);
    }


    return { recordForViewInformation, setRecordForViewInformation, openViewInformation, setOpenViewInformation, handleViewInformation, handleCloseViewInformation }
}
