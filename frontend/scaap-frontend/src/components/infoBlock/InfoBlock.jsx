import React from "react";
import Button from "./UI/button/Button";
import classes from "./InfoBlock.module.css"

const InfoBlock = () => {
    return (
        <div className={classes.info_block}>
            <div className={classes.title}>WHAT IS SOFTWARE COMPLEXITY ASSESSMENT APPLICATION?</div>
            <div className={classes.text}>Software Product Complexity and Size Calculation and Estimation Application is a web application designed to easily and more accurately calculate the complexity and size of a software product based on its requirements</div>
            <Button className={classes.btn_read}>READ MORE</Button>
        </div>
    );
};

export default InfoBlock;