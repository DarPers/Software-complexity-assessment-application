import React, { useState, useMemo, useEffect} from 'react';
import Select from '../UI/select/Select';
import Input from '../UI/input/Input';
import assesment_servise from '../../API/assesment_service'
import classes from './TableRow.module.css';

const TableRow = ({setTableData}) => {

    const options = [{value: "ILF"}, {value: "ELF"}, {value: "EI"}, {value: "EO"}, {value: "EQ"}]
    const [option, setOption] = useState("ILF");
    const [data, setData] = useState({description: "", dets : 0, rets: 0, type: option});
    const [assesment, setAssesment] = useState({weight: 0, complexity: "-"});

    const memoAssesment = useMemo(async () => {
      if (data.dets != 0 && data.rets != 0 && data.type !== undefined ){
        const response = await assesment_servise.getMFPs(data.dets, data.rets, data.type);
        setAssesment({weight: response.weight, complexity: response.complexity});
      }
      
      return {weight: 0, complexity: "-"};
    }, [data.rets, data.dets, data.type]);

    useEffect(() => {
        setTableData(assesment);
    }, [assesment]);

    const setFileType = (fileType) => {
        setOption(fileType);
        setData({...data, type : fileType});
    }

  return (
    <tr className={classes.tr}>
      <td>
        <textarea className={classes.inpt_desc}
          type="text"
          placeholder="click to start input"
          value={data.description}
          onChange={(e) => setData({...data, description: e.target.value})}
        />
      </td>
      <td>
        <div className={classes.slct}>
          <Select options={options} defaultValue="Choice" value={option} setValue={setFileType}/>
        </div>
      </td>
      <td>
        <Input className={classes.inpt}
          type="text"
          value={data.dets}
          onChange={(e) => setData({...data, dets: e.target.value})}
        />
      </td>
      <td>
        <Input className={classes.inpt}
          type="text"
          value={data.rets}
          onChange={(e) => setData({...data, rets: e.target.value})}
        />
      </td>
      <td>
        <div>
          {assesment.complexity}
        </div>
      </td>
      <td>
      <div>
          {assesment.weight}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;