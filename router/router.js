import VueRouter from 'vue-router';
import Dashboard from '../src/views/admin/dashboard';
import Login from '../src/views/login';
import Home from '../src/views/user/home';
// import NotFound from '../src/views/404';

const routes = [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                auth: false
            }
        },
        {
            path: '/admin/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                auth: false
            }
        },
    ];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;