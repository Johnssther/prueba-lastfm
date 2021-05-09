import { createStore,applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const logger = createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);
// persistor.purge();

export {store, persistor};


