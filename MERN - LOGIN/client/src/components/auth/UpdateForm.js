import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState, useContext} from 'react'
import { PostContext } from '../../context/Post/PostContext'
import { useNavigate } from 'react-router-dom'

const UpdateForm = ({post}) => {

    const [updatedPost, setUpdatedPost] = useState(post);
    const {updateOnePost} = useContext(PostContext)
    const navigate = useNavigate();
    const onChangeUpdated = e => {
        setUpdatedPost(prev => ({
            ...prev,
            [e.target.name]: e.target.value 
        }))
    }

    const {status,title,description,url} = updatedPost

    const handleSubmit = async event =>{
        event.preventDefault()

        try{
            const response = await updateOnePost(updatedPost)
            console.log(response.success)
            // if(response.success){
            //     navigate(`/post/${slug}`)
            // }
        }catch(e){
            console.log(e)
        }

    }

    return (
        <>  
            <div className='landing-inner'>
            <Form onSubmit={handleSubmit}>
                <h1 stye={{color: 'black'}}>UPDATE POST</h1>
                <Form.Group>
                    <Form.Label>Update Title:</Form.Label>
                    <Form.Control type="text" 
                                name='title'
                                value={title}
                                onChange={onChangeUpdated} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Update Description</Form.Label>
                    <Form.Control type="text" 
                                name='description'
                                value={description}
                                onChange={onChangeUpdated} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Update URL:</Form.Label>
                    <Form.Control type="text" 
                                name="url"
                                value={url} 
                                onChange={onChangeUpdated} /> 
                </Form.Group>
                <Form.Group>
                        <Form.Label>Status:</Form.Label>
                        <Form.Control as='select' value={status} name='status' onChange={onChangeUpdated}>
                            <option value="TO LEARN">TO LEARN</option>
                            <option value="LEARNING">LEARNING</option>
                            <option value="LEARNED">LEARNED</option>
                        </Form.Control>
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit" >
                Click here to Update
                </Button>
            </Form>
            </div>
        </>
      )
}

export default UpdateForm