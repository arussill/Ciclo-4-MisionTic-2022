import { Fragment } from "react";
import React from "react";
import { SignOutIcon, PencilIcon } from '@primer/octicons-react'
import "../css/Base.css"
import "../css/nicepage.css"
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Login() {

    return (


        <section className="u-align-center u-clearfix u-gradient u-section-1" id="sec-2c34">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-align-center u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1" >
                        <h3 className="u-text u-text-default u-text-1">Sign In</h3>
                        <div className="u-expanded-width u-form u-login-control u-form-1">
                            <form action="#" method="POST"
                                className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form" source="custom"
                                name="form-2" style={{ padding: "10px" }}  >
                                <div className="u-form-group u-form-name">
                                    <label htmlFor="username-708d" className="u-form-control-hidden u-label"></label>
                                    <input type="text" placeholder="Enter your Email" id="username-708d" name="username"
                                        className="u-grey-5 u-input u-input-rectangle" required="" />
                                </div>
                                <div className="u-form-group u-form-password">
                                    <label htmlFor="password-708d" className="u-form-control-hidden u-label"></label>
                                    <input type="password" placeholder="Enter your Password" id="password-708d" name="password"
                                        className="u-grey-5 u-input u-input-rectangle" required="" />
                                </div>
                                <div className="u-form-checkbox u-form-group">
                                    <input type="checkbox" id="checkbox-708d" name="remember" value="On" />
                                    <label htmlFor="checkbox-708d" class="u-label">Remember me</label>
                                </div>
                                <div className="u-align-center u-form-group u-form-submit">
                                    <a href="#" className="u-btn u-btn-round u-btn-submit u-button-style u-radius-17 u-btn-1">Login</a>
                                    <input type="submit" value="submit" className="u-form-control-hidden" />
                                </div>
                                <input type="hidden" value="" name="recaptchaResponse" />
                            </form>
                        </div>
                        <a href="Register"
                            className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2">Don't have account</a>
                        <a href=""
                            className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2">Forgot
                            password?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// function Logincomplet(){
//     return(
//     <Fragment>
//         <Nav/>
//         <Login/>
//     </Fragment>
//     )
// }
