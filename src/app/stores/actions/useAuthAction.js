import { AUTH_TYPE } from "../types";


export const useAuthAction = () => {

    const signIn = (data) => {
        return { type: AUTH_TYPE.SIGNIN.FETCH, payload: { data } };
    };
    const signInSuccess = (data) => {
        return { type: AUTH_TYPE.SIGNIN.SUCCESS, payload: { data } };
    };
    const signInFailure = (error) => {
        return { type: AUTH_TYPE.SIGNIN.FAILURE, payload: { error } };
    };
    const signUp = (data) => {
        return { type: AUTH_TYPE.SIGNUP.FETCH, payload: { data } };
    };
    const signUpSuccess = (data) => {
        return { type: AUTH_TYPE.SIGNUP.SUCCESS, payload: { data } };
    };
    const signUpFailure = (error) => {
        return { type: AUTH_TYPE.SIGNUP.FAILURE, payload: { error } };
    };
    const getAll = () => {
        return { type: AUTH_TYPE.GETALL.FETCH, payload: { data: AUTH_TYPE.GETALL.FETCH } };
    };
    const getAllSuccess = () => {
        return { type: AUTH_TYPE.GETALL.SUCCESS, payload: { data: AUTH_TYPE.GETALL.SUCCESS } };
    };
    const getAllFailure = (error) => {
        return { type: AUTH_TYPE.GETALL.FAILURE, payload: { error } };
    };
    const reset = () => {
        return { type: AUTH_TYPE.RESET.FETCH, payload: { data: AUTH_TYPE.RESET.FETCH } };
    };
    const resetSuccess = () => {
        return { type: AUTH_TYPE.RESET.SUCCESS, payload: { data: AUTH_TYPE.RESET.SUCCESS } };
    };
    const resetFailure = (error) => {
        return { type: AUTH_TYPE.RESET.FAILURE, payload: { error } };
    };
    const signedIn = () => {
        return { type: AUTH_TYPE.SIGNEDIN.FETCH, payload: { data: AUTH_TYPE.SIGNEDIN.FETCH } };
    };
    const signedInSuccess = () => {
        return { type: AUTH_TYPE.SIGNEDIN.SUCCESS, payload: { data: AUTH_TYPE.SIGNEDIN.SUCCESS } };
    };
    const signedInFailure = (error) => {
        return { type: AUTH_TYPE.SIGNEDIN.FAILURE, payload: { error } };
    };
    const confirmCode = (data) => {
        return { type: AUTH_TYPE.CONFIRMCODE.FETCH, payload: { data } };
    };
    const confirmCodeSuccess = (data) => {
        return { type: AUTH_TYPE.CONFIRMCODE.SUCCESS, payload: { data: data } };
    };
    const confirmCodeFailure = (error) => {
        return { type: AUTH_TYPE.CONFIRMCODE.FAILURE, payload: { error } };
    };
    const forgotPassword = (data) => {
        return { type: AUTH_TYPE.FORGOTPASSWORD.FETCH, payload: { data } };
    };
    const forgotPasswordSuccess = (data) => {
        return { type: AUTH_TYPE.FORGOTPASSWORD.SUCCESS, payload: { data } };
    };
    const forgotPasswordFailure = (error) => {
        return { type: AUTH_TYPE.FORGOTPASSWORD.FAILURE, payload: { error } };
    };
    const confirmForgotPassword = (data) => {
        return { type: AUTH_TYPE.CONFIRMFORGOTPASSWORD.FETCH, payload: { data } };
    };
    const confirmForgotPasswordSuccess = (data) => {
        return { type: AUTH_TYPE.CONFIRMFORGOTPASSWORD.SUCCESS, payload: { data } };
    };
    const confirmForgotPasswordFailure = (error) => {
        return { type: AUTH_TYPE.CONFIRMFORGOTPASSWORD.FAILURE, payload: { error } };
    };
    return {
        getAll,
        getAllSuccess,
        getAllFailure,
        signIn,
        signInSuccess,
        signInFailure,
        signedIn,
        signedInSuccess,
        signedInFailure,
        signUp,
        signUpSuccess,
        signUpFailure,
        confirmCode,
        confirmCodeSuccess,
        confirmCodeFailure,
        forgotPassword,
        forgotPasswordSuccess,
        forgotPasswordFailure,
        confirmForgotPassword,
        confirmForgotPasswordSuccess,
        confirmForgotPasswordFailure,
        reset,
        resetSuccess,
        resetFailure

    };
};