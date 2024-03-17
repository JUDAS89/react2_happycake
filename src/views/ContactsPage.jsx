import React from 'react'
import { Container } from 'react-bootstrap'
import Contacts from '../components/Contacts'

const ContactsPage = () => {
    return (
        <Container className="pt-5">
            <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
            <Contacts />
        </Container>
    )
}

export default ContactsPage