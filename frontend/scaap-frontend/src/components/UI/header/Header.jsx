import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import img_src from '../../sources/profile-circle.png'

const Header = () => {
    const navigate = useNavigate();
    const account = () => {
        navigate('/account');
    }

    const goHome = () => {
        navigate('/home');
    }

    return (
        <div className={classes.head}>
            <div onClick={goHome} className={classes.logo}>SCAAP</div>
            <div className={classes.account}>
                <div className={classes.nick}>{localStorage.getItem("login")}</div>
                <img onClick={account} src={img_src} />
            </div>
        </div>
    );
}

export default Header;