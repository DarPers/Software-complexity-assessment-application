import React from "react";
import classes from "./Radio.module.css"

const Radio = ({name, onChange, key, value}) => {
    return (
        <input className={classes.btn_radio} type="radio" name={name} onChange={onChange} key={key} value={value}></input>
    )
}

export default Radio;