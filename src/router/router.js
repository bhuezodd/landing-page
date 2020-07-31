const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Home",
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '*',
    component: () => import('../views/error/404.vue')
  }
]


export default routes