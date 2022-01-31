import './css/App.css';
import React, { Fragment, useState,useEffect } from 'react';
import Nav from "./js/Header.js"
import logo from './img/logo.svg';
import subst from "./img/white-male-g87f92e6fe_1920.jpg";


import Login from './js/Base';
import Users from './js/Admin';
import { Container } from 'react-bootstrap';
import Mybids from "./js/Mybids"

import Reportes from './js/Reportes'

import Subastas from './js/Subastas';
import Registro from './js/Registro'
import "./img/cvv.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

import SubastaEspecifica from "./js/SubastaEspecifica";
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';
import Footer from './js/Footer';
import NewOffert1 from './js/NewOffert1';
import Contacto from './js/Contacto';
import Home from './js/Home';

let lista_usuarios = [{ "nombre": "Aura", "rol": "Administrador", "contra": "123", "picture": "./img/USERimage.png", "email": "aura@gmail.com", "fecha": "10/10/1990", "cod": "usu1" },
{ "nombre": "Pablo", "rol": "UsuarioFinal", "contra": "123", "picture": "./img/USERimage.png", "email": "pablo@gmail.com", "fecha": "10/10/1990", "cod": "usu2" },
{ "nombre": "Alejandra", "rol": "SuperAdmin", "contra": "123", "picture": "./img/USERimage.png", "email": "aleja@gmail.com", "fecha": "10/10/1990", "cod": "usu3" },
{ "nombre": "Esneider", "rol": "Administrador", "contra": "123", "picture": "./img/USERimage.png", "email": "esneider@gmail.com", "fecha": "10/10/1990", "cod": "usu4" },
{ "nombre": "Alejandro", "rol": "UsuarioFinal", "contra": "123", "picture": "./img/USERimage.png", "email": "alejamdro@gmail.com", "fecha": "10/10/1990", "cod": "usu5" }]

const listaSubastas = [
  { idSubasta: "1", nombre: "Subasta 1", descripcion: "descripcion de la subasta 1", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "6000", estado: "Abierta" },
  { idSubasta: "2", nombre: "Subasta 2", descripcion: "descripcion de la subasta 2", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "7000", estado: "Abierta" },
  { idSubasta: "3", nombre: "Subasta 3", descripcion: "descripcion de la subasta 3", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "8000", estado: "Abierta" },
  { idSubasta: "4", nombre: "Subasta 4", descripcion: "descripcion de la subasta 4", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "9000", estado: "Cerrada" },
  { idSubasta: "5", nombre: "Subasta 5", descripcion: "descripcion de la subasta 5", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" },
  { idSubasta: "6", nombre: "Subasta 6", descripcion: "descripcion de la subasta 6", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" },
  { idSubasta: "7", nombre: "Subasta 7", descripcion: "descripcion de la subasta 7", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" },
  { idSubasta: "8", nombre: "Subasta 8", descripcion: "descripcion de la subasta 8", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" },
  { idSubasta: "9", nombre: "Subasta 9", descripcion: "descripcion de la subasta 9", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" },
  { idSubasta: "10", nombre: "Subasta 10", descripcion: "descripcion de la subasta 10", fecha_inicio: "27/11/21", hora_inicio: "9:00", fecha_fin: "27/12/21", hora_fin: "9:00", tiempo_cancelacion: "24h", monto_inicial: "5000", imagen: "", puja_actual: "10000", estado: "Cerrada" }
]


const listaPujas = [
  { idPuja: "p1", idUser: "1", idSubasta: "1", montoMiPuja: "12000", diaPuja: "28/11/21", estado: "Ganado", nombreSubasta: "Subasta 1", imagen: "", horaPuja: "12:00", puja_actual: "10000" },
  { idPuja: "p2", idUser: "1", idSubasta: "2", montoMiPuja: "1000", diaPuja: "28/11/21", estado: "Perdida", nombreSubasta: "Subasta 2", imagen: "", horaPuja: "12:00", puja_actual: "10000" },
  { idPuja: "p3", idUser: "1", idSubasta: "8", montoMiPuja: "1000", diaPuja: "28/11/21", estado: "Perdida", nombreSubasta: "Subasta 8", imagen: "", horaPuja: "12:00", puja_actual: "10000" },
  { idPuja: "p4", idUser: "1", idSubasta: "9", montoMiPuja: "12000", diaPuja: "28/11/21", estado: "Ganado", nombreSubasta: "Subasta 9", imagen: "", horaPuja: "12:00", puja_actual: "10000" },

  { idPuja: "p5", idUser: "1", idSubasta: "10", montoMiPuja: "1000", diaPuja: "28/11/21", estado: "Perdida", nombreSubasta: "Subasta 10", imagen: "", horaPuja: "12:00", puja_actual: "10000" },
  { idPuja: "p6", idUser: "2", idSubasta: "10", montoMiPuja: "1000", diaPuja: "28/11/21", estado: "Perdida", nombreSubasta: "Subasta 10", imagen: "", horaPuja: "12:00", puja_actual: "10001" },
  { idPuja: "p7", idUser: "3", idSubasta: "10", montoMiPuja: "1000", diaPuja: "28/11/21", estado: "Perdida", nombreSubasta: "Subasta 10", imagen: "", horaPuja: "12:00", puja_actual: "10002" }

]

//  for(const i in lista_usuarios)   {
//   const pict = lista_usuarios[i].picture;
//   import {i} from "./img/cvv.jpg";
//  }        


function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  const bloque = <div> Hola Mundo </div>

  // allSubastas envia destructurada la lista de subastas
  
  /* allSubastas es el parametro que va al componete Subastas */
  const consumir = async () => {
    const patch = new URL("http://localhost:9000/subastas/all")
    const result = await fetch(patch);
    return await result.json();

    // let res = await fetch('http://localhost:9000/subastas/all')
    // let data = await res.json()
    // console.log(data)
  };

  const consumirpujas = async () => {
    const patch = new URL("http://localhost:9000/pujas/all")
    const result = await fetch(patch);
    return await result.json();

    // let res = await fetch('http://localhost:9000/subastas/all')
    // let data = await res.json()
    // console.log(data)
  };

  const [listreports, setListreports] = useState([]);
  const [listpujas, setListpujas] = useState([]);

  useEffect(() => {
    const solicitarreports = async () => {

      const data = await consumir();
      setListreports(data)
      // console.log(data)
    };
    solicitarreports();
  }, [])
  
  useEffect(() => {
    const solicitarpujas = async () => {

      const dato = await consumirpujas();
      setListpujas(dato)
      // console.log(data)
    };
    solicitarpujas();
  }, [])

  // const listaPujas = listpujas.map(e => console.log(e)); 

  for (const i in listpujas){
        listaPujas[i].idPuja = listpujas[i]._id;
        listaPujas[i].idUser = listpujas[i].idUser;
        listaPujas[i].idSubasta = listpujas[i].idSubasta;
        listaPujas[i].montoMiPuja = listpujas[i].montoMiPuja;
        listaPujas[i].diaPuja = listpujas[i].diaPuja;
        listaPujas[i].estado = listpujas[i].estado;
        listaPujas[i].nombreSubasta = listpujas[i].nombreSubasta;
        listaPujas[i].imagen = listpujas[i].imagen;
        listaPujas[i].horaPuja = listpujas[i].horaPuja;
        listaPujas[i].puja_actual = listpujas[i].puja_actual;
        // listaPujas[i][f]=listpujas[i][f];
  }

  // console.log(listreports);
  // 
  // const array = listreports.map(o => o);
  // console.log(array._id);

  // console.log(listreports);
  for (const o in listreports){
    // console.log("Esta vaina",(listreports[o]._id));
    // (listaSubastas[o].push({idSubasta: (listreports[o]._id)}));
    // listaSubastas[o].nombre = listreports[o].nombre;
    // listaSubastas[o].descripcion = listreports[o].descripcion;
    // listaSubastas[o].fecha_inicio = listreports[o].fecha_inicio;
    // listaSubastas[o].hora_inicio = listreports[o].hora_inicio;
    // listaSubastas[o].fecha_fin = listreports[o].fecha_fin;
    // listaSubastas[o].hora_fin = listreports[o].hora_fin;
    // listaSubastas[o].tiempo_cancelacion = listreports[o].tiempo_cancelacion;
    // listaSubastas[o].monto_inicial = listreports[o].monto_inicial;
    // listaSubastas[o].imagen = listreports[o].imagen;
    // listaSubastas[o].puja_actual = listreports[o].puja_actual;
    // listaSubastas[o].estado = listreports[o].estado;
  }

  // console.log(listaSubastas);

  // console.log(listaPujas);
  // console.log(listpujas);
  const allSubastas = listreports.map(e => <Subastas datos={e} />);

  const [compDinamico, setcompDinamico] = useState("");
  const onOptionClicked = function (evt) {
    evt.preventDefault();
    if (evt.target.name === "Home") {
      setcompDinamico(<div id="contenedor" className='row mt-5' >{allSubastas}</div>);
    }
    else if (evt.target.name === "About") {
      setcompDinamico(<div>Pagina about </div>);
    }
    else if (evt.target.name === "Admin_Users") {
      setcompDinamico(<Users listauser={lista_usuarios} />);
    }
    else if (evt.target.name === "Admin_Bids") {
      // setcompDinamico(<Mybids lstSubastas={listreports} lstPujas={listaPujas} />);
      setcompDinamico(<NewOffert1 lstSubastas={listreports}/>);
    }
    else if (evt.target.name === "Admin_Reports") {
      setcompDinamico(<Reportes lstSubastas={listreports} lstPujas={listaPujas} />);
    }
    else if (evt.target.name === "Contact") {
      setcompDinamico( <Contacto />);
      // setcompDinamico( <NewOffert1 lstSubastas={listreports} />);
    }
    else if (evt.target.name === "Cerrar_sesion") {
      setcompDinamico(<Login />);
    }
    else if (evt.target.name === "EditProfile") {
      setcompDinamico(<div>Pagina de editar perfil</div>);
    }
    else if (evt.target.name === "My_bids") {
      setcompDinamico(<Mybids lstSubastas={listreports} lstPujas={listaPujas} />);
    }
    else {
      setcompDinamico(<div id="contenedor" className='row mt-5' >{allSubastas}</div>)
    }
  }

  function Rutas() {
    if (compDinamico === "") {
      return (

        <BrowserRouter>
          <Routes>
            {/* <Route exact path ="/MyBids" element={<Mybids lstSubastas={listaSubastas} lstPujas={listaPujas}/>} /> */}
            <Route exact path="/Subastas" element={<div id="contenedor" className="row mt-5">{allSubastas}</div>} />
            <Route exact path="/Subastas/:idSubasta" element={allSubastas} />
            <Route path="/reportes" element={<Reportes lstSubastas={listaSubastas} lstPujas={listaPujas} />} />
            <Route path="/NewOffert" element={<NewOffert1 lstSubastas={listaSubastas} />} />
            <Route path="/Register" element={<Registro />} />
            <Route path="/Forgotpassword" element={<Registro />} />

            {/* <Route path="/ejemplo" element={<Home/>} /> */}
            {/* <NewOffert/> */}
          </Routes>
          {/* <Registo */}
        </BrowserRouter>
      )
    }
  }
  // function Linc(){
  //   return (
  //     <Link className="dropdown-item" name="View_Offer" to="Subasta" >View Offer</Link>
  //   )
  // }

  return (
    // import { BrowserRouter, Routes, Route } from 'react-router-dom';
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Productos />} />
    //     <Route path="/producto/lista" element={<ProductList />} />
    //     <Route path="/comments" element={<Comentarios />} />
    //   </Routes>
    // </BrowserRouter>


    <Fragment>
      <Nav onOptionClicked={onOptionClicked} />
      {compDinamico}

      {/* <Registro/> */}
      {/* <Rutas/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route exact path ="/MyBids" element={<Mybids lstSubastas={listaSubastas} lstPujas={listaPujas}/>} /> */}
          <Route exact path="/Subastas" element={<div id="contenedor" className="row mt-5">{allSubastas}</div>} />
          <Route exact path="/Subastas/:idSubasta" element={allSubastas} />
          <Route path="/reportes" element={<Reportes lstSubastas={listaSubastas} lstPujas={listaPujas} />} />
          <Route path="/NewOffert" element={<NewOffert1 lstSubastas={listaSubastas} />} />
          <Route path="/Register" element={<Registro />} />
          <Route path="/ejemplo" element={<Home />} />
          {/* <Route path="/" element={<div id="contenedor" className='row mt-5' >{allSubastas}</div>} /> */}
          <Route path="/admin/newoffert" element={<NewOffert1 lstSubastas={listreports}/>}/>

          {/* <NewOffert/> */}
        </Routes>
        {/* <Registo */}
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}




export default App;
