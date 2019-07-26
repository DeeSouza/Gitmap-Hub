// Types
export const Types = {
    SHOW_MODAL: "adduser/SHOW_MODAL",
    HIDE_MODAL: "adduser/HIDE_MODAL"
};

// Reducers
const INITIAL_STATE = {
    modal: false
};

export default function adduser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SHOW_MODAL:
            return {
                ...state,
                modal: action.payload.modal,
                geo: action.payload.geo
            };
        case Types.HIDE_MODAL:
            return { ...state, modal: action.payload.modal };
        default:
            return state;
    }
}

// Actions
export const Creators = {
    addUserShow: status => ({
        type: Types.SHOW_MODAL,
        payload: {
            modal: status.modal,
            geo: status.geo
        }
    }),
    addUserHide: status => ({
        type: Types.HIDE_MODAL,
        payload: {
            modal: status.modal
        }
    })
};
