import { SET_POST_SUCCESS } from "./postActions";

export const postLoading = {
    postLoading: true,
    posts: []
}

export const postReducer = (state,action) => {
    const{type,  payload} = action;
    switch(type){
        case SET_POST_SUCCESS:
            return {
                ...state,
                posts: payload, 
                postLoading: false,
            };
        default:
            return {
                ...state,
                posts: payload, 
                postLoading: false,
            };
    }
}