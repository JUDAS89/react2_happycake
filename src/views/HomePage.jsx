//import React from 'react'
import { Container } from 'react-bootstrap'
import pastelImage from '../assets/pastel.jpg'

const HomePage = () => {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="pt-5">
                    Bienvenido a <span className="fw-bold">Happy Cake</span>
                </h1>
                <h6>El lugar de los pasteles felices</h6>
                <img src={pastelImage} alt="Imagen de pastel" className="mt-4" style={{ maxWidth: '200px', height: 'auto' }}/>
            </div>
        </Container>
    )
}

export default HomePage