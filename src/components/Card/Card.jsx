import css from "./Card.module.css";

import React from "react";
import { useDispatch } from "react-redux";
import { eliminatedElement } from "../../ReduxToolkit/reducers/arrayReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { searchSuccess } from "../../ReduxToolkit/reducers/searchReducer";
import { OK } from "../../ReduxToolkit/consts";

const Card = ({inner}) =>
{
    //ROUTE
    const navigate = useNavigate();

    //CTEs
    const {sunrise,sunset,day_length,lat,lng} = inner;

    //REDUX
    const dispatch = useDispatch();
 
    //HANDLERS
    const handleDelete = () =>
    {
        dispatch( eliminatedElement({lat,lng}) )
    }
    const handleSearch = () =>
    {
        dispatch(searchSuccess({results:inner,status:OK}))
        navigate("/search")
    }


    return(
        <div className={css.cardCont}>

            <div onClick={handleSearch} className={css.coordCont}>
                <p className={css.coordText}> <span>lat: </span> {lat} </p>
                <p className={css.coordText}> <span>lng: </span> {lng} </p>
            </div>

            <div className={css.sunCont}>
                <p className={css.sunText}>{sunrise}</p>
                <p className={css.sunText}>{sunset}</p>
            </div>

            <div className={css.lengthCont}>
                <h3 className={css.lengthTitle}>length:</h3>
                <p className={css.lengthText}>{day_length} hs</p>
            </div>
            <div className={css.buttonCont}><button className={css.deleteBut} onClick={handleDelete}> <FontAwesomeIcon icon={ faTimes }/> </button></div>
        </div>
    )
}

export default Card;