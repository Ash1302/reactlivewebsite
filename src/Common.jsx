import React from 'react';
import web from "../src/images/class-img.jpg";
import { NavLink } from "react-router-dom"

const Common = (props) => {
    return(
        <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    welcome{}
                                    Grow your self web devlopment About
                                </h1>
                                <h2 className="my-3">
                                    we are the team of talnted devleoper making websites
                                </h2>

                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">
                                       {props.btname}
                                    </NavLink>
                                </div>
                            </div>
                    
                        
                            <div className="col-lg-6 order-1 header-img">
                                <img src={props.imgsrc}  className="img-fluid animated" alt="homw img" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Common;