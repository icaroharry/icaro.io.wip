
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'activity', component: () => import('pages/index') },
      { path: 'projects', component: () => import('pages/index') },
      { path: 'blog', component: () => import('pages/index') },
      { path: 'contact', component: () => import('pages/index') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
