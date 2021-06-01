import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Quiz from '../views/Quiz';

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
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
