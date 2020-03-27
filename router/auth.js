import bearer from '@websanova/vue-auth/drivers/auth/bearer';
import axiosWebsanova from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';
// import P_404 from "../src/views/404";

// var TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND';
// var TOKEN_INVALID   = 'TOKEN_INVALID';
// var TOKEN_EXPIRED   = 'TOKEN_EXPIRED';
// var TOKEN_BLACKLISTED = 'TOKEN_BLACKLISTED';
// var TOKEN_NOT_PROVIDED = 'TOKEN_NOT_PROVIDED';

// var ERROR_CODE      = 401;

const config = {
    auth: bearer,
    http: axiosWebsanova,
    router: router,
    tokenDefaultName: 'token',
    tokenStore: ['cookie'],
    notFoundRedirect: {
        path: '/not-found',
    },

    /**
     * Hander request and response. return client
     * Hander token.. expired, invalid, token not found...
     */
    // auth: {
    //     request: function (req, token) {
    //         this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    //     },
    //     response: function (res) {
    //         let response = res.data;
    //         if (response.message !== 'success'
    //             && response.error_code == ERROR_CODE 
    //             && response.api_name != 'logoutCustomer') {
    //                 alert('TOKEN_EXPIRED')
    //         }
    //         return (res.data.data || {}).token;
    //     }
    // },
    registerData: {
        url: '/api/auth/register',
        method: 'POST',
        redirect: null,
    },
    loginData: {
        url: 'http://laravel.local/api/user/login',
        method: 'POST',
        redirect: '/admin/dashboard',
        fetchUser: true,
        meta: {
            auth: false
        }
    },
    logoutData: {
        url: '/api/auth/logout',
        method: 'POST',
        redirect: '/login',
        makeRequest: true
    },
    refreshData: {
        url: 'http://laravel.local/api/user/detail',
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        enabled: false,
    },
    fetchData: {
        url: 'http://laravel.local/api/user/detail',
        method: 'POST',
        enabled: true
    },

    tokenExpired:() => {
        return false
    }
};

export default config;