const API_URL = process.env.API_URL

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
export function logOutApi(TOKEN: any) {
   return fetch(`${ API_URL }/v1/logout`, {
      headers: { 
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer {${TOKEN}}`
       },
      method: 'POST',
   })
}