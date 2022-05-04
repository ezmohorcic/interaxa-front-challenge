import css from "./NavBar.module.css"

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchApi } from "../../ReduxToolkit/apiCalls/searchCall";
import {  useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const regexCoord = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
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

        if(Object.getOwnPropertyNames(errorCheck).length )
        {
            setError(errorCheck)
            return false
        }
        else return true;
    }
    const handleFormatted = () => setSearch( { ...search,formatted:!search["formatted"] });
    const handleSearch = (e) => setSearch({...search,[e.target.getAttribute("name")]:e.target.value.trim()});
    const handleSubmit = () =>
    {
        if(handlerError())
        {
            searchApi(dispatch,search);
            navigate(`/search`);
        }
    }

    return(
        <div id={css.searchCont}> 
            <div className={css.searchCoordShell}>
                <p className={css.searchCoordText}>Latitud:</p>
                <input id="lat" type="number" name="lat" className={css.searchCoord} value={search.lat} onChange={handleSearch}/>
                <span className={css.searchError}>{error.lat? "error :c" : ""}</span>
            </div>

            <div className={css.searchCoordShell}>
            <p className={css.searchCoordText}>Longitud:</p>
                <input id="lng" type="number" name="lng" className={css.searchCoord} value={search.lng} onChange={handleSearch}/>
                <span className={css.searchError}>{error.lng? "error :c" : ""}</span>
            </div>

            <div className={css.searchDateShell}>
                <input type="date" name="date" id={css.searchDate} value={search.date} onChange={handleSearch}/>
                <span className={css.searchError}>{error.date? "Wrong date :c" : ""}</span>
            </div>
            
            <div id={css.butShell}>
                <button id={css.searchBut} onClick={handleSubmit}><FontAwesomeIcon icon={ faSearch }/></button>
            </div>
        </div>
    )
}

const SelfLocate = () =>
{

    //ROUTE
    const navigate = useNavigate();

    //REDUX
    const dispatch = useDispatch();

    //HANDLERS
    const handleAdd = () =>
    {
        const today = new Date();
        const successPos = (position) => searchApi(dispatch,{lat:position.coords.latitude,lng:position.coords.longitude,date:`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`});
        navigator.geolocation.getCurrentPosition(successPos);     
        navigate(`/search`);

    }

    return(
        <div id={css.selfLocateCont}>
            <button id={css.selfLocate} onClick={handleAdd}> <p>Search Current Location</p> </button>
        </div>
    )
}

export default function Navbar()
{
    return(
        <div id={css.navBarCont}>
            <div id={css.sunsriseApiShell}> <a target="_blank" href="https://sunrise-sunset.org/api">Sunset API</a></div>

            <SearchBar/>
            
            <SelfLocate/>
        </div>
    )
}   