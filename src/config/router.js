import React from 'react';
import NotFound from '../components/notFound';
const Index = () => {
    return <div>Index</div>
}
const Home = () => {
    return <div>Home</div>
}
export const routerList = [
    {
        path: '/',
        name: 'index',
        component: Index,
        exact: true,
        routes: []
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        exact: true,
        routes: []
    }
]