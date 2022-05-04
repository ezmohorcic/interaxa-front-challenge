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


const TwilightShell = ({begin,end,of}) =>
{
    return(
        <div className={css.twilightInner}>
            <p id={css.moonSide} className={css.twilightText}>{begin}</p>
            <h2 className={css.twilightText}>{of}</h2>
            <p id={css.solarSide} className={css.twilightText}>{end}</p>
        </div>
    )
}
const InfoShell = ({name,shell,cont}) =>
{
    return(
        <div id={css[name]} className={css[shell]}>
            <h3>{name.replace('_',' ')}</h3>
            <p>{cont}</p>
        </div>
    )
}
const TwilightTab = ({handler,state,name}) =>
{
    return(
        <div onMouseEnter={()=>handler(state)} onMouseLeave={()=>handler({})} className={css.twilightTab}>{name}</div>
    )
}

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
    const handleAdd = () =>
    {
        const arrayFilter = coordFilter(search.lat,search.lng);
        if(!array.filter(arrayFilter).length) dispatch(addElement(search));
            
        dispatch(searchClean());
        navigate("/");
    }

    //VARIABLES FOR SHOW
    const twilightShow = namesTwArr.map((element,index) => <TwilightShell key={"twilightShell_"+index} begin={search[`${element}_twilight_begin`]} of={element} end={search[`${element}_twilight_end`]} />)
    const infoShow = namesInfArr.map((element,index) =><InfoShell key={"infoShell_"+index} name={element} shell={index%2 ? "middleShell" : "upperShell" } cont={search[element]}/>)
    const twilightTabs = namesTwArr.map((element,index) => <TwilightTab key={"twilightTab_"+index} handler={setInfo} name={element} state={{sunrise:search[`${element}_twilight_begin`],sunset:search[`${element}_twilight_end`]}}/> )

    //RETURNS FOR STATUS
    if(status===LOADING_0) return (<LoadingScreen/>)
    if(status===INVALID_REQUEST) return (<EmptyScreen/>)

    return(
        <div id={css.searchCont}>
            
            <div id={css.infoCont}>

                <div id={css.infoShell}>
                    {infoShow}
                </div>

                <div id={css.twilightTabsCont}>{twilightTabs}</div>

                {/* <div id={css.twilightCont}>
                    <div id={css.titleTwighlight}><h3>sunrise</h3><h3>sunset</h3></div>
                    {twilightShow}
                </div> */}
                <div id={css.lowerShell}>
                   <InfoShell name="sunrise" shell="upperShell" cont={info.sunrise}/>
                   <InfoShell name="sunset"  shell="upperShell" cont={info.sunset}/> 
                </div>

            </div>
            <button id={css.addBut} onClick={handleAdd}> <FontAwesomeIcon icon={ faPlus }/> </button>
        </div>
    )
}

export default SearchSelect;