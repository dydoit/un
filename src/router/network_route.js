export default [
  {
    path:'/network',
    component:() => import('../views/network/networkList.vue')
  },
  {
    path:'/networkDetail',
    component:() => import('../views/network/networkDetail.vue')
  },
  {
    path:'/networkAdd',
    component:() => import('../views/network/networkAdd.vue')
  }
]


