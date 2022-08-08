import axios from 'axios'

const BASE_URL = 'http://localhost:8080/servicos/';
const withBaseUrl = path => '${BASE_URL}${path}';

export class ServiceService {
    static findAll() {
        return axios('http://localhost:8080/servicos/findAll/')
    }

    static insert(service) {
        return axios.post('http://localhost:8080/servicos/', service).then(this.findAll)
    }

    static delete(id) {
        return axios.delete('http://localhost:8080/servicos/' + id).then(this.findAll)
    }

    static update(service) {
        return axios.put('http://localhost:8080/servicos/' + service.id, service, service.id).then(this.findAll)
    }
}