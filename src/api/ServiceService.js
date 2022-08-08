import axios from 'axios'

const BASE_URL = 'https://puc-face2face.herokuapp.com/servicos/';
const withBaseUrl = path => '${BASE_URL}${path}';

export class ServiceService {
    static findAll() {
        return axios('https://puc-face2face.herokuapp.com/servicos/findAll/')
    }

    static insert(service) {
        return axios.post('https://puc-face2face.herokuapp.com/servicos/', service).then(this.findAll)
    }

    static delete(id) {
        return axios.delete('https://puc-face2face.herokuapp.com/servicos/' + id).then(this.findAll)
    }

    static update(service) {
        return axios.put('https://puc-face2face.herokuapp.com/servicos/' + service.id, service, service.id).then(this.findAll)
    }
}