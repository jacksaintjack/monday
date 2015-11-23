import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './components/header';
import Login from './components/login';
import Tweets from './components/tweets'


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
    <Route path="/" component={Tweets}>
      <Route path ="tweets" component={Tweets} />
      <Route name="login" path="login" component={Login}/>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
