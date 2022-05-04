import css from "./EmptyArray.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";


const EmptyArray = () =>
{
    return(
        <div id={css.emptyArrayCont}>
            <div id={css.skyEmptyArr}>
                <div id={css.infoCont}>
                        <h1>Welcome!</h1>
                        <p>To use, please fill the latitud and longitude above, and if you need one, a particular date, or search your location for today's sunrise and sunset</p>

                        <FontAwesomeIcon id={css.smallCloud1} icon={ faCloud } />
                        <FontAwesomeIcon id={css.smallCloud2} icon={ faCloud } />
                        <FontAwesomeIcon id={css.mediumCloud} icon={ faCloud } />
                        <FontAwesomeIcon id={css.bigCloud} icon={ faCloud } />
                        <FontAwesomeIcon id={css.moon} icon={ faMoon } />
                </div>
                <div id={css.sunShell}>
                    <FontAwesomeIcon icon={ faSun } />
                </div>
            </div>
        </div>
    )
}

export default EmptyArray;