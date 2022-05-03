import css from "./SearchSelect.module.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../ReduxToolkit/reducers/arrayReducer";
import { searchClean } from "../../ReduxToolkit/reducers/searchReducer";
import { useNavigate } from "react-router";

const namesTwArr = ["civil","nautical","astronomical"];
const namesInfArr = ["sunrise","sunset","solar_noon","day_length"];

const TwilightShell = ({begin,end,of}) =>
{
    return(
        <div className="twilightInner">
            <p className={css.twilightText}>{begin}</p>
            <h2 className={css.twilightText}>{of}</h2>
            <p className={css.twilightText}>{end}</p>
        </div>
    )
}
const InfoShell = ({name,shell,cont}) =>
{
    return(
        <div className={css[shell]}>
            <h2>{name.replace('_',' ')}</h2>
            {cont}
        </div>
    )
}


const SearchSelect = () =>
{

    //ROUTE
    const navigate = useNavigate()

    //REDUX
    const dispatch = useDispatch()
    const search = useSelector( state => state.search.results);
    const status = useSelector( state => state.search.status)
    console.log(search)

    //HANDLERS
    const handleAdd = () =>
    {
        dispatch(addElement(search));
        dispatch(searchClean());
        navigate("/");
    }

    //VARIABLES FOR SHOW
    const twilightShow = namesTwArr.map((element,index) => <TwilightShell key={"twilightShell_"+index} begin={search[`${element}_twilight_begin`]} of={element} end={search[`${element}_twilight_end`]} />)
    const infoShow = namesInfArr.map((element,index) =><InfoShell key={"infoShell_"+index} name={element} shell={index<2 ? "upperShell" : "middleShell"} cont={search[element]}/>)

    return(
        <div id={css.searchCont}>
            <button id={css.addBut} onClick={handleAdd}>+</button>
            <div id={css.infoCont}>

                <div id={css.infoShell}>
                    {infoShow}
                </div>

                <div className={css.twilightCont}>
                    {twilightShow}
                </div>

            </div>

        </div>
    )
}

export default SearchSelect;