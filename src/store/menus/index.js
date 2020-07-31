import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {
    loading: false,
    menu: [],
    categories: []
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
