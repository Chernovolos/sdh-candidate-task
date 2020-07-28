import * as ACTIONS from "../actions";

const initialState = {
    users: [],
    preloader: false,
    error: null,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.GET_USERS_LIST_START:
            console.log("%c%s", "color: blue;","GET_USERS_LIST_START");
            return {
                ...state,
                preloader: true
            };

        case ACTIONS.GET_USERS_LIST_SUCCESS:
            console.log("%c%s", "color: green;", "GET_USERS_LIST_SUCCESS" , payload);
            return {
                ...state,
                preloader: false,
                users: payload,
            };

        case ACTIONS.GET_USERS_LIST_ERROR:
            console.log("%c%s", "color: read;" ,"GET_USERS_LIST_ERROR");
            return {
                ...state,
                preloader: false,
                users: [],
                error: payload,
            };

        case ACTIONS.GET_USERS_LIST_FINISH:
            console.log("%c%s", "color: gray;" ,"GET_USERS_LIST_FINISH");
            return {
                ...state,
                preloader: false,
            };

        default:
            return {
                ...state
            }
    }
}