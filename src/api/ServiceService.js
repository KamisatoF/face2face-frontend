import axios from 'axios'

const BASE_URL = 'https://puc-face2face.herokuapp.com/';
const withBaseUrl = path => '${BASE_URL}${path}';

export class ServiceService {
    static findAll() {
        return axios('https://puc-face2face.herokuapp.com/servicos/findAll/')
    }

    static insert(service) {
        return axios.post('https://puc-face2face.herokuapp.com/', service).then(this.findAll)
    }

    static delete(id) {
        return axios.delete('https://puc-face2face.herokuapp.com/' + id).then(this.findAll)
    }

    static update(service) {
        return axios.put('https://puc-face2face.herokuapp.com/' + service.id, service, service.id).then(this.findAll)
    }
}