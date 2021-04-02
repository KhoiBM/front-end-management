import React, { useState } from 'react'

export const useToggleChangeStatusForm = () => {
    const [recordForChangeStatus, setRecordForChangeStatus] = useState({})

    const [openChangeStatus, setOpenChangeStatus] = useState(false);

    const handleChangeStatus = (data) => {
        setOpenChangeStatus(true)
        setRecordForChangeStatus(data)
    }
    const handleCloseChangeStatus = () => {
        setOpenChangeStatus(false);
    }

    return { recordForChangeStatus, openChangeStatus, handleChangeStatus, handleCloseChangeStatus }
}
