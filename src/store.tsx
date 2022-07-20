import { RootReducer } from "./Reducers/RootReducer";
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from "@redux-saga/core";
import UserSaga from "./Sagas/UserSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(UserSaga);
export default store;