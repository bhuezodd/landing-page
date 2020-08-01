import API from './core/API'

export default {
    async sendEmailAPI(datos) {
        let data = await API.post(`/contact`, datos)
        if (data.status == 200) return true

        return false
    },
}