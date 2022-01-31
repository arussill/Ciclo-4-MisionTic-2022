import Button from 'react-bootstrap/Button'
import React, { Fragment, useState } from "react";
import Modal from 'react-bootstrap/Modal';

export default function SubastaeEspecifica(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var dat = props.listaSubastas;
    var name=props.name;
    // console.log("datos de subasta",dat.idSubasta, dat.nombre)

    return (
    
        <>
            <Button variant="primary" onClick={handleShow}> {name}</Button>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>{dat.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    );
}