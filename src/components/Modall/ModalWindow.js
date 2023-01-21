import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({show, setShow, contact, updateContact}) {



  const handleClose = (id, user) =>{
    updateContact(id, user)
    setShow(false);
  }



  const handleShow = () => {
    setShow(true);
  }

const [newUser, setNewUser] = useState({
    ...contact
})

const {name, phone, surname} = newUser


const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
}


  return (
    <div>
     <button className='button-01' onClick={handleShow}>изменить</button>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Обновления контакта</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Имя контакта</Form.Label>
              <Form.Control
              onChange={handleChange}
                type="text"
               defaultValue={name}
                autoFocus
              name="name"
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>фамилия контакта</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                defaultValue={surname}
              name="surname"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>телефон контакта</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="email"
               defaultValue={phone}
             name="phone"
              />
            </Form.Group>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose(contact.id, newUser)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalWindow