import axios from 'axios'

export class CadastroService {

    static insert(usuario) {
        //return axios('https://face2face-backend.azurewebsites.net/cadastro', usuario)
        return axios.post('http://localhost:8080/cadastro', usuario)
    }
}