import React from 'react';
import { useNavigate } from 'react-router-dom'
import classes from "../../styles/CreateProject.module.css"
import Header from '../UI/header/Header';
import Button from '../../components/UI/button/Button';

const PageComponent = ({previosPagePath, title, info}) => {
    const navigate = useNavigate();

    const returnToPrevios = () => {
        navigate(previosPagePath);
    }

  return (
    <div>
      <Header></Header>
      <div className={classes.content}>
            <div className={classes.title_block}>
                <div className={classes.title}>{title}</div>
                <Button className={classes.btn_return} onClick={returnToPrevios}>RETURN</Button>
            </div>
            <div className={classes.info}>
                {info}
            </div>
        </div>
    </div>
  );
};

export default PageComponent;