import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {
    isLoading: false,
    location: { lat: 13.710566, lng: -89.231635 },
    locations: [],
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
