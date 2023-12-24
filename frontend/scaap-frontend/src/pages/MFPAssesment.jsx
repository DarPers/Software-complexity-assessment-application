import React from 'react';
import TableComponent from '../components/tables/TableComponent';
import PageComponent from '../components/pageComponent/pageComponent';
import { useLocation } from 'react-router-dom'

const MFPAssesment = () => {
  const location = useLocation();
  return (
    <div>
      <PageComponent 
        previosPagePath="/createproject" 
        title="FUNCTIONAL POINT METHOD" 
        info="Step 2: Fill in the table based on the requirements for your project,
              click on the tooltip to correctly define the parameters"
        state = {location.state}/>
        <TableComponent></TableComponent>
    </div>
  );
};

export default MFPAssesment;