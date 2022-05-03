import css from "./SearchHome.module.css";

import React from "react";
import { useSelector } from "react-redux";
import SearchSelect from "../../components/SearchSelect/SearchSelect";


export default function SearchHome()
{

    //REDUX
    const search = useSelector( state => state.search );

    return(
        <div id={css.searchHCont}>
            <SearchSelect/>
        </div>
    )
}