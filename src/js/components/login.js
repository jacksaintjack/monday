import React from 'react'

class Login extends React.Component {
  render () {
    return(
      <section>
        <h1>Login Area</h1>
        <form>
          <input type='text' name='user' placeholder='Email'/><br />
          <input type='text' name='password' placeholder='Password'/><br />
          <a href="#"> Submit </a> <br />
          <a href="#">Register?</a>
        </form>
      </section>
    )
  }
}

export default Login ;
