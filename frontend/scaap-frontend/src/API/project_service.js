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
}

export default new ProjectService()