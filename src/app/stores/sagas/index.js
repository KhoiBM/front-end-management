import { all } from 'redux-saga/effects';
import { useAuthSaga } from './useAuthSaga';

export const useRootSaga = () => {
    function* useInit() {
        yield all([
            useAuthSaga().useInit(),
        ]);
    }
    return { useInit };
};