import Button from 'react-bootstrap/Button'
import editIcon from '../../assets/edit.svg'
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

const PostForm = ({post}) => {
    const {state:{ user}} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/update/${post.slug}`)
    }

    return (
        <div className='container'>
                    <h1 className='my-4'>{post.title} - 
                        <small> TITLE </small>
                        {user.username === post.user.username && <>
                        <Button className='post-button' style={{marginLeft: 'auto', marginRight: '30px'}} onClick={handleClick}>
                            <img src={editIcon} alt="edit" width='24' height='24'/>
                        </Button>
                        </>}
                    </h1>
                    
                    <Row>
                        <Col md='8'>
                            <img className="img-fluid" src="https://via.placeholder.com/750x500" alt=""/>
                        </Col>

                        <Col md='4'>
                            <h3 className='my-3'> Author: {post.user.username}</h3>
                            <Badge pill bg={post.status === 'LEARNED' ? 'success' :post.status ==='LEARNING' ? 'warning' : 'danger'} >{post.status}</Badge>
                            <h3 className='my-3'>{post.description}</h3>
                            
                        </Col>
                    </Row>
                </div>
    )
}

export default PostForm