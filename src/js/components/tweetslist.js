import React from 'react';
import jQuery from 'jquery';

import Header from './header';
import TweetStyle from "./tweets";

class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets:[],
      user: {}
    };
  }
  componentDidMount() {
    this.getTweets();
  }

  getTweets(){
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets.json')
      .then( response =>{
          let tweets = response.data;
          let users = response.data;
          let tweetData = tweets.map(function(data){
            return {
             id: data.id,
             body: data.attributes.body,
             created_at: data.attributes.created_at,
             userId: data.relationships.user.data.id,
             email: users.filter(function(user) {
               return user.id === data.relationships.user.data.id
             })
           }
        })
        console.log(tweets)
      this.setState({
        tweets: tweetData,
        user: users
      });
    });
  }
  render () {
    return(
      <div>
        <TweetStyle tweets={this.state.tweets}/>
      </div>
    )
  }
}

export default TweetList;
