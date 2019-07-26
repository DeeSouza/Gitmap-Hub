import { combineReducers } from "redux";

import drivers from "./drivers/drivers";
import adduser from "./adduser/adduser";

export default combineReducers({
    drivers,
    adduser
});
