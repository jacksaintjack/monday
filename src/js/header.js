import React from 'react'

class Header extends React.Component {
  render () {
    return(
      <header className="mainHeader">
        <h1>Twiddz</h1>
        <img src="http://loremflickr.com/75/75"/>

        <section>
          <a href="#/login">Login</a>
        </section>
      </header>
    )
  }
}

export default Header ;
