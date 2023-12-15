import React, { useState } from "react";
import InfoBlock from "../components/infoBlock/InfoBlock";
import Input from "../components/UI/input/Input";
import classes from '../styles/Login.module.css'
import Button from "../components/UI/button/Button";
import auth_service from "../API/auth_service";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [login , setLogin] = useState('');
    const [password , setPassword] = useState('');
    const [repPassword , setRepPassword] = useState('');
    const [email , setEmail] = useState('');
    const navigate = useNavigate();

    const logIn = async () => {
        navigate('/login');
    }

    const register = async () => {
        //регистрация
    }

    return(
        <div className={classes.page}>
            <div className={classes.form}>
                <div className={classes.text}>START YOUR WAY HERE</div>
                <Input className={classes.inpt} placeholder="Login" onChange={e => setLogin(e.target.value)}></Input>
                <Input className={classes.inpt} placeholder="Email" onChange={e => setEmail(e.target.value)}></Input>
                <Input className={classes.inpt} placeholder="Password" onChange={e => setPassword(e.target.value)}></Input>
                <Input className={classes.inpt} placeholder="Repeat password" onChange={e => setRepPassword(e.target.value)}></Input>
                <Button className={classes.btn_register} onClick={register}>CREATE ACCOUNT</Button>
                <Button className={classes.btn_login} onClick={logIn}>I ALREADY HAVE AN ACCOUNT</Button>
            </div>
            <div className={classes.info}>
                <InfoBlock></InfoBlock>
            </div>
        </div>
    );
};

export default Register;