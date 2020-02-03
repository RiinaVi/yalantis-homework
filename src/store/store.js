import {createStore, compose} from "redux";
import rootReducer from './reducers/rootReducer';
// import {save} from 'redux-localstorage-simple';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            //делает промежуточные операции с данными в момент
            //их обновления в редакс сторе
            // applyMiddleware(save(
            //     {namespace: 'todo-app'}
            // ))
        ),
    )
);
const store = configureStore({});

export default store;
