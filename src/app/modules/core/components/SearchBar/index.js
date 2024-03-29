/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { TextField, makeStyles, InputAdornment, IconButton } from '@material-ui/core'
import { useForm } from 'src/app/utils'
import { MdSearch } from 'react-icons/md'

const useStyles = makeStyles(theme => ({
    searchBarWrapper: {
        position: "relative",
        // background: "red",
        zIndex: "100",
    },
    searchBar: {
        width: "30vmax",
        zIndex: "100",
    },
    iconSearchWrapper: {
        position: "absolute",
        top: 4,
        right: 9,
        zIndex: "100",

    }
}))

// const initialFValues = {
//     keywords: '',
// }

export const SearchBar = (props) => {
    const classes = useStyles();

    const { keywords, setKeywords, setSearchAction, clickSearch, setClickSearch, handleKeywordsChange } = props

    return (
        <>
            <div className={classes.searchBarWrapper}>
                <TextField
                    variant='outlined'
                    label="Tìm kiếm"
                    value={keywords}
                    name="keywords"
                    onChange={handleKeywordsChange}
                    className={classes.searchBar}
                />
                <IconButton className={classes.iconSearchWrapper} onClick={() => {


                    if (keywords && keywords != null && keywords.length > 0) {

                        setSearchAction(true)

                    } else {

                        setSearchAction(false)

                    }
                    setClickSearch((prev) => !prev)

                }}
                >
                    <MdSearch />
                </IconButton>
            </div>

        </>
    )
}
