import {PostContext} from './PostContext';
import { postReducer,postLoading } from '../../reducers/PostReducer/postReducer';
import axios from 'axios';
import {setPostSuccess, setPostFail } from '../../reducers/PostReducer/postActions'
import {useReducer} from 'react'

function PostProvider({children}) {

    const [postState,dispatch] = useReducer(postReducer,postLoading);

    const getPosts = async() => {
        try{
            const response = await axios.get(`http://localhost:5000/post`)
            if(response.data.success){
                dispatch(setPostSuccess(response.data.postHaveUser))
            }
        }catch(e){
            dispatch(setPostFail())
       }    
    }

    const postContext = {postState, getPosts}

    return (
        <PostContext.Provider value={postContext} >
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider