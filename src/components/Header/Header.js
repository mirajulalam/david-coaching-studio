import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
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
                            <CustomLink as={Link} to="/home" className='text-white me-3'>Home</CustomLink>
                            <CustomLink as={Link} to="/blogs" className='text-white me-3'>Blogs</CustomLink>
                            <CustomLink as={Link} to="/aboutus" className='text-white me-3'>About Us</CustomLink>
                            {user ? <button className='btn btn-link text-white text-decoration-none me-3' onClick={handleSignOut}>Log out</button> : <CustomLink as={Link} to="/login" className='text-white me-3'>LogIn</CustomLink>}
                            <CustomLink as={Link} to="/signup" className='text-white me-3'>
                                SignUp
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;