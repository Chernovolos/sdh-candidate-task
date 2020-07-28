import { toastr } from 'react-redux-toastr';
import User from "../../models/user";
import serviceAPI from "../../services/api";
import { NEW_ID } from "../../constants/routes";

///GET Users List Request Actions
export const GET_USERS_LIST_START = "GET_USERS_LIST_START";
export const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_ERROR = "GET_USERS_LIST_ERROR";
export const GET_USERS_LIST_FINISH = "GET_USERS_LIST_FINISH";

///GET User Request Actions
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_FINISH = "GET_USER_FINISH";

//UPDATE User Request Actions
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const UPDATE_USER_FINISH = "UPDATE_USER_FINISH";

//CREATE User Request Actions
export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const CREATE_USER_FINISH = "CREATE_USER_FINISH";

//DELETE User Request Actions
export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";
export const DELETE_USER_FINISH = "DELETE_USER_FINISH";

//EDIT User
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const EDIT_USER_FINISH = "EDIT_USER_FINISH";


export const getUsersListStart = () => ({type: GET_USERS_LIST_START});
export const getUsersListSuccess = (users) => ({type: GET_USERS_LIST_SUCCESS, payload: users});
export const getUsersListError = (error) => ({type: GET_USERS_LIST_ERROR, payload: error});
export const getUsersListFinish = () => ({type: GET_USERS_LIST_FINISH});

export const getUserList = () => (dispatch) => {
    // start
    dispatch(getUsersListStart());
    // get request
    serviceAPI.getUsers()
        .then(({data}) => {
            let users = data.map(user => (User.fromServerUser(user)));
            dispatch(getUsersListSuccess(users));
            // console.log(users);
        })
        .catch(error => {
            dispatch(getUsersListError(error));
            toastr.error("Error", 'managed to get users');
        })
        .finally(() => {
            // end
            dispatch(getUsersListFinish());
        });
};


export const deleteUserStart = () => ({type: DELETE_USER_START});
export const deleteUserSuccess = (id) => ({type: DELETE_USER_SUCCESS, payload: id});
export const deleteUserError = (error) => ({type: DELETE_USER_ERROR, payload: error});
export const deleteUserFinish = () => ({type: DELETE_USER_FINISH});

export const deleteUser = (id, onDone) => (dispatch) => {
    //start
    dispatch(deleteUserStart());
    // get request
    serviceAPI.deleteUsers(id)
        .then((result) => {
            dispatch(deleteUserSuccess(id));
            if (onDone) {
                onDone(result);
            }
        })
        .catch(error => {
            dispatch(deleteUserError(error));
            toastr.error("Error", "the user could not be deleted")
        })
        .finally(() => {
            //end
            dispatch(deleteUserFinish())
        })
};

export const getUserStart = () => ({type: GET_USER_START});
export const getUserSuccess = (user) => ({type: GET_USER_SUCCESS , payload: user});
export const getUserError = (error) => ({type: GET_USER_ERROR, payload: error});
export const getUserFinish = () => ({type: GET_USER_FINISH});

export const getUserDetails = (id) => (dispatch) => {
    //start
    dispatch(getUserStart());
    //get request
    serviceAPI.getUser(id)
        .then(({data}) => {
            let user = User.fromServerUser(data);
            dispatch(getUserSuccess(user))
        })
        .catch(error => {
            dispatch(getUserError(error));
            toastr.error("Error", "could not get user details")
        })
        .finally(()=>{
            dispatch(getUserFinish());
        });
};

export const editUserStart = () => ({type: EDIT_USER_START});
export const editUserSuccess = (user) => ({type: EDIT_USER_SUCCESS, payload: user});
export const editUserError = (error) => ({type: EDIT_USER_ERROR, payload: error});
export const editUserFinish = () => ({type: EDIT_USER_FINISH});

export const getUserDetailsForEdit = (id) => (dispatch) => {
    if (id !== NEW_ID) {
        //start
        dispatch(editUserStart());
        //get request
        serviceAPI.getUser(id)
            .then(({data}) => {
                let user = User.fromServerUser(data);
                dispatch(editUserSuccess(user));
            })
            .catch(error => {
                dispatch(editUserError(error));
                toastr.error("Error", "user change failed")
            })
            .finally(() => {
                dispatch(editUserFinish());
            })
    }
};

export const updateUserStart = () => ({type:UPDATE_USER_START});
export const updateUserSuccess = (id, user) => ({type: UPDATE_USER_SUCCESS, payload: id, user});
export const updateUserError = (error) => ({type: UPDATE_USER_ERROR, payload: error});
export const updateUserFinish = () => ({type: UPDATE_USER_FINISH});

export const getUpdateUser = (id, user) => (dispatch) => {
    //start
    dispatch(updateUserStart());

    //get request
    serviceAPI.updateUser(id, user.toServerUser())
        .then(({data}) => {
            let user = User.fromServerUser(data);
            dispatch(updateUserSuccess(id, user));
            toastr.success("Success", "change of user succeeded")
        })
        .catch((error) => {
            dispatch(updateUserError(error));
            toastr.error("Error", "user change failed")
        })
        .finally(() => {
            dispatch(updateUserFinish());
        })
};

export  const createUserStart = () => ({type: CREATE_USER_START});
export const createUserSuccess = (user) => ({type: CREATE_USER_SUCCESS, payload: user});
export const createUserError = (error) => ({type: CREATE_USER_ERROR, payload: error});
export const createUserFinish = () => ({type: CREATE_USER_FINISH});

export const createNewUser = (user) => (dispatch) => {
    //start
    dispatch(createUserStart());

    serviceAPI.createUser(user.toServerUser())
        .then((data) => {
            let user = User.fromServerUser(data);
            console.log("RESULT", data);
            dispatch(createUserSuccess(user));
            toastr.success("Success", "successful user creation")
        })
        .catch((error) => {
            dispatch(createUserError(error));
            toastr.error("Error", "user creation failed");
        })
        .finally(() => {
            dispatch(createUserFinish());
        })
};



