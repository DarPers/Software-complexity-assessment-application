import React, { useState } from "react";
import InfoBlock from "../components/infoBlock/InfoBlock";
import Input from "../components/UI/input/Input";
import classes from '../styles/Login.module.css'
import Button from "../components/UI/button/Button";
import auth_service from "../API/auth_service";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login , setLogin] = useState('');
    const [password , setPassword] = useState('');
    const [mass, setMass] = useState();
    const navigate = useNavigate();

    const logIn = async () => {
        const response = await auth_service.postAuthData(login, password)
        if (response.token != undefined){
            localStorage.setItem("token", response.token);
            localStorage.setItem("id", response.id);
            localStorage.setItem("login", login);
            localStorage.setItem("isAuth", true);
            navigate("/account"); 
        }
        else{
            setMass(response.message);
        }
    }

    const register = () => {
        navigate('/register');
    }

    return(
        <div className={classes.page}>
            <div className={classes.form}>
                <div className={classes.text}>TRY APP</div>
                <Input className={classes.inpt} placeholder="Login" onChange={e => setLogin(e.target.value)}></Input>
                <Input type="password" className={classes.inpt} placeholder="Password" onChange={e => setPassword(e.target.value)}></Input>
                <div className={classes.mass_err}>{mass}</div>
                <Button className={classes.btn_login} onClick={logIn}>LOG IN</Button>
                <div className={classes.text}>OR</div>
                <Button className={classes.btn_register} onClick={register}>CREATE ACCOUNT</Button>
            </div>
            <div className={classes.info}>
                <InfoBlock></InfoBlock>
            </div>
        </div>
    );
};

export default Login;