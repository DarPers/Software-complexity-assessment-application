import React from 'react';
import classes from '../components/tables/TableRow.module.css';
import styles from '../styles/Result.module.css'
import {useNavigate, useLocation} from 'react-router-dom'
import ResultTable from '../components/tables/ResultTable'
import Header from '../components/UI/header/Header';
import Button from '../components/UI/button/Button';

const DetailPage = () => {  
    const location = useLocation();
    const navigate = useNavigate();

    const goToAccount = () => {
        navigate("/account");
    }

    const data = {projectType:location.state.data.projectType, weight:location.state.data.FPs, 
                 assesmentCocomo: {month: location.state.data.month, people:location.state.data.pers, people_month:location.state.data.pers_month}, description:location.state.desc};
                 
    return (
        <div>
            <Header></Header>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.name}>{location.state.data.name}</div>
                    <Button className={styles.btn_return} onClick={goToAccount}>Return</Button>
                </div>
                <div className={styles.block_title}>Project description</div>
                <div className={styles.info_block}>{location.state.data.description}</div>
                <div className={styles.block_title}>Language</div>
                <div className={styles.info_block}>{location.state.data.language}</div>
                <div className={styles.block_title}>Cost assesment</div>
                <div className={classes.table}>
                    <ResultTable data={data}></ResultTable>
                </div>
            </div>
        </div>
    );
  };
  
  export default DetailPage;