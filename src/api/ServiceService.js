import axios from 'axios'

const BASE_URL = 'https://face2face-backend.azurewebsites.net/servicos/';
const withBaseUrl = path => '${BASE_URL}${path}';

export class ServiceService {
    static findAll() {
        return axios('https://face2face-backend.azurewebsites.net/servicos/findAll/')
    }

    static insert(service) {
        return axios.post('https://face2face-backend.azurewebsites.net/servicos/', service).then(this.findAll)
    }

    static delete(id) {
        return axios.delete('https://face2face-backend.azurewebsites.net/servicos/' + id).then(this.findAll)
    }

    static update(service) {
        return axios.put('https://face2face-backend.azurewebsites.net/servicos/' + service.id, service, service.id).then(this.findAll)
    }
}