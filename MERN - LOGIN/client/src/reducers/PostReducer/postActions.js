export const SET_POST_SUCCESS = 'set_post_success'
export const SET_POST_FAIL = 'set_post_fail'

export const setPostSuccess = (response) => {
    return {
        type: SET_POST_SUCCESS,
        payload: response,
    }
}

export const setPostFail = () => {
    return {
        type: SET_POST_FAIL,
        payload: [],
    }
}