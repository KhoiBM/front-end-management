
import { AuthService } from "src/app/services/AuthServices/AuthService";
import { takeLatest, call, put } from "redux-saga/effects";
import { useAuthAction, useLoadingAction } from "../actions";
import { AUTH_TYPE } from "../types";
import { toast } from "react-toastify";
import config from "src/environments/config";
import jwt_decode from 'jwt-decode';
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
        yield put(useLoadingAction().showLoading());
        try {
            yield put(useAuthAction().getAllSuccess());
        } catch (err) {
            yield put(useAuthAction().getAllFailure(err));
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useReset() {
        yield put(useLoadingAction().showLoading());
        try {
            yield put(useAuthAction().resetSuccess());
        } catch (err) {
            yield put(useAuthAction().resetFailure(err));
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useSignIn(action) {
        yield put(useLoadingAction().showLoading());
        try {
            const { data } = yield call(AuthService.signIn,
                action.payload.data
            );

            console.log("useSignIn-data:" + data)


            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    const token = data.info.accessToken;
                    const tokenID = data.info.idToken;

                    const decodedTokenID = jwt_decode(tokenID);
                    const role = decodedTokenID["custom:role"]

                    localStorage.setItem("pps-token", JSON.stringify(token));
                    localStorage.setItem("role", role);
                    // localStorage.setItem("role", "");

                    toast.success('Đăng nhập thành công');

                    RouteService.redirectByRole(role)


                } else {
                    // toast.error(`${"Đăng nhập thất bại"} - ${data.errorInfo} `);
                    toast.error(`${"Đăng nhập thất bại"}`);
                }

            } else {
                throw new Error("Response is null or undefined")
            }


            yield put(useAuthAction().signInSuccess(data));
        } catch (err) {
            yield put(useAuthAction().signInFailure(err));
            // toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
            toast.error(`${"Đăng nhập thất bại"}`);
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useSignUp(action) {
        yield put(useLoadingAction().showLoading());
        try {
            const { data } = yield call(AuthService.signUp,
                action.payload.data
            );

            console.log("data: " + JSON.stringify(data))
            console.log("action: " + JSON.stringify(action))


            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    toast.info("Vui lòng kích hoạt code trong email")

                    RouteService.push({
                        pathname: "/auth/confirm_code",
                        search: "",
                        state: {
                            username: action.payload.data.username,
                            email: action.payload.data.email
                        }
                    })





                } else {
                    toast.error("Đăng ký thất bại")

                }

                yield put(useAuthAction().signUpSuccess(data));

            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            yield put(useAuthAction().signUpFailure(err));
            toast.error("Đăng ký thất bại")
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useConfirmCode(action) {
        yield put(useLoadingAction().showLoading());
        try {
            const { data } = yield call(AuthService.confirmCode,
                action.payload.data
            );

            console.log("data: " + JSON.stringify(data))
            console.log("action: " + JSON.stringify(action))


            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    toast.success('Đăng ký thành công')

                    RouteService.push("/auth/signin")

                } else {
                    toast.error("Xác nhận thất bại")

                }

                yield put(useAuthAction().confirmCodeSuccess(data));

            } else {
                throw new Error("Response is null or undefined")
            }



        } catch (err) {
            yield put(useAuthAction().confirmCodeFailure(err));
            toast.error("Xác nhận thất bại")
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useForgotPassword(action) {
        yield put(useLoadingAction().showLoading());
        try {
            const { data } = yield call(AuthService.forgotPassword,
                action.payload.data
            );


            console.log("data: " + JSON.stringify(data))
            console.log("action: " + JSON.stringify(action))


            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    toast.info('Vui lòng nhập Code để đổi mật khẩu')

                    RouteService.push(
                        {
                            pathname: `/auth/confirm_forgotpassword`,
                            search: "",
                            state: {
                                username: action.payload.data.username
                            }
                        }

                    )

                } else {
                    toast.error("Xác nhận thất bại")

                }

            } else {
                throw new Error("Response is null or undefined")
            }




            yield put(useAuthAction().forgotPasswordSuccess(data));
        } catch (err) {
            yield put(useAuthAction().forgotPasswordFailure(err));
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useConfirmForgotPassword(action) {
        yield put(useLoadingAction().showLoading());
        try {
            const { data } = yield call(AuthService.confirmForgotPassword,
                action.payload.data
            );

            console.log("data: " + JSON.stringify(data))
            console.log("action: " + JSON.stringify(action))


            if (data && data != null) {
                if (data.result == config.useResultStatus.SUCCESS) {

                    toast.success('Thay mật khẩu thành công')

                    RouteService.push(
                        {
                            pathname: "/auth/signin",
                            search: "",
                            state: {

                            }
                        }

                    )

                } else {
                    toast.error("Xác nhận thất bại")

                }

            } else {
                throw new Error("Response is null or undefined")
            }


            yield put(useAuthAction().confirmForgotPasswordSuccess(data));
        } catch (err) {
            yield put(useAuthAction().confirmForgotPasswordFailure(err));
        }
        yield put(useLoadingAction().hideLoading());
    }

    function* useSignedIn() {
        yield put(useLoadingAction().showLoading());
        try {
            yield put(useAuthAction().signedInSuccess());
        } catch (err) {
            yield put(useAuthAction().signInFailure(err));
        }
        yield put(useLoadingAction().hideLoading());
    }

    return { useInit };
};
