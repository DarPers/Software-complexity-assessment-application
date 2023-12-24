import React from "react";
import classes from "../paragraf/Paragraf.module.css";

const Paragraf = ({title, text}) => {
    return(
        <div className={classes.paragraf}>
            <div className={classes.title}>{title}</div>
            <div className={classes.text}>{text}</div>
        </div>
    );
}

export default Paragraf;