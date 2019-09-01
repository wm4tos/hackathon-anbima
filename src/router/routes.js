
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'welcome', name: 'welcome', component: () => import('pages/Welcome.vue') },
      { path: 'objective', name: 'objective', component: () => import('pages/Objective.vue') },
      { path: 'infos', name: 'infos', component: () => import('pages/Infos.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
