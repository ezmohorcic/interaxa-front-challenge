import css from "./EmptyScreen.module.css"

import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const EmptyScreen = () =>
{
    //FRAMER MOTION
    const skyAnimation = 
    {     
        backgroundColor:["#F72585","#FDC500","#FFD500","#F72585","#F72585","#7209B7","#560BAD","#F72585"]
    }
    const sunAnimation = 
    {
        rotate:[0,90,90,180,180,270,270,360],
    }
    const groundAnimation ={
        borderColor:["#F72585","#FDC500","#FFD500","#F72585","#F72585","#7209B7","#560BAD","#F72585"],
        color:["#F72585","#560BAD","#7209B7","#F72585","#F72585","#FDC500","#FFD500","#F72585"],
    }


    const transition ={
        duration:5,
        ease:"easeInOut",
        repeat: Infinity,
        repeatDelay:0.5
    }
    

    return(
        <div  id={css.emptyCont}>
            <motion.div animate={skyAnimation} transition={transition} id={css.skyShell}>
                <motion.div animate={sunAnimation} transition={transition} id={css.moon} className={css.svgShell}>
                    <FontAwesomeIcon icon={ faMoon }/> 
                    <FontAwesomeIcon icon={ faSun }/>
                </motion.div>
            </motion.div>
            <motion.div animate={groundAnimation} transition={transition} id={css.groundShell}>Nothing was found...</motion.div>
        </div>
    )
}


export default EmptyScreen;