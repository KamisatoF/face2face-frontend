import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:8080`,
    //baseURL: `https://face2face-backend.azurewebsites.net`,
});