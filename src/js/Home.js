import { Fragment, useEffect, useState } from "react";
import { Container } from 'react-bootstrap';



export default function Home() {

    // event.preventDefault();
    // fetch("http://localhost:9000/subastas/all", {
    //   method: "GET",
    // //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
        
    //   })
    // })
    //   .then(res => {
    //     console.log("response: ", res);
    //   })
    //   .catch(err => {
    //     console.log("error:", err);
    //   });

    const consumir = async () => {
        const patch = new URL("http://localhost:9000/subastas/all")
        const result = await fetch(patch);
        return await result.json();

        // let res = await fetch('http://localhost:9000/subastas/all')
        // let data = await res.json()
        // console.log(data)
    };



    // const reports = props.reports;

    // const reports = [];

    const [listreports, setListreports] = useState([]);
    useEffect(() => {
        const solicitarreports = async () => {

            const data = await consumir();
            setListreports(data)
            console.log(data)
        };
        solicitarreports();
    },[])
    // solicitarreports();


    // console.log(reports)





    return (
        <Fragment>
            <Container>
                <h1>Aqui van las listas</h1>
                
                {listreports.map(e => <li>{e.nombre} </li>)}

                {/* <Reportes reports ={reports} /> */}

            </Container>
        </Fragment>
    )
}

function Reportes(props) {
    const reports = props.reports;
    for (const i in reports) {
        <Report i={i} />
    }

}

function Report(props) {
    const i = props.i;
    return (
        <ol>
            <li> {i.nombre}</li>
            <li> {i.descripcion}</li>
        </ol>

    )
}