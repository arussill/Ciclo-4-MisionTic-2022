import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import PujaxSubastas from './PujasxSubastas';
import TableStatus from './TableStatus';
import TableWinBid from './TableWinBid';

export default function Reportes(props) {
    const listaSubastas = props.lstSubastas;
    const listaPujas = props.lstPujas; 

    // datos para grafica de pujas por subastas
    const labels = listaSubastas.map(titulo=> titulo.nombre);
    const dataPujaxSubasta = [];
    
    listaSubastas.forEach(element => {
        let contador = 0;
        listaPujas.forEach(item => {
            if (item.idSubasta === element._id){
                contador++;
            }
        });
        dataPujaxSubasta.push(contador);
    });

    // datos para la tabla de estados de subastas
    const tabla = listaSubastas.map(elemento => <TableStatus datos = {elemento}/>);

    // datos de la tabla de las pujas ganadoras
    const listaGanada = listaPujas.filter(item => item.estado==="Ganado");
    const win = listaGanada.map(element => <TableWinBid datos = {element}/>)


    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-5 mx-5">
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Bidding for auctions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Auctions Status</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Winning bids</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <PujaxSubastas labels={labels} data={dataPujaxSubasta}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Start date</th>
                                    <th scope="col">End date</th>
                                    <th scope="col">Stauts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { tabla }
                            </tbody>

                            </table>
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Winning bid</th>
                                        <th scope="col">Winning user</th>
                                        <th scope="col">Bid amount</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                    </tr>
                                </thead>
                            <tbody>
                                { win }
                            </tbody>
                            </table>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>  
        </Tab.Container>
    )
}



