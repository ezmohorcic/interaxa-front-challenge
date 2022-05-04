import React from "react";
import { motion } from "framer-motion";
import css from "./LoadingScreen.module.css";

const LoadingScreen = () =>
{

    //FRAMER MOTION
    const animation = {
        scale:[1,2,2.5,2.5,2,1],
        rotate:[0,180,270,270,180,0],
        borderRadius:["10%","20%","50%","50%","20%","10%"],
        backgroundColor:["#560BAD","#F72585","#FFD500","#FFD500","#F72585","#560BAD"]
    }
    const transition ={
        duration:3,
        ease:[0.5,0.5,0.5,0.5],
        repeat: Infinity,
        repeatDelay:0.5
    }
    

    return(
        <motion.div id={css.loadingCont}>
            <motion.div id={css.loading} animate={animation} transition={transition}></motion.div>
        </motion.div>
    )
}

export default LoadingScreen;