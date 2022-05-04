import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/NavBar/NavBar.jsx"

import axios from "axios"

axios.defaults.baseURL=process.env.REACT_APP_API;

export default function MockApp() {

    return (
        <Fragment>
            <BrowserRouter>
                <Navbar/> 
                <Routes>                

                </Routes>
            </BrowserRouter>
        </Fragment>
    );

}
