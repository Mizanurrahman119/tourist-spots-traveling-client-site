import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <h1 className='website-name'>Tourist Spots Traveling</h1>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="sm" >
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About US</Nav.Link>
                            { user?.email ? 
                            <Button onClick={logOut} variant="success">Logout</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;