import * as ACTIONS from "../actions";

const initialState = {
    users: []
};

export default (state = initialState, action) => {
    let { type, payload } = action;
        return {
            ...state,
        }
}