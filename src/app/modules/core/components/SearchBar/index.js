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
        width: "30rem"
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

    // const [keywords, setKeywords] = useState("")

    // const handleKeywordsChange = (event) => {
    //     setKeywords(event.target.value)

    // }

    return (
        <>
            <div className={classes.searchBarWrapper}>
                <TextField
                    variant='outlined'
                    label="Tìm kiếm"
                    value={props.keywords}
                    name="keywords"
                    onChange={props.handleKeywordsChange}
                    className={classes.searchBar}
                />
                <IconButton className={classes.iconSearchWrapper} onClick={() => {
                    // console.log("keywords: " + keywords)

                    if (!props.keywords || props.keywords == null || props.keywords == undefined || props.keywords.length < 0) {
                        props.setSearchAction(false)
                        props.setClickSearch(!props.clickSearch)
                    } else {
                        props.setClickSearch(!props.clickSearch)
                        props.setSearchAction(true)
                    }



                }}
                >
                    <MdSearch />
                </IconButton>
            </div>

        </>
    )
}
