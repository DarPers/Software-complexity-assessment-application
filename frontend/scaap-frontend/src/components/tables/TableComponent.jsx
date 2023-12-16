import React, { useState, useMemo } from 'react';
import TableRow from './TableRow';
import classes from './TableRow.module.css';
import Button from '../UI/button/Button';
import { useNavigate } from "react-router-dom";
import assesment_service from '../../API/assesment_service';

const TableComponent = ({language}) => {
    const [tableData, setTableData] = useState([{}]);  
    const addRow = () => {
      setTableData([...tableData, '']);
    };
  
    const handleRowChange = (index, value) => {
      const updatedData = [...tableData];
      updatedData[index] = value;
      setTableData(updatedData);
      console.log(tableData);
    };

    const assesment = useMemo(() => {
      let commonWeight = 0;
      tableData.map((data) => {
        commonWeight += data.weight;
      });
      return commonWeight;
    }, [tableData]);

    const [projectCharacts, setProjectCharacts] = useState({projectType: "organic", KLOC: 0});

    const projectAssesment = useMemo(async () => {
      const data = await assesment_service.defineProjectType(assesment, language);
      setProjectCharacts({projectType: data.projectType, KLOC:data.KLOC});
      console.log(projectCharacts);
    }, [tableData])
  
    const navigate = useNavigate();

    const getCocomoAssesment = () => {
      navigate('/assesment2', {state: {KLOC: projectCharacts.KLOC, projectType: projectCharacts.projectType}});
    }

    return (
      <div className={classes.table}>
        <table>
          <tbody>
            <tr className={classes.tr}>
              <td>Description</td>
              <td>Filetype</td>
              <td>DETs</td>
              <td>RETs</td>
              <td>Complexity</td>
              <td>Weight</td>
            </tr>
              {tableData.map((row, index) => (
                <TableRow
                  key={index}
                  data={row}
                  setTableData={(value) => handleRowChange(index, value)}
                />
              ))}
          </tbody>
        </table>
        <div className={classes.finish_block}>
          <div className={classes.results}>RESULT - {assesment} FUNCTIONAL POINTS</div>
          <div className={classes.btns}>
            <Button className={classes.btn_add} onClick={addRow}>ADD ROW</Button>
            <Button className={classes.btn_next} onClick={getCocomoAssesment}>NEXT STEP</Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TableComponent;