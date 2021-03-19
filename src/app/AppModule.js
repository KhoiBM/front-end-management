import React from 'react'
import AppRoutes from './AppRoutes'
import './AppStyles'
import { Provider } from 'react-redux'
import { useStoreModule } from './stores'
// import { SnackbarProvider } from 'notistack';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import { ToastContainer } from 'react-toastify'
import { viVN } from '@material-ui/core/locale';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import vi from 'date-fns/locale/vi'


const AppModule = () => {



    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#48B7E2 ",
            },
            secondary: {

                // main: "#e27348",
                main: "#478de3",
            },
            background: {
                default: "rgba(249, 250, 251, var(--bg-opacity))"
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    // backgroundColor: "#e27348"

                }
            }

        },
        props: {
            MuiAppBar: {
                root: {
                    // background: "red"
                }
            }
        }
    }, viVN);
    return (
        <>
            <Provider store={useStoreModule()}>

                <ThemeProvider theme={theme}>

                    {/* <SnackbarProvider
                        maxSnack={3}
                    > */}
                    {/* <p>AppModule</p> */}

                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={vi}>
                        <AppRoutes />
                    </MuiPickersUtilsProvider>
                    {/* </SnackbarProvider> */}
                </ThemeProvider>
                <CssBaseline />
            </Provider>

        </>
    )
}


export default AppModule


