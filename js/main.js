import React from 'react';
import { render } from 'react-dom';
import Default from './component/default';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Projects from './component/projects';

render((
    <Router history={browserHistory}>
        <Route path="/">
            <Route path='projects' component={Projects}/>
            <IndexRoute component={Default}/>
        </Route>
    </Router>
), document.getElementById('main'));
