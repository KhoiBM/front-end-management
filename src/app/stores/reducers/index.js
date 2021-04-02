import { combineReducers } from 'redux';
import { useAuthReducer } from './useAuthReducers';


export const useRootReducer = () => (combineReducers({
    auth: useAuthReducer,
    // loading: useLoadingReducer
}));