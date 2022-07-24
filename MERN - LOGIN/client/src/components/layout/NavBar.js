import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import avarta from '../../assets/avarta.jpg'
import {Link} from "react-router-dom"
import logoutIcon from '../../assets/logout.svg'
import {AuthContext} from '../../context/Auth/AuthContext'
import {useContext} from 'react'

const NavbarMenu = () => {

    const {state : { user : {username }}, logoutUser} = useContext(AuthContext) ;

    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow' >
            <Navbar.Brand className='font-weight-bolder text-white' style={{ marginLeft: '30px'}} >
                <img src ={avarta} alt="Logo" className="user_avatar" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className ='mr-auto'>
                    <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link} >
                        DashBoard
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link} >
                        About
                    </Nav.Link>
                </Nav>

                <Nav style={{marginLeft: 'auto', marginRight: '30px'}}>
                    <Nav.Link className='font-weight-bolder text-white' disabled >
                        Welcome {username}
                    </Nav.Link>
                    <Button variant='secondary' className='font-weight-bolder text-white' onClick ={logoutUser} to='/Login' as={Link} >
                        <img src={logoutIcon} alt="logOut" width='32' height='32' className='mr-2'/>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse> 
        </Navbar>
    )
}

export default NavbarMenu