export function setUsersData(usersData: any[]) {
    return {
        type: "SET_USERS_DATA",
        payload: usersData
    }
}
export function searchUserData(userData: any[]) {
    return {
        type: "SEARCH_USER_DATA",
        payload: userData
    }
}

