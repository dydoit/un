export default [
  {
    path:'/network',
    component:() =>import('@/components/layout/content.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/network/networkList.vue'),
        meta: {
          name:'网元管理',
          parentPath: '/network'
        }
      },
      {
        path:'networkDetail',
        component:() => import('@/views/network/networkDetail.vue'),
        meta: {
          meta: '网元详情',
          parentPath: '/network',
          parentName: '网元管理'
        }
      },
      {
        path: 'networkAdd',
        component: () => import('@/views/network/networkAdd.vue'),
        meta: {
          meta: '网元新增',
          parentPath: '/network',
          parentName: '网元管理'
        }
      }
    ]
  }
]


