export default [
  { // 我的指令
    path: '/my-instruction',
    component: () =>import('@/components/layout/content.vue'),
    name: 'MyInstructionTemp',
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        name: 'InstructList',
        meta: {
          name: '我的指令',
          parentPath: '/my-instruction'
        },
        component:() =>import('../views/my/instruct/instruct-list.vue')
      },
      {
        path: 'instruct-manage',
        component: () =>import('../views/my/instruct/instruct-manage.vue'),
        meta: {
          parentName: '我的指令',
          parentPath: '/my-instruction',
          name: '新增指令'
        }
      }
    ]
  },
  {// 我的指令模板
    path: '/my-instruction-temp',
    component: () =>import('@/components/layout/content.vue'),
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        component:() => import('../views/my/instructTemp/instruct-template.vue'),
        meta: {
          name: '我的指令模板',
          parentPath: '/my-instruction-temp'
        }
      },
      {
        path: 'temp-manage',
        component: () => import('../views/my/instructTemp/instruct-temp-edit.vue'),
        meta: {
          name: '指令模板编辑',
          parentName: '我的指令模板',
          parentPath: '/my-instruction-temp'
        }
      },
      {
        path: 'parsing',
        component: () => import('../views/my/instructTemp/instruct-temp-parsing.vue'),
        meta: {
          name: '指令解析',
          parentName: '我的指令模板',
          parentPath: '/my-instruction-temp'
        }
      }
    ]
  },
  { // 我的任务
    path:'/my-task',
    component: () =>import('@/components/layout/content.vue'),
    name: 'MyTask',
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        component:() => import('../views/my/task/task-list.vue'),
        meta: {
          name: '我的任务',
          parentPath: '/my-task'
        }
      },
      {
        path: '/my-task-manage',
        component: () => import('../views/my/task/task-add.vue'),
        meta: {
          parentName: '我的任务',
          parentPath: '/my-task',
          name: '新增任务'
        }
      },
      {
        path: '/task-add-step',
        component: () => import('../views/my/task/task-add-step.vue'),
        meta: {
          parentName: '我的任务',
          parentPath: '/my-task',
          name: '新增任务'
        }
      }
    ]
  },
  {// 我的任务模板
    path:'/my-task-temp',
    component:() =>import('@/components/layout/content.vue'),
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        component:() =>import('../views/my/taskTemp/task-temp.vue'),
        meta: {
          name: '我的任务模板',
          parentPath: '/my-task-temp'
        }
      },
      {
        path: 'temp-manage',
        component:() => import('../views/my/taskTemp/task-temp-add.vue'),
        meta: {
          name: '新增模板',
          parentPath: '/my-task-temp',
          parentName: '我的任务模板'
        }
      }
    ]
  }
]
