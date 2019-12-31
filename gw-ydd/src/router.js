import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/cp' },
        {
            path: '/sy',
            name: 'aboutUsTwo',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/sy/index.vue'),
        },
        {
            path: '/gy',
            name: 'gy',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/gy/index.vue'),
        },
        {
            path: '/cp',
            name: 'cp',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/cp/index.vue'),
        },
        
    ],
});