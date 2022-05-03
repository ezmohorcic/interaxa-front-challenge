import css from "./Home.module.css";

import React from "react";
import { useSelector } from "react-redux";


export default function Home()
{
    //REDUX
    const cardArray = useSelector( state => state.array)

    return(
        <div id={css.homeCont}>
            
        </div>
    )
}