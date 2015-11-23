import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './header';
import Login from './login';


class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route name="login" path="login" component={Login}/>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
