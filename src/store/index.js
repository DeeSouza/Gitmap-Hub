import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddlewares from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const sagaMiddlewares = createSagaMiddlewares();
const middlewares = [sagaMiddlewares];

const composer =
    process.env.NODE_ENV === "development"
        ? compose(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddlewares.run(sagas);

export default store;
