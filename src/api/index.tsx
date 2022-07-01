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
export function logOutApi(token: any) {
   return fetch(`${ API_URL }/v1/logout`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer {${token}}`
       },
      method: 'POST',
   })
}