import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import classes from "../styles/CreateProject.module.css"
import TableComponent from '../components/tables/TableComponent';
import PageComponent from '../components/pageComponent/pageComponent';
import Header from '../components/UI/header/Header';
import Button from '../components/UI/button/Button';

const MFPAssesment = ({language}) => {
  return (
    <div>
      <PageComponent 
        previosPagePath="/createproject" 
        title="FUNCTIONAL POINT METHOD" 
        info="Step 2: Fill in the table based on the requirements for your project,
              click on the tooltip to correctly define the parameters"/>
        <TableComponent language={language}></TableComponent>
    </div>
  );
};

export default MFPAssesment;