import React from "react";
export default function Footer({onOptionClicked}) {

    return (

   
        <footer className="bg-dark py-4 mt-5">
                    <div className="container px-5">
                        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div className="col-auto"><div className="small m-0 text-white">Copyright © 2021 Team #3 All Rights Reserved</div></div>
                            <div className="col-auto">
                                <a className="link-light small" href="#!">Privacy</a>
                                <span className="text-white mx-1">·</span>
                                <a className="link-light small" href="#!">Terms</a>
                                <span className="text-white mx-1">·</span>
                                <a className="link-light small" href="#!">Contact</a>
                            </div>
                        </div>
                    </div>
                </footer>
                
    )
}