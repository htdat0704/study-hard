import { PostContext } from "../../context/Post/PostContext";
import { useContext, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner';

const Dashboard = () =>{

    const { postState: {posts, postLoading}, getPosts} = useContext(PostContext);

    useEffect(() => { 
        const getPost = getPosts();
    }, [])

    // let body = null

    // if(postLoading) {
    //     body = (
    //         <div className="spinner-container">
    //             <Spinner animation='border' variant='info'/>
    //         </div>
    //     )
    // }else if (posts.length === 0) {
    //     body = (
    //         <>
    //             <Card className="text-center mx-5 my-5">
    //                 <Card.Header as='h1' > Hi</Card.Header>
    //                 <Card.Body>
    //                     <Card.Title>Hi
                            
    //                     </Card.Title>
    //                 </Card.Body>
    //             </Card>
    //         </>
    //     )
    // }else{
    //     return <h1>Dashboard</h1>
    // }

    return <h1>Dashboard</h1>
}

export default Dashboard