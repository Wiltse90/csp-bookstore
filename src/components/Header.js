import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
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
                        <LinkContainer to='/login'>
                            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link ><span style={{color:'gold'}}><i class="fa-solid fa-file-circle-question"></i>About</span></Nav.Link>
                            
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header