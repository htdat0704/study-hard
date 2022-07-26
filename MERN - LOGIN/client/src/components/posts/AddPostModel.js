import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react'
import { PostContext } from '../../context/Post/PostContext'


const AddPostModal = () => {

    const {showAddPost, setShowAddPost, addPost} = useContext(PostContext)


    const [newPost,setNewPost] = useState({
        title: '',
        description: '',
        url: '',
        status: 'TO LEARN'
    })

    const closeDialog= () =>{
        setNewPost({
            title: '',
            description: '',
            url: '',
            status: 'TO LEARN' 
        })
        setShowAddPost(false)
    }

    const onSubmit = async e =>{
        e.preventDefault()
         await addPost(newPost)
        setNewPost({
            title: '',
            description: '',
            url: '',
            status: 'TO LEARN' 
        })
        setShowAddPost(false)
    }

    const {title, description, url} = newPost

    const onChangeNewPostForm = event => setNewPost({...newPost, [event.target.name]: event.target.value})

    return(
        <Modal show={showAddPost} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to add?</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body >
                    <Form.Group  style={{marginTop: "15px", marginBottom: "15px"}}>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' onChange={onChangeNewPostForm} value={title}/>
                        <Form.Text id='title-help' muted> Require</Form.Text>
                    </Form.Group>
                    <Form.Group  style={{marginTop: "15px", marginBottom: "15px"}}>
                        <Form.Control as='textarea' row={4} placeholder='Description' name='description' onChange={onChangeNewPostForm} value={description}/>
                    </Form.Group>
                    <Form.Group style={{marginTop: "15px", marginBottom: "15px"}}>
                        <Form.Control type='text' placeholder='Url' name='url' onChange={onChangeNewPostForm} value={url}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = 'secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant = 'primary' type='submit'>Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPostModal;