import $ from 'jquery';

class User {
  constructor() {
  this.access_token = null;
  this.refresh_token = null;
  this.token_expires = null;
  this.token_created = null;
  }

  isLoggedIn() {
    return this.access_token !==null;
  }
  // Setting Registration Data
  // register(data, done) {
  //   let url = 'https://twitterapii.herokuapp.com/users';
  //   let options = {
  //     url: url,
  //     method: 'POST',
  //     data: {
  //       user: data
  //     }
  //   };
  //
  //   $.ajax(options).then(response => {
  //     done(null,reponse);
  //   }).fail(error => {
  //     done(error);
  //   });
  // }

  login(data, done) {
    let url = 'https://twitterapii.herokuapp.com/oauth/token';
    
  }
}
