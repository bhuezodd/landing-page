import Http from './core/Http'

export default {
    async sendEmailAPI(datos) {
        let data = await Http.post(`/contact`, datos)
        if (data.status == 200) return true

        return false
    },
}