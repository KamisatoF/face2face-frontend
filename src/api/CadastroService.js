import api from "./api";

export class CadastroService {

    static insert(usuario) {
        return api.post('/cadastro', usuario);  
    }
}