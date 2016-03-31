var $ = require('jquery');
var Parse = require('parse');
var Backbone = require('backbone');

var Router = require('./routers/routes');
var router = new Router();
  $(function(){
    Backbone.history.start();
  });


$(function(){
  Parse.initialize("tiygvl");
  Parse.serverURL = 'http://tiny-batch-maker.herokuapp.com/';

  $('#signup').on('submit', function(event){
      event.preventDefault();

      var user = new Parse.User();
      user.set({'username': $('#email').val(), 'password': $('#password').val()});

      user.signUp(null, {
        'success': function(results){
          console.log("results: ", results);
        },
        'error': function(user, error){
          console.log(user, error);
        }
      });
    });

    $('#login').on('submit', function(event){
      event.preventDefault();

      Parse.User
        .logIn($('#email-login').val(), $('#password-login').val(), {
          success: function(user) {
            console.log('you have logged in');
            Backbone.history.navigate('addRecipe',{trigger: true});
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
          }
        });
    });

    console.log(Parse.User.current());

    
    });
