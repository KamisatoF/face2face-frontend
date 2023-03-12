import axios from 'axios';

export default axios.create({
    baseURL: `https://face2face-backend.azurewebsites.net`,
});