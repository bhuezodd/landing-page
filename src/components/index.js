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
      'v-navbar',
      'v-sidebar',
      'v-badge',
      'v-card-location',
      'v-google-components',
      'v-google-map-loader',
      'v-google-map-marker',
      'v-card-app',
      'v-icon',
      'v-card-menu',
      'v-loading',
      'v-icon-menu',
      'v-filters'
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
      'v-menu-header',
      'v-menu',
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
