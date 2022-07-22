import { authReducer,authLoading } from '../../reducers/authReducer';
import { setAuthFail, setAuthSuccess } from '../../reducers/authActions';
import { useReducer,useEffect } from 'react'
import { AuthContext } from './AuthContext';
import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_NAME } from '../constant'
import setAuthToken from '../../utils/setAuthToken'


const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,authLoading);


    // login succeess
    const loadUser = async()  => {
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]){
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }

        try{
            const response = await axios.get(`http://localhost:5000/auth`)
            if(response.data.success){
                dispatch(setAuthSuccess(response.data.user))
            }
        }catch(e){
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch(setAuthFail())
       }
    }

    useEffect(() => {
        loadUser()
    },[])

    const loginUser = async userForm => {
        try{
            const response =await axios.post('http://localhost:5000/auth/login',userForm);
            if(response.data.success)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
            
            return response.data
        }catch(e){
            console.log(e)
            if(e.response.data) return e.response.data;
            else return {success: false, message: e.message}
        }
    }

    const registerUser = async userForm => {
        try{
            const response =await axios.post('http://localhost:5000/auth/register',userForm);
            if(response.data.success)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
            
            return response.data
        }catch(e){
            console.log(e)
            if(e.response.data) return e.response.data;
            else return {success: false, message: e.message}
        }
    }

    const authContextData = {registerUser, loginUser, state}

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider