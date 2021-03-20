/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
import { AuthState } from "../states/AuthState";
import { AUTH_TYPE } from "../types";
import { toast } from "react-toastify";
import jwt_decode from 'jwt-decode';
import config from "src/environments/config";
import { useHistory } from "react-router-dom";
export const useAuthReducer = (state = new AuthState({ response: {}, isSignedIn: false }), action) => {

    switch (action.type) {
        case AUTH_TYPE.GETALL.SUCCESS:
            return {
                ...state
            };
        case AUTH_TYPE.SIGNIN.SUCCESS:
            const dataPayload = action.payload.data
            console.log("dataPayload: " + JSON.stringify(dataPayload));
            if (dataPayload && dataPayload.result == config.useResultStatus.SUCCESS) {
                // if (dataPayload && dataPayload.result == "success") {
                const token = dataPayload.info.accessToken;
                // const tokenID = dataPayload.info.idToken;

                // const decodedtokenID = jwt_decode(tokenID);
                // const role = decodedtokenID["custom:role"]
                const role = config.useRoleName.manager

                localStorage.setItem("pps-token", JSON.stringify(token));
                localStorage.setItem("role", role);
                // localStorage.setItem("role", "");


                toast.success('Đăng nhập thành công', {
                    position: "top-right",
                });

                return {
                    ...state,
                    response: action.payload.data,
                    isSignedIn: true

                };
            } else {
                toast.error(`${dataPayload.errorInfo || "Đăng nhập thất bại"}`);
            }

            return {
                ...state,
                response: action.payload.data,
                isSignedIn: false
            };

        case AUTH_TYPE.SIGNEDIN.SUCCESS:
            return {
                ...state,
                isSignedIn: true
            };
        case AUTH_TYPE.SIGNUP.SUCCESS:
            return {
                ...state,
                response: action.payload.data,
            };
        case AUTH_TYPE.CONFIRMCODE.SUCCESS:
            return {
                ...state,
                response: action.payload.data,
            };
        case AUTH_TYPE.FORGOTPASSWORD.SUCCESS:
            return {
                ...state,
                response: action.payload.data,
            };
        case AUTH_TYPE.CONFIRMFORGOTPASSWORD.SUCCESS:
            return {
                ...state,
                response: action.payload.data,
            };
        case AUTH_TYPE.RESET.SUCCESS:
            return {
                ...state,
                response: {},
            };
        default:
            return {
                ...state,
            };


    }
};


