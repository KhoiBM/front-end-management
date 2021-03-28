/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { TextField, makeStyles, InputAdornment, IconButton } from '@material-ui/core'
import { useForm } from 'src/app/utils'
import { MdSearch } from 'react-icons/md'

const useStyles = makeStyles(theme => ({
    searchBarWrapper: {
        position: "relative",
        // background: "red"
    },
    searchBar: {
        width: "30vmax"
    },
    iconSearchWrapper: {
        position: "absolute",
        top: 4,
        right: 9,

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
                    // console.log("keywords: " + keywords)

                    if (!keywords || keywords == null || keywords == undefined || keywords.length < 0) {
                        setSearchAction(false)

                        setClickSearch(!clickSearch)
                        setClickSearch(false)
                    } else {
                        setSearchAction(true)

                        setClickSearch(!clickSearch)
                        setClickSearch(true)

                    }



                }}
                >
                    <MdSearch />
                </IconButton>
            </div>

        </>
    )
}
