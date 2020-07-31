import Vue from 'vue'

// Register component
function registerComponent(name, url) {
  Vue.component(name, () => import(`./${url}/${name}.vue`))
}
// Name components
const nameComponents = [
  {
    url: 'components',
    childrens: [
      'navbar',
      'badge',
      'card-location',
      'google-components',
      'GoogleMapLine',
      'GoogleMapLoader',
      'GoogleMapMarker',
      'card-app',
      'v-icon'
    ]
  },
  {
    url: 'landings',
    childrens: [
      'v-header',
      'v-about',
      'v-restaurant',
      'v-testimonials',
      'v-contact',
      'v-info',
      'v-footer',
    ]
  }
]
// Register
nameComponents.forEach(value => {
  const { url, childrens } = value;
  childrens.forEach((name) => {
    registerComponent(name, url)
  })
})
