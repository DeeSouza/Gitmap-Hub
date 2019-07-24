import { call, put, select } from "redux-saga/effects";
import { Creators as DriversActions } from "../../ducks/drivers/drivers";

import api from "../../../services/api";

export function* addDriver(action) {
    try {
        const { data } = yield call(api.get(`repos/${action.payload.driver}`));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
