import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import TodoPage from '../pages/TodoPage.vue';
import About from '../pages/About.vue';

const routes = [
    {
        path: '/todolist',
        component: Main,
    },
    {
        path: '/todolist/todos',
        component: TodoPage,
    },
    {
        path: '/todolist/about',
        component: About,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
