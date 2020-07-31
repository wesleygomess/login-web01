import React from 'react';
import {Redirect, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';

 export default props => 
    <Switch>
        <Route path="/" component={Home} />
        <Redirect from='*' to='/' />
    </Switch>
        


