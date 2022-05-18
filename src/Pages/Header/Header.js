import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_int';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/home">To-Do</Navbar.Brand>
                <Nav className="ms-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/list">List</Link>

                    {
                        user ? <Link onClick={handleSignOut} as={Link} to="/products" >Signout</Link>
                            :
                            <Link to='/login'>Login</Link>
                    }
                    <p> {user && user.displayName}</p>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;