import React, { Fragment, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../css/Base.css"
import perfil from "../img/USERimage.png"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Modarconfirm
function Modarconfirm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // var dat = props.listaSubastas;
    // console.log("datos de subasta",dat.idSubasta, dat.nombre)

    return (
    
        <>
            <Button variant="outline-dark" onClick={handleShow} style={{widht:"20.27px"}} > Delete </Button>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you sure you want to delete this user?</Modal.Body>
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

function User1(props) {

    const nombre = props.nombre;
    const rol = props.rol;
    const picture = props.picture;
    const email = props.email;
    const iduser = props.cod

    const [Habilitar, setHabilitar] = useState(true)
    const [deshab, setDeshab] = useState(false)


    // const {"iduse",iduser} =

    // const ref{id} = useRef;
    function functon(event) {
        console.log("Vaina actual: ", event.target)
        setHabilitar(false);
        setDeshab(true);

        // getElementById
    }
    function reset(event) {
        console.log("Vaina actual: ", event.target)
        setHabilitar(true);
        setDeshab(false);
        // getElementById
    }
    const roles = ["Administrador", "SuperAdmin", "UsuarioFinal"]

    function Rolhtml(props) {
        const rol = props.rol;
        return (<option value="Admin">{rol}</option>)
    }

    const mandarrol = roles.filter(ro => ro !== rol).map(ro => <Rolhtml rol={ro} />)




    return (




        // {/* {% for usuario in usuarios %} */}

        <div className="card" >
            <form >                                                    {/*     action="/admin/actualizausu" method="post"   */}
                <div className="dropdown" style={{ margin: "auto" }}>
                    {/* <!-- boton de USER --> */}

                    <select name="select" id={"r", iduser} disabled={Habilitar} className="btn btn-info dropdown-toggle" style={{ backgroundColor: "rgb(227, 242, 253)" }}>    {/* ref={preRef}     style={{backgroundColor: "azure"}}      */}
                        <option value={rol} defaultValue className="dropdown-item"> {rol}</option >                                {/*{{ usuario.rol }} */}

                        {mandarrol}
                        {/* <option value="SuperAdmin"></option>
                            <option value="Admin">Admin</option>
                            <option value="UsuarioFinal">UsuarioFinal</option> */}
                    </select>



                </div>


                <img src={perfil} className="img-fluid rounded-start" id="imgcs" alt="..." ></img>           {/*src="{{usuario.picture}}" */}

                <div className="card-body">

                    <h5 className="card-title"><input type="text" name="cod" value={iduser}
                        id="inputcs" /></h5>
                    <h5 className="card-title"><input type="text" name="nombre" id={"n", iduser} value={nombre}
                        disabled={Habilitar} /></h5>
                    <p className="card-text"><input type="text" name="correo" id="co{{usuario.email}}" value={email}
                        disabled={Habilitar} /></p>
                    <input type="button" value="Edit" className="btn btn-primary" id="e{{usuario.id}}" onClick={functon} disabled={deshab} />                 {/*    onClick="fa{{usuario.id}}()"    */}
                    <input type="submit" value="Save" id="gu{{usuario.id}}" disabled={Habilitar} className="btn btn-primary" onClick={reset} />

                </div>

            </form>

            <a ><button className="btn btn-outline-dark"  >Eliminar</button></a> 
                       {/*  <a onClick={confirmarEliminarUsu(usuario.id)}>   */}
            <Modarconfirm/>
        </div>


    )

}

export default function Users(props) {

    const lst = props.listauser;
    const listauser = lst.map(user => <User1 nombre={user.nombre} rol={user.rol} picture={user.picture} email={user.email} />);



    // function confirmarEliminarUsu(usuarioid){
    //     var verificar = confirm("¿Desea eliminar el Usuario?");
    //     if (verificar){
    //         document.location="/admin/eliminarUsu/{{usuario.id}}"
    //     }
    //   }


    // function fa(usuario_id){
    //     document.getElementById("n{{usuario.id}}").disabled=false;
    //     document.getElementById("co{{usuario.email}}").disabled=false;
    //     document.getElementById("gu{{usuario.id}}").disabled=false;
    //     document.getElementById("r{{usuario.id}}").disabled=false;
    //     document.getElementById("e{{usuario.id}}").disabled=true;
    // }


    // const onOptionEdit = function (evt){
    //     if (evt.target.name==="Home"){
    //       setcompDinamico(<Login/>);
    //     }
    // }

    // for (const user in listauser){
    return (
        <Fragment>
            <br />
            <Container>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {listauser}
                </div>
            </Container>
        </Fragment>
    )

    // console.log(listauser[user])


    // console.log(listauser[user].rol)

    // <User1 rol={listauser[user]}  />    
    // img={img} id={id} nom={nombre} email={email}
    // }

}