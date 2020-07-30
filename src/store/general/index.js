import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {
    scroll: 0,
    height: 1000
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
