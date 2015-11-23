import React from 'react';
import {render} from 'react-dom';
// import {Router, Route} from 'react-router'

import Header from './header';


class App extends React.Component {
  render () {
    return(
      <div>
        <Header/>
        <main></main>
      </div>
    )
  }
}

render(App, document.getElementById('apps'));
