export default [
  {
    path: '/my-instruction',
    component: () =>import('../views/my/instruction.vue'),
    meta: {
      name: '我的指令'
    }
  },
  {
    path: '/instruct-manage',
    component: () =>import('../views/my/instruct-manage.vue'),
    meta: {
      name: '我的指令'
    }
  },
  {
    path:'/my-task',
    component: () =>import('../views/my/task.vue'),
    meta: {
      name: '我的任务'
    }
  },
  {
    path: '/my-task-add',
    component: () => import('../views/my/task-add.vue'),
    meta: {
      name:'新增任务'
    }
  },
  {
    path: '/my-instruction-temp',
    component:() =>import('../views/my/instuct-template.vue'),
    meta: {
      name: '我的指令'
    }
  },
  {
    path: '/task-temp-add',
    component:() =>import('../views/my/task-tem-add.vue'),
    meta: {
      name: '我的任务模板'
    }
  },
  {
    path: '/my-task-temp',
    component:() => import('../views/my/task-template.vue'),
    meta: {
      name: '我的指令'
    }
  }
]
