import LocationServices from '@/services/Locations'
export default {
    async fetchLocation({ commit }, type) {
        try {
            commit("isLoading", true);
            let { data } = await LocationServices.fetchLocationAPI(type);
            commit("FETCH_LOCATIONS", data);
            return data.data
        } catch (error) {
            console.log(error);
        }
        finally {

            commit("isLoading", false);
        }
    },
    async fetchLocationQuery({ commit }, datos) {
        try {
            commit("isLoading", true);
            let { data } = await LocationServices.fetchLocationQueryAPI(datos.type, datos.query);
            commit("FETCH_LOCATIONS_QUERY", data);
            return data
        } catch (error) {
            console.log(error);
        }
        finally {

            commit("isLoading", false);
        }
    },
    setLocation({ commit }, data) {
        commit("SET_LOCATION", data)
    }
}