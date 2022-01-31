import { Fragment } from "react";
import SubastaeEspecifica from './SubastaEspecifica';
export default function Subastas (props){
    
    const d = props.datos;
    
    return(
        <Fragment>
            <div className= "col-4 mt-2 mb-2">
                <div className="card-header">
                    <img src= { d.image }  className="card-img-top" alt="Imagen"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ d.nombre }</h5>
                    <p className="card-text">  { d.descripcion }
                    <br/>
                    Puja Actual: ${ d.puja_actual }
                    <br/>
                    Monto inicial: ${ d.monto_inicial }
                    <br/>
                    Esta subasta cierra en: {d.tiempo_cancelacion} </p>
                    <p className="card-text"><small className="text-muted">ID:{ d._id }</small></p>

                    {/* <a href="..." className="btn btn-primary">Make a offer</a> */}
                    <SubastaeEspecifica listaSubastas={d} name="Make a offer" />   
                </div>
                <hr/>
            </div> 
        </Fragment>
    )
}