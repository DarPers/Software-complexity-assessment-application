import React, { useState, useMemo } from 'react';
import TableRow from './TableRow';
import classes from './TableRow.module.css';
import Button from '../UI/button/Button';
import { useNavigate, useLocation } from "react-router-dom";
import assesment_service from '../../API/assesment_service';

const TableComponent = () => {
    const location = useLocation();

    const [tableData, setTableData] = useState(location?.state?.tableData != undefined ? location?.state?.tableData : [{}]);  
    const [rows, setRows] = useState(location?.state?.rows != undefined ? location?.state?.rows : [{description: "", dets : 0, rets: 0, type: "ILF"}]);
    const addRow = () => {
      setTableData([...tableData, '']);
      setRows([...rows, {description: "", dets : 0, rets: 0, type: "ILF"}]);
    };
  
    const handleRowChange = (index, value, data) => {
      const updatedData = [...tableData];
      updatedData[index] = value;
      setTableData(updatedData);
      const newRow = [...rows];
      newRow[index] = data;
      setRows(newRow);
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
      const data = await assesment_service.defineProjectType(assesment, location.state.language);
      setProjectCharacts({projectType: data.projectType, KLOC:data.KLOC});
    }, [tableData])
  
    const navigate = useNavigate();

    const getCocomoAssesment = () => {
      console.log(projectCharacts);
      navigate('/assesment2', {state: {KLOC: projectCharacts.KLOC, projectType: projectCharacts.projectType, weight: assesment, name:location.state.name, desc:location.state.desc, language: location.state.language, tableData:tableData, rows:rows}});
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
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  data={row}
                  setTableData={(value, data) => handleRowChange(index, value, data)}
                  rowData={row}/>
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