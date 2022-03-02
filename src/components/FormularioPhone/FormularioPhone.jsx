import React, { useState } from 'react';
import { Button, Row, InputGroup, Form, Modal } from 'react-bootstrap/'

function FormularioPhone(props) {

    const [phoneNumber, setPhone] = useState("");
    const [montyPrice, setMonthyPrice] = useState(0);
    const [setupPrice, setSetupPrice] = useState(0);
    const [currency, setCurrency] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => {
        //clean form warning messages
        setValidated(false);
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        //verify if all field is not empty
        if (form.checkValidity() !== false) {
            props.saveNewNumber(
                phoneNumber,
                montyPrice,
                setupPrice,
                currency)
            handleClose()
        }
        setValidated(true);
    };

    //handles to capture user inputs
    const handlePhoneNumber = (event) => {
        setPhone(event.target.value)
    }
    const handleMontyPrice = (event) => {
        setMonthyPrice(event.target.value)
    }
    const handleSetupPrice = (event) => {
        setSetupPrice(event.target.value)
    }
    const handleCurrency = (event) => {
        setCurrency(event.target.value)
    }

    return <>
        <Button className='ms-5 mt-2' variant="outline-primary" onClick={handleShow}>New Phone Number</Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>New Phone Number</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                onChange={handlePhoneNumber}
                                required
                                type="text"
                                placeholder="Ex: +55 00 91234 4321"
                            />
                            <Form.Control.Feedback type="invalid">Please Insert a Phone Number</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustom02">
                            <Form.Label>Monthy Price</Form.Label>
                            <Form.Control
                                onChange={handleMontyPrice}
                                required
                                type="text"
                                placeholder="Ex: 0.03"
                            />
                            <Form.Control.Feedback type="invalid">Please Insert a Monthy Price</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustom03">
                            <Form.Label>Setup Price</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    onChange={handleSetupPrice}
                                    type="text"
                                    placeholder="Ex: 3.40"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please insert a setup price.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group><Form.Group md="4" controlId="validationCustom04">
                            <Form.Label>Currency</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    onChange={handleCurrency}
                                    type="text"
                                    placeholder="Ex: U$"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please insert currency value.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Button className='me-3' variant='outline-secondary' onClick={handleClose}>close</Button>
                    <Button variant='success' type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}

export default FormularioPhone;