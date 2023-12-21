import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import img_src from '../../sources/profile-circle.png'
import img_logOut from '../../sources/interface-logout--arrow-exit-frame-leave-logout-rectangle-right.png'

const Header = () => {
    const navigate = useNavigate();
    const account = () => {
        if(localStorage.getItem("id") != undefined){
            navigate('/account');
        }
        else {
            navigate('/login');
        }
    }

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    }

    const goHome = () => {
        navigate('/home');
    }

    return (
        <div className={classes.head}>
            <div onClick={goHome} className={classes.logo}>SCAAP</div>
            <div className={classes.account}>
                <div className={classes.nick}>{localStorage.getItem("login")}</div>
                <img onClick={logOut} className={classes.logOut} src={img_logOut} />
                <img onClick={account} src={img_src} />
            </div>
        </div>
    );
}

export default Header;