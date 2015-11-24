import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './components/header';
import Login from './components/login';
import TweetList from './components/tweetslist'


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
    <Route path="/" component={TweetList}>
      <Route path ="tweets" component={TweetList} />
      <Route name="login" path="login" component={Login}/>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
