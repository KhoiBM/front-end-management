
/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
import { LoadingState } from "../states";
import { LOADING_TYPE } from "../types";


export const useLoadingReducer = (state = new LoadingState({ loading: { status: false } }), action) => {
    switch (action.type) {
        case LOADING_TYPE.SHOW: {
            return {
                ...state,
                loading: { status: action.payload.status },
            };
        }
        case LOADING_TYPE.HIDE: {
            return {
                ...state,
                loading: { status: action.payload.status },
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};