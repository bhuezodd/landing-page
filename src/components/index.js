import Vue from 'vue'

// Register component
function registerComponent(name) {
    Vue.component(name, () => import(`./${name}.vue`))
}
// Name components
const nameComponents = [
    'navbar'
];
// Register
nameComponents.forEach(value => {
    registerComponent(value)
})
