const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'contadores', component: () => import('pages/ContadoresView.vue') },
      { path: 'eventos', component: () => import('pages/EventosView.vue') },
      { path: 'operaciones', component: () => import('pages/OperacionesView.vue') },
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
