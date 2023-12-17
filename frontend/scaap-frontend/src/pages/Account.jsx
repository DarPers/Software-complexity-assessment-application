import React, { useState, useEffect, useMemo } from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import Header from '../components/UI/header/Header';
import Button from '../components/UI/button/Button';
import ProjectList from '../components/accountComponents/ProjectList';
import Input from '../components/UI/input/Input';
import Select from '../components/UI/select/Select'
import classes from "../styles/Account.module.css"
import { useFetching } from '../hooks/useFetching';
import project_service from '../API/project_service';

const Account = () => {  
    const location = useLocation();
    const navigate = useNavigate();

    const createProject = () => {
        navigate("/createProject");
    }

    const [query, setQuery] = useState();
    const [projects, setProjects] = useState([]);
    const [sort, setSort] = useState("title");

    const [fetchingProjects, error, isProjectLoading] = useFetching(async () => {
        const projects = await project_service.getAllProjects(localStorage.getItem("id"));
        setProjects(projects);
    });

    const searchedPosts = useMemo(() => {
        if (sort == "title") {
            projects.sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        else {
            projects.sort((a, b) => (a.assesment[0][sort])- (b.assesment[0][sort]));
        }

        if (query){
            return projects.filter(project => project.title.toLowerCase().includes(query.toLowerCase()));
        }
        return projects;
    }, [query, projects, sort]);


    useEffect(() => {
        fetchingProjects();
    }, [])

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.title}>Your projects</div>
                <div className={classes.sort_block}>
                    <Input className={classes.inpt} placeholder="Type project name..." value={query} onChange={(e) => setQuery(e.target.value)}></Input>
                    <div className={classes.slct_sort}>
                        <Select
                            value = {sort}
                            setValue={setSort}
                            defaultValue="Sort"
                            options={[
                                {value: 'title'},
                                {value: 'FPs'},
                                {value: 'month'},
                                {value: 'person'},
                                {value: 'person_month'}]}/>
                    </div>
                    <Button className={classes.btn_new} onClick={createProject}>New project</Button>
                </div>
                <div className={classes.projects}>
                    {isProjectLoading
                        ? <h1>Loading...</h1>
                        : <ProjectList projects={searchedPosts}></ProjectList>
                    }
                </div>
            </div>
        </div>
    );
};
  
    export default Account;