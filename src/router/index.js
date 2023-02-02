import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import TodoPage from '../pages/TodoPage.vue';
import About from '../pages/About.vue';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/todos',
        component: TodoPage,
    },
    {
        path: '/about',
        component: About,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
