import { SET_AUTH } from "./authActions";
export const authLoading = {
    authLoading: true,
    isAuthenticated: false,
    user: null
}

export const authReducer = (state,action) => {
    const{type,  payload} = action;
    const{isAuthenticated, user} = payload;
    switch(type){
        case SET_AUTH:
            return {
                ...state,
                isAuthenticated,
                user,
                authLoading: false,
            };
        default:
            return payload;
    }
}