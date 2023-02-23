import axios from 'axios'

export class LoginService {

    static authenticate(usuario) {
        //return axios('https://face2face-backend.azurewebsites.net/servicos/', usuario)
        return axios.post('http://localhost:8080/login/authenticate', usuario)
    }
}