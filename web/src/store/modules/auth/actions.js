export function loginRequest(email, password){
    return {
        type: '@auth/LOGIN_REQUEST',
        payload: { email, password}
    }
}

export function loginSuccess(token){
    return {
        type: '@auth/LOGIN_SUCCESS',
        payload: { token }
    }
}

export function logoutRequest(){
    return {
      type: '@auth/LOGOUT_REQUEST'
    }
  }