import React, { useState } from "react";
import Header from "../components/UI/header/Header";
import Button from "../components/UI/button/Button"
import Input from "../components/UI/input/Input"
import classes from "../styles/CreateProject.module.css"
import Select from "../components/UI/select/Select";
import { useNavigate,useLocation } from 'react-router-dom';
import PageComponent from "../components/pageComponent/pageComponent";

const CreateProject = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const options = [
        {value: 'C#'},
        {value: 'C++'},
        {value: 'C'},
        {value: 'JavaScript'},
        {value: 'Assembler'},
        {value: 'VisualBasic (v6)'},
    ];
    const [option, setOption] = useState(location?.state != undefined? location.state.language : "C#");
    const [projectName, setProjectName] = useState(location?.state != undefined? location.state.name : "");
    const [projectDesc, setProjectDesc] = useState(location?.state != undefined? location.state.desc : "");

    const createProject = () => {
        navigate('/assesment', {state: {language: option, name: projectName, desc: projectDesc}});
    }

    return (
        <div>
            <PageComponent
                previosPagePath="/account" 
                title="CREATE PROJECT" 
                info="Step 1: create a card for your project"
                info2="This information will be saved in your personal account, so you can find it easily"
                state = {location.state}></PageComponent>
            <div className={classes.content}>
                <div className={classes.info_block}>
                    <div className={classes.inpt_block}>
                        <Input className={classes.inpt} placeholder="Title" value={projectName} onChange={(e) => setProjectName(e.target.value)}></Input>
                        <div className={classes.slct}>
                            <Select options={options} defaultValue="Language" value={option} setValue={setOption}/>
                        </div>
                    </div>
                    <div className={classes.fin_block}>
                        <textarea className={classes.inpt_desc} value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} placeholder="Description (recommend to leave a link of project GitHub)"></textarea>
                            <div className={classes.btn_block}>
                                <div className={classes.comm}>Make sure that the description fully describes the purpose of the project,
                                 you can specify the basic requirements for the software product</div>
                                <Button onClick={createProject} className={classes.btn_done}>DONE</Button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;