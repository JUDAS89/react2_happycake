import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contacts() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="emailForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descriptionForm.ControlTextarea1">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>{' '}
      </Form>
    )
}

export default Contacts