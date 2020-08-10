import axios from 'axios';

export default axios.create({
    baseURL: 'http://dmmw-api.australiaeast.cloudapp.azure.com:8080'
});