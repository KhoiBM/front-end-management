

import React, { useState } from 'react'
import { makeStyles, Paper, Button } from '@material-ui/core';
import { RiCloseFill } from 'react-icons/ri';
import zIndex from '@material-ui/core/styles/zIndex';
import { PrintedProductTable } from '../../Table';
import { AddPrintedProductForm } from '../../AddForm';
import { EditPrintedProductForm } from '../../EditForm';
import { SearchBar } from 'src/app/modules/core/components';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative"

    },
    actionContainer: {
        display: "flex",
        justifyContent: "flex-end",
        // paddingRight: theme.spacing(6),
        paddingRight: theme.spacing(2)
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingRight: theme.spacing(6),
        // paddingLeft: theme.spacing(8),
        // marginRight: theme.spacing(8),
        // background: '#B6E2F3',
        width: "99%",

    },
    buttonAdd: {
        cursor: "pointer",
        // paddingRight: theme.spacing(2),
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            backgroundColor: "#fff",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    }
}));

export const ManagePrintedProduct = () => {
    const classes = useStyles();


    const [clickSearch, setClickSearch] = useState(false)
    const [searchAction, setSearchAction] = useState(false)
    const [keywords, setKeywords] = useState("")



    // useEffect(() => {
    //     // console.log("render")
    //     // console.log("searchAction: " + searchAction)
    // }, [searchAction, setSearchAction, keywords])


    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value)
        if (!event.target.value || event.target.value == null || event.target.value == undefined || event.target.value.length < 0) {
            setClickSearch(!clickSearch)
            setSearchAction(false)
        }
        // console.log("keywords: " + keywords)
    }




    const [openEditForm, setOpenEditForm] = useState(false);
    const [openAddForm, setOpenAddForm] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(0)



    const handleEdit = (row) => {
        setOpenEditForm(true);
        setRecordForEdit(row)
    }
    const handleAdd = (row) => {
        setOpenAddForm(true);
    }
    const handleCloseForm = () => {
        setOpenEditForm(false);
        setOpenAddForm(false);
    }

    return (
        <>
            {!openEditForm && !openAddForm && <Paper elevation={2} className={classes.mainContainer}>



                <>
                    <div className={classes.actionContainer}>
                        <div className={classes.actionWrapper}>
                            <SearchBar keywords={keywords} handleKeywordsChange={handleKeywordsChange} setSearchAction={setSearchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} />
                            <Button variant="outlined" color="primary" onClick={handleAdd} className={classes.buttonAdd}>Thêm sản phẩm đã in</Button>
                        </div>
                    </div>
                    <PrintedProductTable handleEdit={handleEdit} keywords={keywords} setSearchAction={setSearchAction} searchAction={searchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} />
                </>
            </Paper>
            }

            {openEditForm && <EditPrintedProductForm recordForEdit={recordForEdit} handleCloseForm={handleCloseForm} />}
            {openAddForm && <AddPrintedProductForm handleCloseForm={handleCloseForm} />}

        </>
    )
}
