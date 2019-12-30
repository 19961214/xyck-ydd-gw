import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/aboutUsTwo' },
        {
            path: '/aboutUsTwo',
            name: 'aboutUsTwo',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/AboutUsTwo/index.vue'),
        },
        
    ],
});