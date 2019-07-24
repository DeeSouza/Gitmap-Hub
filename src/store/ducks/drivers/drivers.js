export const Types = {
    ADD_REQUEST: "drivers/ADD_REQUEST",
    DEL_REQUEST: "drivers/DEL_REQUEST"
};

// Reducers
const INITIAL_STATE = {
    data: [],
    error: null
};

export default function drivers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
            console.log(action.type);
            break;

        default:
            return state;
    }
}

// Actions
export const Creators = {
    addDriverRequest: driver => ({
        type: Types.ADD_REQUEST,
        payload: { driver }
    })
};
