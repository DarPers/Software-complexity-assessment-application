import React from 'react';
import classes from '../styles/NotFoundPage.module.css';
import {useNavigate} from 'react-router-dom'
import Button from '../components/UI/button/Button';

const NotFoundPage = () => {  
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }

    return (
        <div className={classes.body}>
            <div>PAGE NOT FOUND</div>
            <Button className={classes.btn} onClick={goHome}>Home page</Button>
        </div>
    );
  };
  
  export default NotFoundPage;