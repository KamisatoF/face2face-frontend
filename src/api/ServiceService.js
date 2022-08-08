import axios from 'axios'

const BASE_URL = 'http://puc-face2face.herokuapp.com/servicos/';
const withBaseUrl = path => '${BASE_URL}${path}';

export class ServiceService {
    static findAll() {
        return axios('http://puc-face2face.herokuapp.com/servicos/findAll/')
    }

    static insert(service) {
        return axios.post('http://puc-face2face.herokuapp.com/servicos/', service).then(this.findAll)
    }

    static delete(id) {
        return axios.delete('http://puc-face2face.herokuapp.com/servicos/' + id).then(this.findAll)
    }

    static update(service) {
        return axios.put('http://puc-face2face.herokuapp.com/servicos/' + service.id, service, service.id).then(this.findAll)
    }
}