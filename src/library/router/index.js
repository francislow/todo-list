import TodoPage from '../../pages/TodoPage.vue';
import AboutPage from '../../pages/AboutPage';
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: TodoPage },
  { path: '/about', component: AboutPage }
];

const router = new VueRouter({mode: 'history', routes});

export default router;