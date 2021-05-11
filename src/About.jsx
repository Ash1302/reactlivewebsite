import React from 'react';
import web from "../src/images/about.png";
import { NavLink } from "react-router-dom"
import Common from './Common';

const About = () => {
    return(
        <div>
            <Common 
            name='welcome to about page' 
            imgsrc={web}  
            visit="/contact"
            btname="Contact Now" 
            />
        </div>
    );
};

export default About;