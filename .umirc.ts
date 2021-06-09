import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', redirect: '/index2' },
        { path: '/index2', component: '@/pages/index2' },
        { path: '/index3', component: '@/pages/index3' },
      ],
    },
  ],
  fastRefresh: {},
});
