import React, { useState } from "react";
import Header from "../components/UI/header/Header";
import Button from "../components/UI/button/Button"
import Input from "../components/UI/input/Input"
import classes from "../styles/CreateProject.module.css"
import Select from "../components/UI/select/Select";
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {

    const navigate = useNavigate();

    const options = [
        {value: 'C#'},
        {value: 'C++'},
        {value: 'C'},
        {value: 'JavaScript'},
        {value: 'Assembler'},
        {value: 'VisualBasic (v6)'},
    ];
    const [option, setOption] = useState('Language');
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');

    const createProject = () => {
        navigate('/assesment', {state: {language: option, name: projectName, desc: projectDesc}});
        //сохранить проект в бд
    }

    return (
        <div>
            <Header nick_name="meee"></Header>
            <div className={classes.content}>
                <div className={classes.title_block}>
                    <div className={classes.title}>CREATE PROJECT</div>
                    <Button className={classes.btn_return}>RETURN</Button>
                </div>
                <div className={classes.info}>
                    <div>Step 1: create a card for your project</div>
                    <div>This information will be saved in your personal account, so you can find it easily</div>
                    <div className={classes.inpt_block}>
                        <Input className={classes.inpt} placeholder="Title" value={projectName} onChange={(e) => setProjectName(e.target.value)}></Input>
                        <div className={classes.slct}>
                            <Select options={options} defaultValue="Language" value={option} setValue={setOption}/>
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
        </div>
    );
}

export default CreateProject;