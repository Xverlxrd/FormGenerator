import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue';
import FeedbackForm from "../views/FeedbackForm.vue";

const routes = [
    { path: '/register', component: RegisterForm },
    { path: '/feedback', component: FeedbackForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;