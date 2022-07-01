export default function usersReducer( usersData = [], action: any ): any {
    switch(action.type) {
        case "SET_USERS_DATA":
            return [...usersData, ...action.payload]

        case "SEARCH_USER_DATA":
            return [...action.payload]

        default:
            return usersData
    }
}