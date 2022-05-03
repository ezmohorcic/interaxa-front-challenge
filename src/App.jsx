import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SearchHome from "./pages/SearchHome.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";

import axios from "axios"
import "./App.css";

axios.defaults.baseURL=process.env.REACT_APP_API;

export default function App() {

    return (
        <div id="appCont">
            <BrowserRouter>
                <Navbar/> 
                <Routes>                
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<SearchHome/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}
