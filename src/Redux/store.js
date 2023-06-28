import {applyMiddleware, createStore} from "redux";
import combReduser from "./reduser/combReduser";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMidlware = createSagaMiddleware();

const store = createStore(
    combReduser,applyMiddleware(sagaMidlware)
);


sagaMidlware.run(rootSaga)

export default store