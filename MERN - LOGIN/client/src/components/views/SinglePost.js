import PostForm from '../auth/PostForm'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import NavbarMenu from '../layout/NavBar';
import NavbarNoLogin from '../layout/NavBarNoLogin';
import Spinner from 'react-bootstrap/esm/Spinner';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { PostContext } from '../../context/Post/PostContext';
import { useParams } from 'react-router-dom';
// import Badge from 'react-bootstrap/Badge';
// import editIcon from '../../assets/edit.svg'
// import Button from 'react-bootstrap/Button'
import UpdateForm from '../auth/UpdateForm';

const SinglePost = ({route}) => {

    const {state:{ isAuthenticated, authLoading}} = useContext(AuthContext)
    const {postState:{ post}, getOnePost} = useContext(PostContext)
    const [isLoading, setLoading] = useState(false);
    console.log(authLoading)
    let body;
    let {slug}  = useParams();

    // useEffect(async () =>{
    //    await getOnePost(slug) 
    //    isLoading = false
    // },[slug])

    console.log(post)

    if(isLoading ){
        console.log(post)
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info'/>
            </div>
        )


    }else if(isAuthenticated){
        
        // body = (
        //     <>
        //         <NavbarMenu></NavbarMenu>
        //         <PostForm></PostForm>
        //     </>
        // )
        body = (
            (   
                <>
                    <NavbarMenu></NavbarMenu>
                
                    {route === 'post' && <PostForm  post={post}/>}
                    {route === 'update' && <UpdateForm post={post} />}
                </>
            )
        )
    }else{

        // body = (
        //     <>
        //         <NavbarNoLogin></NavbarNoLogin>
        //         <PostForm></PostForm>
        //     </>
        // )
        body = (
            (   
                <>
                    <NavbarNoLogin></NavbarNoLogin>
                    {route === 'update' && <UpdateForm post={post} />}
                    {route === 'post' && <PostForm  post={post}/>}
                </>
            )
        )
    } 


    return body;
}

export default SinglePost