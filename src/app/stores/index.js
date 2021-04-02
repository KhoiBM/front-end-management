
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useRootReducer } from './reducers';
import { useRootSaga } from './sagas';
export const useStoreModule = () => {
    const rootReducer = useRootReducer();

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];

    const composeEnhancers = composeWithDevTools({});

    const store = createStore(rootReducer, composeEnhancers(...enhancers));

    sagaMiddleware.run(useRootSaga().useInit);

    return store;
};
