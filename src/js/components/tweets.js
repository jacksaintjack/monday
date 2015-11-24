import React from 'react'

import Header from './header';
class TweetStyle extends React.Component {
  render () {
    return(
      <div>
        <Header/>
        <article className ="tweets">
          <span></span><br />
          <img src="http://placekitten.com/g/40/40"/>
          <p>{this.props.tweets.body}</p>
          <span> Twitter Time Stamp </span>
        </article>
      </div>
    )
  }
}

export default TweetStyle;
