import React, { useMemo, useState } from 'react';
import classes from "../styles/CreateProject.module.css"
import CocomoTable from '../components/tables/CocomoTable';
import Button from '../components/UI/button/Button';
import Select from '../components/UI/select/Select';
import assesment_servise from '../API/assesment_service'
import {useNavigate, useLocation} from 'react-router-dom'
import Input from '../components/UI/input/Input';
import PageComponent from '../components/pageComponent/pageComponent';

const CocomoAssesment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const done = async () => {
    const description = await assesment_servise.getProjectDescription(definedType);
    console.log(description);
    navigate('/result', {state: {projectType: definedType, weight: projectWeight, assesmentCocomo: assesm, description: description, desc: location.state.desc, name: location.state.name}});
  };

    const projectWeight = location.state.weight;
    const projectTypes = [{value: "organic"}, {value: "semidetached"}, {value: "embedded"}];
    const [kloc, setKLOC] = useState(location.state.KLOC);
    const [definedType, setDefinedType] = useState(location.state.projectType); 
    const [tableData, setTableData] = useState({});
    const [assesm, setAssem] = useState({people: 0, month: 0, people_month: 0});

  const assesment = useMemo(async () => {
    const data = await assesment_servise.getCocomoAssesment(tableData, definedType, kloc);
    setAssem({people: data.people, month: data.time, people_month: data.effort});
  }, [tableData, kloc, definedType])

  return (
    <div>
      <PageComponent 
        previosPagePath="/assesment"
        title="COCOMO II"
        info="Step 3: Select the right cost driver for your project"/>
      <div className={classes.content}>
        <div className={classes.info}>
          <div>
            <div>From step 2 your project is defined like</div>
            <Select options={projectTypes} defaultValue="Choice" value={definedType} setValue={setDefinedType}/>
          </div>
          <div>
            <div>From step 2 is defined, that project has kilo lines of code</div>
            <Input value={kloc} onChange={(event) => setKLOC(event.target.value)}></Input>
          </div>
        </div>
        <div className={classes.table}>
          <CocomoTable data={tableData} setData={setTableData}/>
        </div>
        <div>
          <div>PEOPLE - {assesm.people}</div>
          <div>MONTH - {assesm.month}</div>
          <div>
            <div>PEOPLE/MONTH - {assesm.people_month}</div>
            <Button onClick={done}>FINISH ASSESMENT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocomoAssesment;