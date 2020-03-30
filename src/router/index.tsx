/**
 * created by chenbiao on 2020/03/29
 */
import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
//组件
import ErrorBoundary from '../components/errorBoundary';
//配置
import { routerList } from '../config/router';
import { notFound } from '../config/config';

interface itemProps {
    path: string;
    name: string;
    exact?: boolean;
    routes?: Array<itemProps>;
    component?: React.FunctionComponent;
}
type routerList = itemProps[];
//根据路由文件配置路由
const routeComponent = (menuData: itemProps[]) => {
    let routes = menuData.map(item => {
        if(item.routes && item.routes.length){
            return (
                <Route
                key={item.path} 
                path={item.path}
                exact={item.exact}
                component={item.component}>
                    { routeComponent(item.routes) }
                </Route>
            )
        }
        return (
            <Route
            key={item.path} 
            path={item.path}
            exact={item.exact}
            component={item.component}/>
        )
    })
    return routes;
}
//渲染整个路由文件
const App = () => {
    return(
        <div>
            <HashRouter>
                <ErrorBoundary>
                    <Switch>
                        {
                            Array.isArray(routerList) && routeComponent(routerList)
                        }
                        <Redirect to={notFound}/>
                    </Switch>
                </ErrorBoundary>
            </HashRouter>
        </div>
    )
}

export default App;