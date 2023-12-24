class ProjectService {
    async getAllProjects(_id) {
        const data = {id: _id}
        const response = await fetch('http://localhost:8888/projects/getall', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        });
        return response.json(); 
    }

    async deleteProject(_id) {
      const data = {id: _id}
      const response = await fetch('http://localhost:8888/projects/deleteproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      return response.json(); 
  }

    async saveNewProject(project, id) {
      const data = {project: project, user_id: id}
      const response = await fetch('http://localhost:8888/projects/newproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      return response.json(); 
  }
}

export default new ProjectService()