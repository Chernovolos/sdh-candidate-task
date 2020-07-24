let USERS_BASE_URL = "/users";

export const USERS = {
    ROUTE: USERS_BASE_URL,
    LIST: `${USERS_BASE_URL}/list`,
    DETAILS: `${USERS_BASE_URL}/details/:id`,
    EDIT: `${USERS_BASE_URL}/edit/:id`,
    LINK_EDIT: (id) => ({url: `${USERS_BASE_URL}/edit/${id || "new"}`})
};