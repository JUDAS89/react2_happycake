import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="danger">
            <Container className="justify-content-start">
                <Nav className='me-auto'></Nav>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    🏠 Home
                </Link>
                <Link to="/Contacts" className="text-white ms-3 text-decoration-none">
                    📒 Contactos
                </Link>
                <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation