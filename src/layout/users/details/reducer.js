import * as ACTIONS from "../actions";

let initialState = {
    user: {},
    error: null,
    preloader: false,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.GET_USER_START:
        case ACTIONS.CREATE_USER_START:
            return {
                ...state,
            };

        case ACTIONS.GET_USER_SUCCESS:
        case ACTIONS.CREATE_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
                preloader: false,
            };

        case ACTIONS.GET_USER_ERROR:
        case ACTIONS.CREATE_USER_ERROR:
            return {
                ...state,
                user: {},
                error: payload,
                preloader: true,
            };

        case ACTIONS.GET_USER_FINISH:
        case ACTIONS.CREATE_USER_FINISH:
            return {
                ...state,
            };

        default:
            return {
            ...state,
        }
    }
}