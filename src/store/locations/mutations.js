export default {
    ["isLoading"](state, status) {
        state.laoding = status
    },
    ["SET_LOCATION"](state, data) {
        state.location = data
    },
    ["FETCH_LOCATIONS"](state, data) {
        state.locations = data.data
        state.location = {
            lat: parseFloat(data.data[0].latitude),
            lng: parseFloat(data.data[0].longitude),
        }
    },
    ["FETCH_LOCATIONS_QUERY"](state, data) {
        state.locations = data.data
    }
}