import api from "./api";

export class CadastroService {

    static insert(usuario) {
        return api.post('/cadastro', usuario);  
    }

    static update(usuario) {
        return api.put('/cadastro/' + usuario.id, usuario);  
    }
}