import css from "./Home.module.css";

import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

export default function Home()
{
    //REDUX
    const cardArray = useSelector( state => state.array.array);

    //VARIABLES FOR SHOW
    const arrShow = cardArray.map((element,index)=><Card key={"card_"+index} inner={element}/>)


    //RETURNS FOR STATUS
    if(!cardArray.length) return <div> No bitches? </div>

    return(
        <div id={css.homeCont}>
            {arrShow}
        </div>
    )
}