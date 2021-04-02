import React, { useState } from 'react'

export const useToggleFormAddEdit = () => {
    const [openEditForm, setOpenEditForm] = useState(false);
    const [openAddForm, setOpenAddForm] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState({})

    const handleEdit = (row) => {
        setOpenEditForm(true);
        setRecordForEdit(row)
    }
    const handleAdd = () => {
        setOpenAddForm(true);
    }
    const handleCloseForm = () => {
        setOpenEditForm(false);
        setOpenAddForm(false);
    }
    return { openEditForm, setOpenEditForm, openAddForm, setOpenAddForm, recordForEdit, setRecordForEdit, handleEdit, handleAdd, handleCloseForm }
}
