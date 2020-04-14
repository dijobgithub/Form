import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ModalForm(props) {
    return (
           <Modal show={props.show}>
            <Modal.Header onClick={props.close} closeButton>
                <Modal.Title> What questions do you have for me and my team?</Modal.Title>
            </Modal.Header>
            <Form.Group style={{padding:'15px'}} type="text" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                    <Form.Text className="text-muted" />
                    <Form.Group controlId="ModalForm.ControlTextarea1">
                        <Form.Label>Your question</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                </Form.Group>
           <Modal.Footer>
                <Link to="/">
                    <Button onClick={props.startOver}  type='submit' variant="primary">Submit</Button>
                </Link>
        </Modal.Footer>
        </Modal>
    );
}