import axios from 'axios';

export class LoginService {

    static authenticate(usuario) {
        //return axios('https://face2face-backend.azurewebsites.net/login', usuario)
        return axios.post('http://localhost:8080/login', usuario);
    }

    static getUserDetails(token, email) {
        const bToken = 'Bearer ' + token;
        console.log(bToken);
        return axios.get('http://localhost:8080/usuario/' + email,
        {
            headers: {
                'Authorization': `${bToken}` 
            }
        });
    }

}