/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { ToolbarPersonalize } from '../ToolbarPersonalize';
import { MainStageBar } from '../MainStageBar';
import { FooterBarPersonalize } from '../FooterBarPersonalize';

const useStyles = makeStyles(theme => ({
    rootGridContainer: {

    },
    mainPersonalizeContainer: {
        width: "100%",
        height: "auto",
        minHeight: "100%",
        // background: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",


    },
    toolbarContainer: {
        width: "100%",
        height: "auto",
        minHeight: "7vh",
        // background: "blue",

    },
    mainStageBarContainer: {
        width: "100%",
        height: "auto",
        minHeight: "70vh",
        // background: "red",
        // borderTop: "1px solid rgb(0,0,0,0.23)",
        borderBottom: "1px solid rgb(0,0,0,0.23)",
    },
    footerBarContainer: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: "center",
        // background: "orange",
        // border: "1px solid red",
        // padding: theme.spacing(1)


    }
}))

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const MainPersonalize = (props) => {

    const classes = useStyles();

    const { recordForMainPersonalize, dragUrl, stageRef } = props


    const [recordForMainStageBar, setRecordForMainStageBar] = useState(null)

    const [recordForFooterBarPersonalize, setRecordForFooterBarPersonalize] = useState(null)

    const [bgPhoto, setBgPhoto] = useState(null)

    useEffect(() => {
        console.log("recordForMainPersonalize:" + JSON.stringify(recordForMainPersonalize))
        if (recordForMainPersonalize && recordForMainPersonalize != null) {
            const { orderCode, orderDetailCode, categoryCode, rawProductCode, createdBy } = recordForMainPersonalize
            setRecordForMainStageBar({
                orderCode,
                orderDetailCode
            })
            setRecordForFooterBarPersonalize({
                categoryCode,
                rawProductCode,
                createdBy
            })

        }
    }, [recordForMainPersonalize])

    const handleExport = () => {
        const uri = stageRef.current.toDataURL({
            quality: 1,
            pixelRatio: 2
        });
        console.log(uri);

        downloadURI(uri, 'design.png');
    };
    const handleUpload = () => {
        const uri = stageRef.current.toDataURL({
            quality: 1,
            pixelRatio: 2
        });
        console.log(uri);

    };


    return (
        <>
            <div className={classes.mainPersonalizeContainer}>

                <div className={classes.toolbarContainer}>
                    <ToolbarPersonalize stageRef={stageRef} handleExport={handleExport} handleUpload={handleUpload} />
                </div>

                <div className={classes.mainStageBarContainer}>
                    {
                        recordForMainStageBar && recordForMainStageBar != null &&
                        <MainStageBar
                            recordForMainStageBar={recordForMainStageBar}
                            bgPhoto={bgPhoto}
                            dragUrl={dragUrl}
                            stageRef={stageRef}
                        />
                    }
                </div>

                <div className={classes.footerBarContainer}>
                    {
                        recordForFooterBarPersonalize && recordForFooterBarPersonalize != null &&
                        <FooterBarPersonalize
                            recordForFooterBarPersonalize={
                                recordForFooterBarPersonalize
                            }
                            setBgPhoto={setBgPhoto}
                        />
                    }
                </div>

            </div>
        </>
    )
}

export default MainPersonalize
