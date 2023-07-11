import AdminLayout from '@/layouts/admin/index.vue'

export default [
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'DashBoard',
        component: () => import('@/views/admin/dashboard/index.vue'),
        meta: {
          title: '仪表盘'
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/admin/user/index.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/views/admin/personal/index.vue'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  }
]