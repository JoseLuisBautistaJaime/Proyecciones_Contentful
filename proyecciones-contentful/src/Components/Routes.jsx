import { Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Promotions } from '../Pages/Promotion/Promotions';
import { Helps } from '../Pages/Help/Helps';
import React from 'react';

export const Routes = () => (
    <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/promotions" exact={true} component={Promotions}/>
        <Route path="/helps" exact={true} component={Helps}/>
                                 
    </Switch>
);