import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions';

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    
    return (
        
        <header>
            
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand><span style={{color:'#1193ee'}}>Crack <span style={{color:'gold'}}> - A - </span> Book</span></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                        <LinkContainer to='/cart'>
                            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link ><span><i class="fa-solid fa-file-circle-question"></i>About</span></Nav.Link>
                            
                        </LinkContainer>
                        {userInfo ? 
                            <NavDropdown title={userInfo.name} id='username'>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                         : 
                        <LinkContainer to='/login'>
                            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                        </LinkContainer>
                        }
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header