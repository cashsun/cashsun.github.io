import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Projects from './component/projects';

render((
    <Router history={browserHistory}>
        <Route path="/">
            <Route path='projects' component={Projects}/>
            <IndexRoute component={Projects}/>
        </Route>
    </Router>
), document.getElementById('main'));