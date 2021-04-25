import { combineReducers } from 'redux';
import { useAuthReducer } from './useAuthReducer';
import { useLoadingReducer } from './useLoadingReducer';

export const useRootReducer = () => (combineReducers({
    auth: useAuthReducer,
    loadingState: useLoadingReducer,
}));