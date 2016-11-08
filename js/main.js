import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Default from './component/default';
import Projects from './component/projects';

render((
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Default}/>
            <Route path="projects" component={Projects}/>
        </Route>
    </Router>
), document.getElementById('main'));