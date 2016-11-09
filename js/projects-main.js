import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Projects from './component/projects';

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

const pid = getQueryVariable('pid');
render((
    <Router history={browserHistory}>
        <Route path="/">
            <Route path='projects' component={Projects}/>
            <IndexRoute component={Projects}/>
        </Route>
    </Router>
), document.getElementById('main'));