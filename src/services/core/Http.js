import axios from 'axios'
// Set base url
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
    get(url, params) {
        return axios.get(url, params)
    },
    post(url, params) {
        return axios.post(url, params)
    }
}