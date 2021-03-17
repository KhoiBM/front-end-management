/* eslint-disable no-unused-vars */
import { useHttpModule } from "../HttpServices"
import config from "src/environments/config"
import { useControlled } from "@material-ui/core"
import { toast } from "react-toastify"
export class AuthService {
    static signIn = (data) => {
        // return useHttpModule().post(config.useApiPath.api.auth.signIn, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    data,
                    role: config.useRoleName.manager,
                    token: "test"

                },
            }
        })
    }
    static signUp = (data) => {
        // return useHttpModule().post(config.useApiPath.api.auth.signUp, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                data
            }
        })
    }
    static confirmCode = (data) => {
        // return useHttpModule().post(config.useApiPath.api.auth.confirmCode, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                data
            }
        })
    }
    static forgotPassword = (data) => {
        // return useHttpModule().post(config.useApiPath.api.auth.forgotPassword, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                data
            }
        })
    }
    static confirmForgotPassword = (data) => {
        // return useHttpModule().post(config.useApiPath.api.auth.forgotPassword, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                data
            }
        })
    }

    static signOut = () => {
        localStorage.removeItem("pps-token")
        // localStorage.removeItem("token")
        localStorage.removeItem("role")
    }

}