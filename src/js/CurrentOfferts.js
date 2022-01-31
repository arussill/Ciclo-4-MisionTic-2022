import Button from 'react-bootstrap/Button'
import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import SubastaeEspecifica from './SubastaEspecifica';


export default function CurrentOfferts(props) {

    const lstMyBids = props.datos;
    
    const listaSubastas = props.listaSubastas;
    var dat = [];
    
    

    for (const i in listaSubastas){
        if (listaSubastas[i].idSubasta === lstMyBids.idSubasta){
            // console.log("Datos: ",listaSubastas[i])
            dat=listaSubastas[i];
        }
        // console.log(dat)
    }
    
    

    return (
        <Fragment>
            <div className="col-sm 3">
                <div className="card-header">
                    <img src={lstMyBids.imagen} className="card-img-top" alt="Imagen" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{lstMyBids.nombreSubasta}</h5>
                    <p className="card-text"> Realizo puja el día: {lstMyBids.diaPuja}
                        <br />
                        Mi puja: ${lstMyBids.montoMiPuja}</p>
                    <p className="card-text"><small className="text-muted">ID:{lstMyBids.idSubasta}</small></p>
                    {/* <Link className="btn btn-primary" to="/Subastas/{lstMyBids.id}" >View offer</Link> */}
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Viewoffer">View offer</button> */}
                    <SubastaeEspecifica listaSubastas={dat} name="View Offer "/>              {/*     id={lstMyBids.idSubasta}    */}

                    <a href="" style={{ marginLeft: "10px" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cancelarModal">Cancel Offer</a>
                </div>
                <hr />
            </div>
        </Fragment>
    );
}