import React from "react";
import ProjectComponent from "./projectComponent"
import project_service from '../../API/project_service'

const ProjectList = ({projects, remove}) => {
    if (!projects?.length) {
        return (
            <h2>No projects</h2>
        )
    }

    return (
        <div>
            {projects.map(project =>
                <ProjectComponent 
                    name={project.title.replace(/\s+$/, '')}
                    description={project.description}
                    language={project.language.replace(/\s+$/, '')}
                    pers={project.assesment[0].person} 
                    month={project.assesment[0].month} 
                    pers_month={project.assesment[0].person_month} 
                    FPs={project.assesment[0].FPs} 
                    projectType={project.assesment[0].project_type.replace(/\s+$/, '')} 
                    key={project.id}
                    id={project.id}
                    remove={remove}>
                </ProjectComponent>
            )}
        </div>
    );
};

export default ProjectList;