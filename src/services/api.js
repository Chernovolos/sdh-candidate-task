import axios from "axios";

const BASE_URL = "http://frontend-candidate.dev.sdh.com.ua/v1/contact";

// GET All Users request
export const getUsers = () => {
    return axios.get(`${BASE_URL}`);
};

// DELETE User
export const deleteUsers = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

//GET User Details
export const getUser = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const updateUser = (id, user) => {
    return axios.put(`${BASE_URL}/${id}`, user);
};

export const createUser = (user) => {
    console.log("PARAMS", user);
    return axios.post(`${BASE_URL}/`, user)
};

export default {
    getUsers,
    deleteUsers,
    getUser,
    updateUser,
    createUser,
};



