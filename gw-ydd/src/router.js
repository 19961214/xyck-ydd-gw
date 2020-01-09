import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/index' },
        {
            path: '/item1',
            name: 'item1',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item/index.vue'),
        },
        {
            path: '/item2',
            name: 'item2',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item2/index.vue'),
        },
        {
            path: '/item3',
            name: 'item3',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item3/index.vue'),
        },
        {
            path: '/item4',
            name: 'item4',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item4/index.vue'),
        },
        {
            path: '/item5',
            name: 'item5',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item5/index.vue'),
        },
        {
            path: '/item6',
            name: 'item6',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/item6/index.vue'),
        },
        {
            path: '/story',
            name: 'story',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/story/index.vue'),
        },
        {
            path: '/team',
            name: 'team',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/team/index.vue'),
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/index/index.vue'),
        },
        {
            path: '/article',
            name: 'article',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/article/index.vue'),
        },
        {
            path: '/product',
            name: 'product',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/product/index.vue'),
        },
        
    ],
});