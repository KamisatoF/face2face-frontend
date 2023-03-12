import api from "./api"

export class ContaBancariaService {
    static findAll(id) {
        return api.get('/contabancaria/' + id);
    }

    static insert(contabancaria) {
        return api.post('/contabancaria', contabancaria).then(this.findAll)
    }

    static delete(id) {
        return api.delete('/contabancaria/' + id).then(this.findAll)
    }

    static update(contabancaria) {
        return api.put('/contabancaria/' + contabancaria.id, contabancaria, contabancaria.id).then(this.findAll)
    }
}