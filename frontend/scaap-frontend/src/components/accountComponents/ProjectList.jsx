import React from "react";
import ProjectComponent from "./projectComponent"

const ProjectList = ({projects}) => {
    if (!projects?.length) {
        return (
            <h2>No projects</h2>
        )
    }

    return (
        <div>
            {projects.map(project =>
                <ProjectComponent 
                    name={project.title} 
                    pers={project.assesment[0].person} 
                    month={project.assesment[0].month} 
                    pers_month={project.assesment[0].person_month} 
                    FPs={project.assesment[0].FPs} 
                    key={project.id}>
                </ProjectComponent>
            )}
        </div>
    );
};

export default ProjectList;