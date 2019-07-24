import { all, takeLatest } from "redux-saga/effects";
import { Types as DriversTypes } from "../ducks/drivers/drivers";
import { addDriver } from "./drivers/drivers";

export default function* rootSaga() {
    yield all([takeLatest(DriversTypes.ADD_REQUEST, addDriver)]);
}
