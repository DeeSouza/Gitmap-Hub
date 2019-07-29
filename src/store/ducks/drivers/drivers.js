export const Types = {
    ADD_REQUEST: "drivers/ADD_REQUEST",
    ADD_SUCCESS: "drivers/ADD_SUCCESS",
    ADD_FAILURE: "drivers/ADD_FAILURE",
    DEL_REQUEST: "drivers/DEL_REQUEST"
};

// Reducers
const INITIAL_STATE = {
    drivers: [],
    error: null
};

export default function drivers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
            return { ...state };
        case Types.ADD_SUCCESS:
            return {
                ...state,
                drivers: [...state.drivers, action.payload.user]
            };
        case Types.ADD_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case Types.DEL_REQUEST:
            return {
                ...state,
                drivers: state.drivers.filter(
                    driver => driver.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

// Actions
export const Creators = {
    addDriverRequest: ({ user, geo }) => ({
        type: Types.ADD_REQUEST,
        payload: { user, geo }
    }),
    addDriverSuccess: user => ({
        type: Types.ADD_SUCCESS,
        payload: { user }
    }),
    addDriverFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: { error }
    }),
    addDriverDelete: id => ({
        type: Types.DEL_REQUEST,
        payload: { id }
    })
};
