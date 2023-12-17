import { instance } from "./api.config.js";

class AssesmentService {
    async getMFPs(_dets, _rets, _fileType, token) {
        const data = {dets: _dets, rets: _rets, fileType: _fileType}
        const response = await fetch('http://localhost:8888/assesment/countpoints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        });
        return response.json();
    }

    async defineProjectType(weight, language) {
      const data = {weight: weight, language: language}
      const response = await fetch('http://localhost:8888/assesment/defineProjectType', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      return response.json();
  }

    async getCocomoAssesment(koeffs, projectType, KLOC) {
      const data = {koeffs: koeffs, projectType: projectType, KLOC: KLOC}
      const response = await fetch('http://localhost:8888/assesment/getCocomoAssesment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } 

    async getProjectDescription(projectType) {
      const data = {projectType: projectType}
      const response = await fetch('http://localhost:8888/assesment/getProjectDescroption', {
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

export default new AssesmentService()