import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, CardContent, Card, Typography, Container, Box, IconButton, Tooltip, Zoom, Menu, MenuItem } from '@material-ui/core'
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ManageStatisticServices } from 'src/app/services/CoreServices/ManagerServices/ManageStatisticServices';
import { MdAttachMoney, MdMenu } from 'react-icons/md';
import { CSVLink, CSVDownload } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { useFormat, useLoadingEffect } from 'src/app/utils';
import { AiOutlineExport } from 'react-icons/ai';
import { CgExport } from 'react-icons/cg'
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';


const useStyles = makeStyles(theme => ({
    overallStatisticRoot: {
        // marginBottom: theme.spacing(8),
        // height: "180px",
        // background: "#B6E2F3",
        // width: "80rem",
        width: "82rem",
        // border: "3px solid #48b7e2",
        margin: "0rem auto"
    },
    titleContainer: {
        // marginBottom: theme.spacing(8),
        // height: "180px",
        // background: "#B6E2F3",
        width: "80rem",
        // border: "3px solid #48b7e2",
        margin: "1rem auto"
    },
    titleWrapper: {
        width: "12rem",
    },
    rootCard: {
        minWidth: 275,
        // width: "350px",
        width: "300px",
        // height: "100px",
        height: "120px",
        // background: "#48b7e2",
        // border: "3px solid #48b7e2",
        position: "relative"


    },
    title: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    CardContainer: {
        maxWidth: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // gap: theme.spacing(11),
        flexWrap: "wrap",
        flex: 1,
        // background: "red",

    },
    subTitle: {
        fontSize: 18,
        textAlign: "right",
        fontWeight: "100",
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2)

    },
    content: {
        fontSize: 24,
        // marginTop: theme.spacing(4),
        textAlign: "right",
        color: "#333333"
    },
    iconCardContainer: {
        width: "60px",
        height: "60px",
        // border: "1px solid black",
        // background: "#DBECDA",
        borderRadius: "9999px",
        position: "absolute",
        top: 25,
        left: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconCard: {
        fontSize: "40px",


    },
    iconExport: {
        // filter: "invert(100)"
        // color: "rgba(0, 0, 0, 0.54) !important",
        textDecoration: "none !important",
        cursor: "pointer",
        width: " 20px",
        height: "20px",
        lineHeight: "24px",
        color: "#6E8192",
        textAlign: " center",
        transform: "scale(0.85)",
        '&:hover': {
            opacity: 1,
            pointerEvents: "all",
            transition: "0.15s ease all",
            color: "#000"
        }

    },
    iconExportWrapper: {
        // background: "blue",
        position: "absolute",
        left: theme.spacing(1),
        top: theme.spacing(0.5)

    },
    iconExportIconButton: {
        width: "100%"
    },
    iconExportContainer: {
        width: "4rem",
        height: "50px",
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


    },
    overallContainer: {
        minWidth: 275,
        width: "300px",
        // background: "blue",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2)
    },
    titleOverallContainer: {
        width: "250px",
        height: "50px",
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    menuExport: {
        // background: "red",
        position: "relative",

        "& .MuiMenu-paper": {
            // background: "blue",
            position: "absolute !important",
            top: "110px !important",
            width: "8rem",
            color: "red !important",
            // background: "#000",
            // marginRigth: "590rem",
            border: "1px solid #ddd",
            borderRadius: '3px',
            // padding: '3px',
            // opacity: '0',
            minWidth: '110px',
            transition: '0.15s ease all',
            // pointerEvents: 'none',
        }
    }
}));

const OverallRevenueStatistic = () => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();


    const [anchorElMenuExport, setAnchorElMenuExport] = useState(null);


    const openMenuExport = Boolean(anchorElMenuExport);


    const handleMenuExport = (event) => {
        setAnchorElMenuExport(event.currentTarget);
    };

    const handleCloseMenuExport = () => {
        setAnchorElMenuExport(null);
    };




    const [overallRevenue, setOverallRevenue] = useState({})

    useEffect(() => {

        loadInit()

    }, [])

    const loadInit = async () => {
        showLoader()
        try {
            const response = await (await ManageStatisticServices.viewOverallRevenue()).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    const overallRevenue = response.info.record
                    // toast.success("Thành công")
                    console.log(JSON.stringify(overallRevenue))
                    setOverallRevenue(overallRevenue)
                } else {
                    toast.error(`${config.useMessage.resultFailure} + ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
        hideLoader()
    }


    const getCsvData = () => {
        const csvData = [['DOANH THU'], ['Tổng doanh thu', 'Tuần', 'Tháng', 'Năm']];

        csvData.push([`${overallRevenue.overall}`, `${overallRevenue.inWeek}`, `${overallRevenue.inMonth}`, `${overallRevenue.inYear}`]);

        return csvData;
    };






    return (
        <>

            {/* {!loading.status && */}
            <div className={classes.overallStatisticRoot}>


                <div className={classes.CardContainer}>

                    <Card className={classes.rootCard}>
                        <Box className={classes.iconExportWrapper} >
                            <Tooltip TransitionComponent={Zoom} placement="left" title="Xuất doanh thu ra tệp csv">
                                <div className={classes.iconExportIconButton} onClick={handleMenuExport}>
                                    <MdMenu />
                                    {/* <CgExport /> */}
                                    {/* <BiExport /> */}
                                </div>
                            </Tooltip>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElMenuExport}
                                // anchorOrigin={{
                                //     vertical: 'bottom',
                                //     horizontal: 'left',
                                // }}
                                keepMounted
                                open={openMenuExport}
                                onClose={handleCloseMenuExport}
                                className={classes.menuExport}
                            >

                                <MenuItem onClick={() => {
                                    handleCloseMenuExport();
                                }}>
                                    <CSVLink filename="DOANH THU.csv" data={getCsvData()} className={classes.iconExport} >Xuất ra CSV</CSVLink>
                                </MenuItem>

                            </Menu>
                        </Box>

                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#DBECDA " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#67AC5B" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tổng doanh thu
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>

                                {`${useFormat().formatMoney(overallRevenue.overall)} đ`}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#CCE2FC " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#327DF6" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tuần
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {/* {}<span>đ</span> */}
                                {`${useFormat().formatMoney(overallRevenue.inWeek)} đ`}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#FDF1CC " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#F6C244" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Tháng
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {/* {overallRevenue.inMonth}<span>đ</span> */}
                                {`${useFormat().formatMoney(overallRevenue.inMonth)} đ`}

                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <Box component="div" className={classes.iconCardContainer} style={{ background: "#F1D3D6 " }}>
                            <div className={classes.iconCardWrapper}>
                                <MdAttachMoney className={classes.iconCard} style={{ color: "#CB444A" }} />
                            </div>
                        </Box>
                        <CardContent>
                            <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
                                Năm
                        </Typography>
                            <Typography className={classes.content} color="textSecondary" gutterBottom>
                                {/* {overallRevenue.inYear}<span>đ</span> */}
                                {`${useFormat().formatMoney(overallRevenue.inYear)} đ`}
                            </Typography>

                        </CardContent>
                    </Card>


                </div>
            </div>
            {/* } */}
        </>
    )
}

export { OverallRevenueStatistic }
