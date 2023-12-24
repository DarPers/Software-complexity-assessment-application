import React from "react";
import Header from "../components/UI/header/Header";
import Button from "../components/UI/button/Button";
import Paragraf from "../components/UI/paragraf/Paragraf";
import classes from "../styles/Home.module.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const goToAccount = () => {
        navigate("/account");
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.title}>
                    <div>SOFTWARE COMPLEXITY ASSESSMENT APPLICATION</div>
                    <Button className={classes.btn} onClick={goToAccount}>Start</Button>
                </div>
                <hr></hr>
                <div className={classes.paragrafs}>
                    <Paragraf
                        title="WHAT IS SOFTWARE COMPLEXITY ASSESSMENT APPLICATION?"
                        text="Software Product Complexity and Size Calculation and Estimation Application 
                        is a web application designed to easily and more accurately calculate the complexity 
                        and size of a software product based on its requirements."/>
                    <Paragraf
                        title="WHAT METHODS ARE USED TO ASSESS COMLEXITY IN AN APPLICATION? HOW THE METHODS COMPLEMENT EACH OTHER?"
                        text="The web service uses the following methods for estimating the complexity of a software product: COCOMO II, 
                        function point method. Due to the obtained dimensions of the software product as a result of function point analysis, 
                        the number of lines for one function point can be obtained for further analysis using the constructive cost model and the 
                        total number of lines of the software product."/>
                    <Paragraf
                        title="WHAT IS FUNCTION POINT METHOD?"
                        text="The function point method is used to estimate the development time at early stages (phases) of the project, for example, 
                        at the stage of logical andCOCOMO II is a method for estimating the cost of software development. The model considers the accuracy of software size estimation at different stages of the project depending on the completeness of information. As we move from the prototype model to the detailed development model, the number of factors considered in the model increases.
                        This model has two stages of estimation: preliminary estimation at the initial stage and detailed estimation after the architecture has been developed.
                        Using this model, as the results can be obtained labor intensity (person in months), time required for development (month).
                        COCOMO II takes into account personnel qualifications, personnel experience, product complexity and reliability, complexity of the development platform, development for reuse, equipment (rudimentary/integrated lifecycle support tools). conceptual design. To use this method it is necessary to have a list of requirements to the software being developed. 
                        The accuracy of the estimation depends on the level of requirements detailing. This method is used to estimate developers' labor productivity and workload. 
                        The result of the analysis is a certain number of function points, which can be used to estimate the size of the software product."/>
                    <Paragraf
                        title="WHAT IS COCOMO II?"
                        text="COCOMO II is a method for estimating the cost of software development. The model considers the accuracy of software size estimation at different stages of the project depending on the completeness of information. As we move from the prototype model to the detailed development model, the number of factors considered in the model increases.
                        This model has two stages of estimation: preliminary estimation at the initial stage and detailed estimation after the architecture has been developed.
                        Using this model, as the results can be obtained labor intensity (person in months), time required for development (month).
                        COCOMO II takes into account personnel qualifications, personnel experience, product complexity and reliability, complexity of the development platform, 
                        development for reuse, equipment (rudimentary/integrated lifecycle support tools)."/>
                </div>
            </div>
            <hr></hr>
            <div className={classes.footer}>
                <div>Have any questions? Write us spaapp_help@gmail.com</div>
            </div>
        </div>
    );
}

export default Home;