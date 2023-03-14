import api from "./api"

export class ServiceService {
    static findAll(id) {
        return api.get('/servicos/' + id);
    }

    static insert(service) {
        return api.post('/servicos', service)
    }

    static delete(id) {
        return api.delete('/servicos/' + id)
    }

    static update(service) {
        return api.put('/servicos/' + service.id, service, service.id)
    }
}