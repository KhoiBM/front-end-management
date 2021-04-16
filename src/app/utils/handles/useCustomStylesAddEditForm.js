

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    pageFormContainer: {
        width: "100%",
        minHeight: "800px",
        height: "auto",  //  làm mất goc paper ở dưới 
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        position: "relative",
        overflow: "scroll",


    },
    pageForm: {
        // width: "25rem",
        width: "50rem",
        padding: theme.spacing(3),
        position: "relative",
        height: "auto",
        minHeight: "300px",
        // background: "blue",
    },


    rootForm: {
        marginTop: theme.spacing(3),
        width: "100%",
        height: "auto",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '200%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        },

    },
    rootGridContainer: {
        marginBottom: theme.spacing(2)
    },

    gridItem1: {
        width: "100%",
        // background: "yellow",
        position: "relative",
        '&  .MuiFormControl-root': {
            width: "100%"
        }
    },


    gridItem2: {
        width: "100%",
        // background: "orange",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center"
        paddingTop: theme.spacing(2),
        height: "auto",
        minHeight: "500px",

    },
    colorPickerInputContainer: {
        background: "orange",
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(2),
        zIndex: 999
    },


    buttonWrapper: {
        // border: "1px solid red",
        width: '99.5%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // marginRight: theme.spacing(1),
    },
    button: {
        cursor: "pointer",
        // marginTop: theme.spacing(2),
        color: "#fff",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            // backgroundColor: "var(--secondary-color-main)",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(3),
        top: theme.spacing(0.6),
    }
}));

export const useCustomStylesAddEditForm = () => {

    const classesCustomStylesAddEditForm = useStyles();

    return { classesCustomStylesAddEditForm }
}
