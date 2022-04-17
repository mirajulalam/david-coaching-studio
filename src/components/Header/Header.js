import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">David Coaching Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className='text-white'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className='text-white'>About Us</Nav.Link>
                            {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log out</button> : <Nav.Link as={Link} to="/login" className='text-white'>LogIn</Nav.Link>}
                            <Nav.Link as={Link} to="/signup" className='text-white'>
                                SignUp
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;