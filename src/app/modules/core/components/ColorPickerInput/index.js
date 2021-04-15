/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, ClickAwayListener } from '@material-ui/core';
import { SketchPicker } from 'react-color';

const useStyles = makeStyles(theme => ({

    colorPickerInputWrapper: {

    }
}))

export const ColorPickerInput = (props) => {

    const classes = useStyles();

    const { displayColorPicker, setDisplayColorPicker, color, handleChangeColor } = props

    return (
        <>
            {displayColorPicker &&
                <ClickAwayListener onClickAway={() => {
                    setDisplayColorPicker(false)
                }}>
                    <div className={classes.colorPickerInputWrapper} >

                        <SketchPicker color={color} onChangeComplete={handleChangeColor}
                            disableAlpha={true}
                        />

                    </div>
                </ClickAwayListener>


            }
        </>
    )
}
