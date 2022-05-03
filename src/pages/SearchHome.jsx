import React from "react";
import { useSelector } from "react-redux";


export default function SearchHome()
{

    //REDUX
    const search = useSelector( state => state.search );

    return(
        <div>{console.log(search)}</div>
    )
}