import css from "./SearchHome.module.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { useNavigate } from "react-router";
import { searchClean } from "../../ReduxToolkit/reducers/searchReducer";


export default function SearchHome()
{

    //ROUTE
    const navigate = useNavigate();

    //REDUX
    const dispatch = useDispatch();

    //HANDLERS
    const handle_cancel = () =>
    {
        dispatch(searchClean());
        navigate("/");
    }

    return(
        <main onClick={handle_cancel} id={css.searchHCont}>
            <SearchSelect/>
        </main>
    )
}