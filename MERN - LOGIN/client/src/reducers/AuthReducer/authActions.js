export const SET_AUTH = 'set_auth'

export const setAuthSuccess = (response) => {
    return {
        type: SET_AUTH,
        payload: {
            isAuthenticated: true,
            authLoading: false,
            user: response
        }
    }
}

export const setAuthFail = () => {
    return {
        type: SET_AUTH,
        payload: {
            isAuthenticated: false,
            authLoading: false,
            user: null
            
        }
    }
}