export default {
    ["setScrool"](state, data) {
        state.scroll = data.num
        state.height = data.height
    }
}