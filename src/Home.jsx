import React from 'react';
import web from "../src/images/class-img.jpg";
import { NavLink } from "react-router-dom"
import Common from './Common';

const Home = () => {
    return(
        <div>
        <Common 
        name="Welcome to Web Devlopment Classes"
        imgsrc={web}
        visit="/service"
        btname="Get Satarted"
        />
        </div>
    );
};

export default Home;