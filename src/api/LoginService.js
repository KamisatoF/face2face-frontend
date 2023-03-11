import api from "./api";

export class LoginService {

    static authenticate(usuario) {
        return api.post('/login', usuario);
    }

    static getUserDetails(token, email) {
        const bToken = 'Bearer ' + token;
        console.log(bToken);
        return api.get('/usuario/' + email,
        {
            headers: {
                'Authorization': `${bToken}` 
            }
        });
    }

}