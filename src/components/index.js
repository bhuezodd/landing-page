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
      'navbar', 'badge', 'burger', 'svg-top', 'img-one', 'line-twist', 'card-location', 'google-components', 'GoogleMapLine', 'GoogleMapLoader', 'GoogleMapMarker'
    ]
  },
  {
    url: 'icons',
    childrens: [
      'arrow',
      'takeaway',
      'devilery',
      'search'
    ]
  },
  {
    url: 'landings',
    childrens: [
      'v-header', 'v-about', 'v-restaurant',
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
