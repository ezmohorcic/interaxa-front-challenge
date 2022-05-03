import css from "./NavBar.module.css"

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchApi } from "../../ReduxToolkit/apiCalls/searchCall";
import {  useNavigate } from "react-router";

const regexCoord = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
const regexDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

const SearchBar = () =>
{
    //STATE
    const [search,setSearch] = useState({lat:"",lng:"",date:"",formatted:false});
    const [error,setError] = useState({});

    //REDUX
    const dispatch =useDispatch();
    //ROUTE
    const navigate = useNavigate();

    //HANDLERS
    const handlerError = () =>
    {
        let errorCheck={};
        if(!regexCoord.test(search.lat)) errorCheck.lat= true; 
        if(!regexCoord.test(search.lng)) errorCheck.lng= true;
        if(search.date.length)if(!regexDate.test(search.date)) errorCheck.date=true;

        console.log(errorCheck,errorCheck.length)
       
        
        
        return errorCheck.length? setError(errorCheck) : true;
    }
    const handleFormatted = () => setSearch( { ...search,formatted:!search["formatted"] });
    const handleSearch = (e) => setSearch({...search,[e.target.getAttribute("name")]:e.target.value.trim()});
    const handleSubmit = () =>
    {
        if(handlerError())
        {
            console.log("41")
            searchApi(dispatch,search);
            navigate(`/search`);
        }
    }

    return(
        <div id={css.searchCont}> 
            <div id={css.searchCoordShell}>
                <input type="number" name="lat" id={css.searchCoord} value={search.lat} onChange={handleSearch}/>
                <span id={css.searchError}>{error.lat? "just Numbers :c" : ""}</span>
            </div>

            <div id={css.searchCoordShell}>
                <input type="number" name="lng" id={css.searchCoord} value={search.lng} onChange={handleSearch}/>
                <span id={css.searchError}>{error.lng? "just Numbers :c" : ""}</span>
            </div>

            <div id={css.searchDateShell}>
                <input type="date" name="date" id={css.searchCoord} value={search.date} onChange={handleSearch}/>
                <span id={css.searchError}>{error.date? "Wrong date :c" : ""}</span>
            </div>
            <div id={css.searchFormatShell}>
                <input type="checkbox" name="date" id={css.searchCoord}  onChange={handleFormatted}/>
            </div>
            
            <button id={css.searchBut} onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default function Navbar()
{
    return(
        <div id={css.navBarCont}>
            <div id={css.sunsriseApiShell}> <a target="_blank" href="https://sunrise-sunset.org/api">Sunset App</a></div>

            <SearchBar/>
            {/* {navigator.geolocation.getCurrentPosition((position) =>  console.log(position.coords.latitude,position.coords.longitude)  ) } */}
            <div id={css.selfShell}>Locate self</div>
        </div>
    )
}   