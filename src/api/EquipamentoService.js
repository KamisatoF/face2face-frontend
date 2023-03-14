import api from "./api"

export class EquipamentoService {
    static findAll(id) {
        return api.get('/equipamentos/' + id);
    }

    static insert(equipamento) {
        return api.post('/equipamentos', equipamento)
    }

    static delete(id) {
        return api.delete('/equipamentos/' + id)
    }

    static update(equipamento) {
        return api.put('/equipamentos/' + equipamento.id, equipamento, equipamento.id)
    }
}