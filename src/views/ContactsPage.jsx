import { Container } from 'react-bootstrap'
import Contacts from '../components/Contacts'

const ContactsPage = () => {
    return (
        <Container className="pt-5 text-center">
            <h2 className="mb-4 mt-5">Cuentanos, ¿en que te podemos ayudar?</h2>
            <Contacts />
        </Container>
    )
}

export default ContactsPage