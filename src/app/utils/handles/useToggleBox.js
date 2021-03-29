import React, { useState } from 'react'

export const useToggleBox = () => {
    const [recordForUse, setRecordForUse] = useState({})

    const [openBox, setOpenBox] = useState(false);

    const handleOpen = (data) => {
        setOpenBox(true)
        setRecordForUse(data && data != null && data.length > 0 ? data : {})
    }
    const handleClose = () => {
        setOpenBox(false);
    }

    return { recordForUse, openBox, handleOpen, handleClose }
}
