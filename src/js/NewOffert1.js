import { Card, Row, Col, Button, Modal} from "react-bootstrap";
import { Fragment, useState } from "react";
import { FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import CONFIG from "../configuracion/config.json";

function ModalCreateBid() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 
  const handleShow = () => setShow(true);


  // const lista = props.subastas;
  // console.log(lista);

  const [form, setForm] = useState({tiempo_cancelacion: "24h", puja_actual: "0", estado: "Abierta",imagen:""});

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const guardar = () => {
    
    fetch(CONFIG.NEW_OFFERT_API.URL, {
      method:"POST",
      body: JSON.stringify(form),
      headers:{
        "Acept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
 
  // {idSubasta:"1", nombre:"Subasta 1", descripcion:"descripcion de la subasta 1", fecha_inicio:"27/11/21", hora_inicio:"9:00", fecha_fin:"27/12/21", hora_fin:"9:00", tiempo_cancelacion:"24h", monto_inicial:"5000", imagen:"", puja_actual:"6000", estado:"Abierta"}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Bid
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Bid</Modal.Title>
        </Modal.Header>
        <Form >
          <Modal.Body>          
            <div className="modal-body">
              <FormGroup>
                <FormLabel>Offert Name</FormLabel>
                <FormControl type="text" name="nombre" value={form.nombre} onChange={handelChange} />
              </FormGroup>
              <br />
              <FormGroup>
                <FormLabel>Offert Description</FormLabel>
                <FormControl as="textarea" name="descripcion" value={form.descripcion} onChange={handelChange} />
              </FormGroup>
              <br />
              <FormGroup>
                <FormLabel>Start date and time</FormLabel>
                <FormControl type="date" name="fecha_inicio" value={form.fecha_inicio} onChange={handelChange} />
                <br />
                <FormControl type="time" name="hora_inicio" value={form.hora_inicio} onChange={handelChange} />
              </FormGroup>
              <br />
              <FormGroup>
                <FormLabel>End date and time</FormLabel>
                <FormControl type="date" name="fecha_fin" value={form.fecha_fin} onChange={handelChange} />
                <br />
                <FormControl type="time" name="hora_fin" value={form.hora_fin} onChange={handelChange} />
              </FormGroup>
              <br />
              <FormGroup>
                <FormLabel>Starting amount $</FormLabel>
                <FormControl type="number" min="0" name="monto_inicial" value={form.monto_inicial} onChange={handelChange} />
              </FormGroup>
              <br />
              <FormGroup controlId="formFile" className="mb-3">
                <FormLabel>Imagen file </FormLabel>
                <FormControl type="file" name="imagen" value={form.imagen} onChange={handelChange} />
              </FormGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={guardar} >Save</Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}


export default function NewOffert(props) {
  // Recibe los parametros props enviados desde App.js
  const listaSubastas = props.lstSubastas;
 
  // ________________________________________________________________    
  const subastasAbiertas = listaSubastas.filter(subasta => subasta.estado === "Abierta")

// function Modarconfirm
function Modalconfirm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = props.id;

  const borrar = (e) => {
    const id= e.target.name;
    const ruta = 'subastas/delete/'+id;
    
    console.log("Borrando subasta: ", id, "Ruta: ",ruta)

    fetch('http://localhost:9000/subastas/delete/'+id,{
      method: 'DELETE',
      headers: {
        "Acept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      // .catch(err => console.error(err))
    // handleClose();
  }
  

  return (
  
      <>
          
          <Button variant="outline-dark" onClick={handleShow} style={{widht:"20.27px"}} > Delete </Button>
          
          <Modal show={show} onHide={handleClose}>
              
              <Modal.Header closeButton>
                  <Modal.Title>Confirm</Modal.Title>
              </Modal.Header>
              <Form>
              <Modal.Body> Are you sure you want to delete this user?</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
        
                  <Button size="sm"  type="submit" onClick={borrar} name={id} >Save Changes</Button>
                  
              </Modal.Footer>
              </Form>
          </Modal>

          
      </>
  );
}

  
  return (
    <Fragment>
      <Row>
        <Col  sm={{ span: 10 , offset: 10 }} style={{ marginTop: "15px" }}>
          <a style={{ marginLeft: "10px" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formNewOffert"
          ><ModalCreateBid /></a>
        </Col>
      </Row>
      <div className="row mt-5" style={{paddingInlineStart: "5%"}}>
        {subastasAbiertas.map(element =>
          <Card style={{ width:'19rem' }}>
            <Card.Img variant="top" src="{element.imagen} " />
            <Card.Body>
              <Card.Title>{element.nombre}</Card.Title>
              <Card.Text>
                {element.descripcion}
                <br/>
                Puja Actual: ${ element.puja_actual }
                <br/>
                Monto inicial: ${ element.monto_inicial }
                <br/>
                Esta subasta cierra en: {element.tiempo_cancelacion} 
                <p className="card-text"><small className="text-muted">ID:{ element._id }</small></p>
              </Card.Text>
                
                <Modalconfirm id = {element._id}/>
                </Card.Body>
          </Card>               
        )}
      </div>
    </Fragment>
  )
}