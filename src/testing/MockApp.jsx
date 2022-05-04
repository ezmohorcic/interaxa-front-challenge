import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/NavBar/NavBar.jsx"

import axios from "axios"
import Card from "../components/Card/Card.jsx";

axios.defaults.baseURL=process.env.REACT_APP_API;
const inner = {sunrise:"sunrise",sunset:"sunset",day_length:"day_length",lat:"lat",lng:"lng"};

export default function MockApp() {

    return (
        <Fragment>
            <BrowserRouter>
                <Navbar/> 
                <Routes>                
                    <Route path="/" element={<Card inner={inner}/>}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );

}
