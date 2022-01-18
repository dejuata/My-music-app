import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { trackReducer } from "../reducers/trackReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: "root",
    storage
};

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    track: trackReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    ));

export const persistor = persistStore(store);
