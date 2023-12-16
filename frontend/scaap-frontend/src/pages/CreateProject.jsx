import React, { useState } from "react";
import Header from "../components/UI/header/Header";
import Button from "../components/UI/button/Button"
import Input from "../components/UI/input/Input"
import classes from "../styles/CreateProject.module.css"
import Select from "../components/UI/select/Select";
import { Link } from "react-router-dom";
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

    const createProject = () => {
        navigate('/assesment', {language: option});
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
                        <Input className={classes.inpt} placeholder="Title"></Input>
                        <div className={classes.slct}>
                            <Select options={options} defaultValue="Language" value={option} setValue={setOption}/>
                        </div>
                        <div className={classes.fin_block}>
                            <textarea className={classes.inpt_desc} placeholder="Description (recommend to leave a link of project GitHub)"></textarea>
                            <div className={classes.btn_block}>
                                <div className={classes.comm}>Make sure that the description fully describes the purpose of the project,
                                 you can specify the basic requirements for the software product</div>
                                 {/* <Link to="/assesment" state={option}> */}
                                    <Button onClick={createProject} className={classes.btn_done}>DONE</Button>
                                 {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;