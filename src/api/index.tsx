const API_URL = 'https://magic-dashboard-api.herokuapp.com/api'
const MAIN_URL = 'magic-dashboard-api.herokuapp.com/api/v1/users'

// login
export function logInApi(data: any) {
   return fetch(`${ API_URL }/v1/login`, {
      body: JSON.stringify(data),
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      method: 'POST',
   })
}

//  logout
export function logOutApi(token: string | any) {
   return fetch(`${ API_URL }/v1/logout`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer {${token}}`
       },
      method: 'POST',
   })
}

// get users list
export function usersListApi(token: string | any) {
   return fetch(`${ API_URL }/v1/users`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      },
      method: 'GET',
   })
}

// user detail
export function userIdApi(token: string | any, userId: string) {
   return fetch(`${ API_URL }/v1/users/view/${userId}`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      },
      method: 'GET',
   })
}

// update user data
export function updateUserDataApi(token: string | any, userId: string, formData: any) {
   return fetch(`${ API_URL }/v1/users/update/${userId}`, {
      method: 'PUT',
      headers: { 
         'authority': `${MAIN_URL}`,
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json',
         'origin': `https://${MAIN_URL}`,
         'referer': `https://${MAIN_URL}`,
      },
      body: JSON.stringify(formData)
   })
}