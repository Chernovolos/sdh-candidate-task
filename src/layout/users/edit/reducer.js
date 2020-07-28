import * as ACTIONS from "../actions";

let initialState = {
    user: {},
    error: null,
    preloader: false,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.EDIT_USER_START:
            return {
                ...state,
            };

        case ACTIONS.EDIT_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
                preloader: false,
            };

        case ACTIONS.EDIT_USER_ERROR:
            return {
                ...state,
                user: {},
                error: null,
            };

        case ACTIONS.EDIT_USER_FINISH:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            }
    }
}