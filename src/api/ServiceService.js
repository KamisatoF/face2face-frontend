import api from "./api"

export class ServiceService {
    static findAll(id) {
        return api.get('/servicos/' + id);
    }

    static insert(service) {
        return api.post('/servicos', service).then(this.findAll)
    }

    static delete(id) {
        return api.delete('/servicos/' + id).then(this.findAll)
    }

    static update(service) {
        return api.put('/servicos/' + service.id, service, service.id).then(this.findAll)
    }
}