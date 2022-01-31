import React, { Fragment } from 'react'
import { Container, Form, Button, Row, Col, Card, CardGroup } from 'react-bootstrap'

export default function Contacto () {
   
    return (
        <Fragment>
            <Container>
            <br/>
            <br/>
            <Col lg={5} md={5} sm={12} className="p-10 m-auto ">
            <h1 className="fw-bolder text-center">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0 text-center">We'd love to hear from you</p>
            <br/>
            <br/>
                <Form>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Enter your name..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNumberPhone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Number..."/>
                    </Form.Group >

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type your message..."/>
                    </Form.Group>

                    <Button className="btn btn-dark activated col-md-12" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Container>
            <br/>
            <br/>

            <Col lg={10} md={10} sm={12} className="text-center p-5 m-auto ">
                <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-chat-dots"></i></div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-people"></i></div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-question-circle"></i></div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone"></i></div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">Call us during normal business hours at (300) 892-9403.</p>
                        </div>
                    </div>
                </Col>
        </Fragment>
    )
}