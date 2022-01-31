import ClosedBids from "./ClosedBids";
import CurrentOfferts from "./CurrentOfferts";
import ModalCancelacion from "./ModalCancelacion";
import "../css/Mybids.css"

import { Tab, Tabs } from "react-bootstrap";


export default function Mybids (props) {
    // Recibe los parametros props enviados desde App.js
    const listaSubastas = props.lstSubastas;
    const listaPujas = props.lstPujas; 
// ________________________________________________________________    
    const subastasAbiertas = listaSubastas.filter(subasta => subasta.estado === "Abierta");

    const pujasUserOpen = listaPujas.filter(puja => puja.idUser === "1").filter(puja => 
        Boolean(subastasAbiertas.find(s => 
            s._id === puja.idSubasta)));
    
    const listaComponentesAbiertos = pujasUserOpen.map(e => <CurrentOfferts datos = { e } listaSubastas={listaSubastas}/>);
        
// ________________________________________________________________
    
    const subastasCerradas = listaSubastas.filter(subasta => subasta.estado === "Cerrada");
    
    const pujasUserClose = listaPujas.filter(puja => puja.idUser === "1").filter(puja => 
        Boolean(subastasCerradas.find(s => 
            s._id === puja.idSubasta)));
    
    const listaSubastasCerradas = pujasUserClose.map(e => <ClosedBids datos = { e }/>);
            
   
    return (
        // tabs
        <div id= "contenedor" >
            <Tabs defaultActiveKey="misPujas" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="misPujas" title="Curren Offers">
                    <div className="row">{ listaComponentesAbiertos }</div>
                </Tab>
                <Tab eventKey="historial" title="Closed Bids">
                    { listaSubastasCerradas }
                </Tab>
            </Tabs>
            
            {/* Modal de confirmación de cancelación */}
            <ModalCancelacion/>
        </div> 
    )
}
