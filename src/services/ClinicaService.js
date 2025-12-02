import axios from 'axios';

const API_URL = 'http://localhost:8080/api/clinicas';

class ClinicaService {
    getAllClinicas() {
        return axios.get(API_URL);
    }

    createClinica(clinica) {
        return axios.post(API_URL, clinica);
    }
}

export default new ClinicaService();