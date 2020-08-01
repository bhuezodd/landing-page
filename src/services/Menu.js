import API from './core/API'

export default {
    async fetchMenuAPI() {
        let data = await API.get('/menu')
        if (data.status == 200) return data
    },
    async fetchMenuForCategoryAPI(cate) {
        let data = await API.get(`/menu?category=${cate}`)
        if (data.status == 200) return data
    },
    async fetchMenuForQueryAPI(cate) {
        let data = await API.get(`/menu?query=${cate}`)
        if (data.status == 200) return data
    },
    async paginationMenuAPI(num) {
        let data = await API.get(`/menu?page=${num}`)
        if (data.status == 200) return data
    },
    async fetchCategoryAPI() {
        let data = await API.get('/categories')
        if (data.status == 200) return data
    },
}