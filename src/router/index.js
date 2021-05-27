import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import LibrarySelect from '../views/LibrarySelect';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/quiz/library_select',
    name: 'LibrarySelect',
    component: LibrarySelect
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
