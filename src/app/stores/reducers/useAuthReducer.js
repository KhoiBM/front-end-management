/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
import { AuthState } from "../states/AuthState";
import { AUTH_TYPE } from "../types";

export const useAuthReducer = (state = new AuthState({ response: {}, isSignedIn: false }), action) => {

    switch (action.type) {
        case AUTH_TYPE.GETALL.SUCCESS:
            return {
                ...state
            };
        case AUTH_TYPE.SIGNIN.SUCCESS:
            return {
                ...state,
                response: action.payload.data,
                isSignedIn: true

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


