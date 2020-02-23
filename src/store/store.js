import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer';
import {save} from 'redux-localstorage-simple';
import createSagaMiddleware from 'redux-saga';
import {watchRootSaga} from "./sagas/rootSaga";

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25}) : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(save(
                {namespace: 'products-app'}
            ), sagaMiddleware)
        ),
    )
);
export const store = configureStore({});
sagaMiddleware.run(watchRootSaga);
