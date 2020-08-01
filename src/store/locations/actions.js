import LocationServices from '@/services/Locations'
export default {
    async fetchLocation({ commit }, type) {
        try {
            let { data } = await LocationServices.fetchLocationAPI(type);
            commit("FETCH_LOCATIONS", data);
            return data.data
        } catch (error) {
            console.log(error);
        }
    },
    async fetchLocationQuery({ commit }, datos) {
        try {
            let { data } = await LocationServices.fetchLocationQueryAPI(datos.type, datos.query);
            commit("FETCH_LOCATIONS_QUERY", data);
            return data
        } catch (error) {
            console.log(error);
        }
    },
    setLocation({ commit }, data) {
        commit("SET_LOCATION", data)
    }
}