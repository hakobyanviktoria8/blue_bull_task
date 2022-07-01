const API_URL = 'https://magic-dashboard-api.herokuapp.com/api'

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
export function userDetail(token: string | any, userId: string) {
   return fetch(`${ API_URL }/v1/users/view/${userId}`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      },
      method: 'GET',
   })
}