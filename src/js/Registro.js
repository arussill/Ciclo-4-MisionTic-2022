import React, { Fragment } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function Registro () {
    function redirigirLogin(){

    }
    return (
        <Fragment>
            <Container  >
            <Row className="mt-5">
                <Col lg={8} md={4} sm={12} className="p-5 m-auto shadow-sm bg-secondary rounded">
                <Form>
        <h1 className="text-warning mt-4  p-3 text-center rounded"> Subastas Avaluos e Inversiones SAS</h1>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Barranquilla" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date"  name="Calendar" value="" min="1960-01-01" max="2021-12-31"/>
        </Form.Group>
        
        <Row className="mb-3">

        <Form.Group as={Col} controlId="formDocument">
            <Form.Label>Document</Form.Label>
            <Form.Select>
                <option>NIT</option>
                <option>C.C</option>
                <option>PASSPORT</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formNumberID">
            <Form.Label>N° ID</Form.Label>
            <Form.Control type="number"/>
        </Form.Group >

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Expedition date</Form.Label>
            <Form.Control  type="date"  name="Calendar" value="" min="1960-01-01" max="2021-12-31"/>
        </Form.Group>
    </Row>

    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <a href="..." onclick={redirigirLogin}>I already have an account</a>
    <br/>
    <br/>
                                    
    <Button variant="light" type="submit">
        Check in
    </Button>
    </Form>
            </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-dark ">Copyright © 2021 Team #3 All Rights Reserved</h6>
            </Container>            
        </Fragment>
    )
}
