import "../css/Base.css"
import cerrar_sesion from "../img/cerrar-sesion.png"
import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route,MemoryRouter } from 'react-router-dom';


export default function Nav({ onOptionClicked }) {
    const usernav = () => {
        return (

            <li className="nav-item">
                <Link to="/mybids">
                    <a className="nav-link active" ><button name="Contact" id="buttontransparent"  >My bids</button></a>
                </Link>
            </li>


        );
    };

    // <!-- CSS only -->


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#2dc3bc" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" name="Nada" style={{ paddingBottom: "0%" }} onClick={onOptionClicked}>Online Bids</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" href="/"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"> <button name="Home" id="buttontransparent" onClick={onOptionClicked}>Home</button></a>
                            </li>
                            {/* <li className="nav-item">
                                <a  className="nav-link" ><button name="About" id="buttontransparent" onClick={onOptionClicked}>About</button> </a>
                            </li> */}

                            {/* {rol ? usernav()} */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Admin
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" name="Admin_Users" onClick={onOptionClicked}>Users</a></li>
                                    <li><a className="dropdown-item" name="Admin_Bids" to="/mybids" onClick={onOptionClicked}>Bids</a></li>
                                    {/* <li><Link className="dropdown-item" name="Admin_Bids" to="/mybids" >Bids</Link></li> */}
                                    {/* <Link>Bids</Link>   */}

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" name="Admin_Reports" onClick={onOptionClicked}>Reports</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" ><button name="Contact" id="buttontransparent" to="/Contacto" onClick={onOptionClicked}>Contact</button></a>
                                {/* <button name="Cerrar_sesion"  onClick={onOptionClicked}>Contact</button> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" ><button name="My_bids" id="buttontransparent" onClick={onOptionClicked}>My bids</button></a>
                                {/* <button name="Cerrar_sesion"  onClick={onOptionClicked}>Contact</button> */}
                            </li>
                        </ul>

                        <form className="d-flex col-md-4">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                            {/* <a style={{ paddingLeft: "94%" }} /> */}
                            {/* <a width="10px"/> */}
                            &nbsp;
                            {/* <br/> */}
                            <a>
                                <button onClick={onOptionClicked} id="buttontransparent" ><img width="35" name="EditProfile" height="35" src="https://cdn-icons-png.flaticon.com/512/1057/1057097.png" alt="editar" title="editar" className="loaded "></img> </button>
                                {/* <button name="Cerrar_sesion"  onClick={onOptionClicked}>Contact</button> */}
                            </a>
                            &nbsp;
                            <a className="">
                                <button onClick={onOptionClicked} id="buttontransparent" ><img src={cerrar_sesion} width="35" height="35" alt="cerrar sesión" title="cerrar sesión" className="" name="Cerrar_sesion" /> </button>
                                {/* <img src={cerrar_sesion} width="35" height="35" alt="cerrar sesión" title="cerrar sesión" className="" /> */}
                            </a>
                        </form>

                        {/* <nav className="navbar navbar" style={{ backgroundColor: "#2dc3bc" }}> */}
                        {/* <!-- Navbar content --> */}

                        {/* </nav> */}

                    </div>
                </div>
            </nav>

        </div>
    )
}