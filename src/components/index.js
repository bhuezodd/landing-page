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
      'sidebar',
      'badge',
      'card-location',
      'google-components',
      'GoogleMapLine',
      'GoogleMapLoader',
      'GoogleMapMarker',
      'card-app',
      'v-icon',
      'card-menu',
      'loading',
      'v-menu',
      'filters'
    ]
  },
  {
    url: 'home',
    childrens: [
      'v-header',
      'v-about',
      'v-restaurant',
      'v-testimonials',
      'v-contact',
      'v-info',
      'v-footer',
    ]
  },
  {
    url: 'menu',
    childrens: [
      'm-header',
      'm-menu',
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
