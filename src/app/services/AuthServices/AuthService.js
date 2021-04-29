/* eslint-disable no-unused-vars */
import { useHttpModule } from "../HttpServices"
import config from "src/environments/config"
export class AuthService {
    static signIn = (data) => {
        return useHttpModule().post(config.useApiPath.api.auth.signIn, data)

    }
    static signUp = (data) => {
        return useHttpModule().post(config.useApiPath.api.auth.signUp, data)

    }
    static confirmCode = (data) => {
        return useHttpModule().post(config.useApiPath.api.auth.confirmCode, data)

    }
    static forgotPassword = (data) => {
        return useHttpModule().post(config.useApiPath.api.auth.forgotPassword, data)

    }
    static confirmForgotPassword = (data) => {
        return useHttpModule().post(config.useApiPath.api.auth.confirmForgotPassword, data)

    }

    static signOut = () => {
        localStorage.removeItem("pps-token")
        localStorage.removeItem("role")
    }

}