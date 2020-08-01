import API from './core/API'

export default {
    async fetchLocationAPI(type) {
        let data = await API.get(`/locations?type=${type}`)
        if (data.status == 200) return data
    },
    async fetchLocationQueryAPI(type, query) {
        let data = await API.get(`/locations?type=${type}&query=${query}`)
        if (data.status == 200) return data
    },
}