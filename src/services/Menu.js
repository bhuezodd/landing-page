import API from './core/API'

export default {
    async fetchMenuAPI() {
        let data = await API.get('/menu')
        if (data.status == 200) return data
    },
    async fetchCategoryAPI() {
        let data = await API.get('/categories')
        if (data.status == 200) return data
    },
}