
import { AuthService } from "src/app/services/AuthServices/AuthService";
import { takeLatest, call, put } from "redux-saga/effects";
import { useAuthAction } from "../actions";
import { AUTH_TYPE } from "../types";
import { toast } from "react-toastify";
import config from "src/environments/config";
import jwt_decode from 'jwt-decode';
import { useNavigateRole } from "src/app/utils";
import { RouteService } from "src/app/services";

export const useAuthSaga = () => {
    function* useInit() {
        yield takeLatest(AUTH_TYPE.SIGNIN.FETCH, useSignIn);
        yield takeLatest(AUTH_TYPE.GETALL.FETCH, useGetAll);
        yield takeLatest(AUTH_TYPE.SIGNEDIN.FETCH, useSignedIn);
        yield takeLatest(AUTH_TYPE.SIGNUP.FETCH, useSignUp);
        yield takeLatest(AUTH_TYPE.CONFIRMCODE.FETCH, useConfirmCode);
        yield takeLatest(AUTH_TYPE.FORGOTPASSWORD.FETCH, useForgotPassword);
        yield takeLatest(AUTH_TYPE.CONFIRMFORGOTPASSWORD.FETCH, useConfirmForgotPassword);
        yield takeLatest(AUTH_TYPE.RESET.FETCH, useReset);
    }
    function* useGetAll() {
        // yield put(useLoadingAction().show());
        try {
            yield put(useAuthAction().getAllSuccess());
        } catch (err) {
            yield put(useAuthAction().getAllFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useReset() {
        // yield put(useLoadingAction().show());
        try {
            yield put(useAuthAction().resetSuccess());
        } catch (err) {
            yield put(useAuthAction().resetFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useSignIn(action) {
        // yield put(useLoadingAction().show());
        try {
            const { data } = yield call(AuthService.signIn,
                action.payload.data
            );
            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    const token = data.info.accessToken;
                    const tokenID = data.info.idToken;

                    const decodedTokenID = jwt_decode(tokenID);
                    const role = decodedTokenID["custom:role"]
                    // const role = config.useRoleName.administrator

                    localStorage.setItem("pps-token", JSON.stringify(token));
                    localStorage.setItem("role", role);
                    // localStorage.setItem("role", "");

                    toast.success('Đăng nhập thành công');

                    RouteService.redirectByRole(role)

                    yield put(useAuthAction().signInSuccess(data));

                } else {
                    toast.error(`${data.errorInfo || "Đăng nhập thất bại"}`);
                    toast.error(config.useMessage.resultFailure)
                }

            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            yield put(useAuthAction().signInFailure(err));
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
        // yield put(useLoadingAction().hide());
    }

    function* useSignedIn() {
        // yield put(useLoadingAction().show());
        try {
            yield put(useAuthAction().signedInSuccess());
        } catch (err) {
            yield put(useAuthAction().signInFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useSignUp(action) {
        // yield put(useLoadingAction().show());
        try {
            const { data } = yield call(AuthService.signUp,
                action.payload.data
            );
            yield put(useAuthAction().signUpSuccess(data));
        } catch (err) {
            yield put(useAuthAction().signUpFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useConfirmCode(action) {
        // yield put(useLoadingAction().show());
        try {
            const { data } = yield call(AuthService.confirmCode,
                action.payload.data
            );
            yield put(useAuthAction().confirmCodeSuccess(data));
        } catch (err) {
            yield put(useAuthAction().confirmCodeFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useForgotPassword(action) {
        // yield put(useLoadingAction().show());
        try {
            const { data } = yield call(AuthService.forgotPassword,
                action.payload.data
            );
            yield put(useAuthAction().confirmCodeSuccess(data));
        } catch (err) {
            yield put(useAuthAction().confirmCodeFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    function* useConfirmForgotPassword(action) {
        // yield put(useLoadingAction().show());
        try {
            const { data } = yield call(AuthService.confirmForgotPassword,
                action.payload.data
            );
            yield put(useAuthAction().confirmForgotPasswordSuccess(data));
        } catch (err) {
            yield put(useAuthAction().confirmForgotPasswordFailure(err));
        }
        // yield put(useLoadingAction().hide());
    }
    return { useInit };
};
