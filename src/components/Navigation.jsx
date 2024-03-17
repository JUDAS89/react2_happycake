import { Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-start">
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