import api from "./api";

export class LoginService {

    static authenticate(usuario) {
        return api.post('/login', usuario);
    }
    
    static getUserDetail(email) {
        return api.get('/usuario/' + email);
    }

}