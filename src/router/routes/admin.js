import AdminLayout from '@/layouts/admin/index.vue'

export default [
  {
    path: '/admin',
    component: AdminLayout,
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