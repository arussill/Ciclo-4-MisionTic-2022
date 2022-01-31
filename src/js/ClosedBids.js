import React, { Fragment } from "react";

export default function ClosedBids (props){
    const close = props.datos;
    
    return(
        <Fragment>
            <div>
                <ul className="list-group">
                    <div id="barEstado" className= { close.estado === "Ganado" ? "card-header bg-success p-0 text-white":"card-header bg-danger p-0  text-white"}>
                        { close.estado }
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <div className="mb-1">
                            <img src={close.imagen} className="img-fluid rounded-start" alt="Imagen"/>
                        </div>
                        <h4 className="text-start mt-4 mb-0 d-flexjustify-content-center">{close.nombreSubasta }</h4>
                        <p className="mt-4 mb-0 fs-6"> 
                            Fecha de la Puja: {close.diaPuja}
                            <br/>
                            Hora de la Puja : {close.horaPuja}
                            <br/>
                            Puja hecha: ${close.montoMiPuja}
                        </p>
                        <p className="mt-4 mb-1 fs-6 "> 
                            Puja ganadora: ${close.puja_actual <= close.montoMiPuja ? close.montoMiPuja: close.puja_actual}
                            <br/>
                            <small>ID: {close.idSubasta }</small>
                        </p>
                    </div>
                </ul>
                <hr/>
            </div> 
       </Fragment>
    )
}