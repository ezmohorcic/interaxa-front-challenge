import css from "./SearchSelect.module.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../ReduxToolkit/reducers/arrayReducer";
import { searchClean } from "../../ReduxToolkit/reducers/searchReducer";
import { useNavigate } from "react-router";
import { coordFilter } from "../../ReduxToolkit/reducers/arrayReducer";
import { INVALID_REQUEST, LOADING_0 } from "../../ReduxToolkit/consts";
import LoadingScreen from "../Helpers/LoadingScreen";
import EmptyScreen from "../Helpers/EmptyScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



const namesTwArr = ["civil","nautical","astronomical"];
const namesInfArr = ["sunrise","day_length","sunset","solar_noon"];


const InfoShell = ({name,shell,cont}) =>
{
    return(
        <div id={css[name]} className={css[shell]}>
            <h3>{name.replace('_',' ')}</h3>
            <p>{cont}</p>
        </div>
    )
}
const TwilightTab = ({handler,state,name}) => <div onMouseEnter={()=>handler(state)} onMouseLeave={()=>handler({})} className={css.twilightTab}>{name}</div>


const SearchSelect = () =>
{

    //STATE
    const [info,setInfo] = useState({})

    //ROUTE
    const navigate = useNavigate()

    //REDUX
    const dispatch = useDispatch()
    const search = useSelector( state => state.search.results);
    const status = useSelector( state => state.search.status);
    const array = useSelector ( state => state.array.array);
    
    //HANDLERS
    const handle_add = () =>
    {
        const arrayFilter = coordFilter(search.lat,search.lng);
        if(!array.filter(arrayFilter).length) dispatch(addElement(search));
            
        dispatch(searchClean());
        navigate("/");
    }

    //VARIABLES FOR SHOW
    const infoShow = namesInfArr.map((element,index) =><InfoShell key={"infoShell_"+index} name={element} shell={index%2 ? "middleShell" : "upperShell" } cont={search[element]}/>)
    const twilightTabs = namesTwArr.map((element,index) => <TwilightTab key={"twilightTab_"+index} handler={setInfo} name={element} state={{sunrise:search[`${element}_twilight_begin`],sunset:search[`${element}_twilight_end`]}}/> )

    //RETURNS FOR STATUS
    if(status===LOADING_0) return (<LoadingScreen/>)
    if(status===INVALID_REQUEST) return (<EmptyScreen/>)

    return(
        <article id={css.searchCont}>
            
            <div id={css.infoCont}>

                <div id={css.infoShell}>
                    {infoShow}
                </div>

                <div id={css.twilightTabsCont}>{twilightTabs}</div>


                <div id={css.lowerShell}>
                   <InfoShell name="sunrise" shell="upperShell" cont={info.sunrise}/>
                   <InfoShell name="sunset"  shell="upperShell" cont={info.sunset}/> 
                </div>

            </div>
            <button id={css.addBut} onClick={handle_add}> <FontAwesomeIcon icon={ faPlus }/> </button>
        </article>
    )
}

export default SearchSelect;