import Http from './core/Http'

export default {
    async fetchLocationAPI(type) {
        let data = await Http.get(`/locations?type=${type}`)
        if (data.status == 200) return data
    },
    async fetchLocationQueryAPI(type, query) {
        let data = await Http.get(`/locations?type=${type}&query=${query}`)
        if (data.status == 200) return data
    },
}