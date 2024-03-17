import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="danger" expand="lg" className="position-fixed w-100">
            <Container className="d-flex justify-content-between align-items-center">
                <Nav>
                    <Link to="/" className="text-white text-decoration-none">
                        🏠 Home
                    </Link>
                    <Link to="/Contacts" className="text-white ms-3 text-decoration-none">
                        📒 Contactos
                    </Link>
                </Nav>
                <Navbar.Brand className="text-white"><span> Happy Cake </span>🍰</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation