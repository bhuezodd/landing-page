import Http from './core/Http'

export default {
    async fetchMenuAPI() {
        let data = await Http.get('/menu')
        if (data.status == 200) return data
    },
    async fetchMenuForCategoryAPI(cate) {
        let data = await Http.get(`/menu?category=${cate}`)
        if (data.status == 200) return data
    },
    async fetchMenuForQueryAPI(cate) {
        let data = await Http.get(`/menu?query=${cate}`)
        if (data.status == 200) return data
    },
    async paginationMenuAPI(num) {
        let data = await Http.get(`/menu?page=${num}`)
        if (data.status == 200) return data
    },
    async fetchCategoryAPI() {
        let data = await Http.get('/categories')
        if (data.status == 200) return data
    },
}