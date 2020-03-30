import VueRouter from 'vue-router';
import Dashboard from '../views/admin/dashboard';
import Login from '../views/login';
import AdminComponent from '../views/admin/components/AdminComponent';
// import Home from '../views/user/home';
// import NotFound from '../src/views/404';

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: AdminComponent,
            children: [
                {
                    path: '/',
                    component: Dashboard,
                    name: 'dashboard',
                    meta: {
                        auth: false
                    }
                },
                {
                    path: '/admin/dashboard',
                    component: Dashboard,
                    name: 'dashboard',
                    meta: {
                        auth: false
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
            ]
        }
    ]
})