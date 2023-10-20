import { createRouter, createWebHashHistory } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import RegistrationView from '../views/RegistrationView.vue';

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
