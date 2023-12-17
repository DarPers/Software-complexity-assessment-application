import React from "react";
import Button from "../UI/button/Button";
import classes from "./projectComponent.module.css"

const ProjectComponent = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.line}>
                <div className={classes.block}>
                    <div className={classes.assesm}>
                        <div className={classes.title}>COCOMO II</div>
                        <div>
                            <div>{props.pers_month} Pers./month</div>
                            <div>{props.month} Month</div>
                            <div>{props.pers} Pers.</div>
                        </div>
                    </div>

                    <div className={classes.assesm}>
                        <div className={classes.title}>Functional point method</div>
                        <div>{props.FPs}</div>
                    </div>
                </div>
                <div className={classes.btns}>
                    <Button className={classes.btn}>Detail</Button>
                    <Button className={classes.btn}>Download</Button>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectComponent;