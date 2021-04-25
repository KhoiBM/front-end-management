import { LOADING_TYPE } from "../types";

export const useLoadingAction = () => {

    const showLoading = () => {
        return { type: LOADING_TYPE.SHOW, payload: { status: true } };

    };
    const hideLoading = () => {
        return { type: LOADING_TYPE.HIDE, payload: { status: false } };
    };
    return { showLoading, hideLoading };
};