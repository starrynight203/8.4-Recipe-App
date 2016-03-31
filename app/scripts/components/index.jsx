var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');

var HomePage = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    Backbone.history.navigate('recipecard', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <SignUpComponent/>
        <LoginComponent onClick={this.handleClick}/>
      </div>
    );
  }
})

var SignUpComponent = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <form id="signup" className="form-signin">
          <h2 className="form-signin-heading">Sign Up</h2>
          <input type="text" id="email" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
          <input type="password" id="password" className="form-control" name="password" placeholder="Password" required=""/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up!</button>
        </form>
      </div>
    );
  }
})

var LoginComponent = React.createClass({
  render: function(){
    return(
      <div className="wrapper">
        <form id="login" className="form-signin">
          <h2 className="form-signin-heading">Already a Member? Login</h2>
          <input type="text" id="email-login" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
          <input type="password" id="password-login" className="form-control" name="password" placeholder="Password" required=""/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }
})

var AddRecipeComponent = React.createClass({
  handleClick: function(){
    Backbone.history.navigate('actualRecipe', {trigger: true});
  },
  render: function(){
    return(
      <div className="addrecipe">
        <div className="row">
          <ul className="boxes" onClick={this.handleClick}>
            <li className="col-md-12 plus1">
              <i className="fa fa-plus plus-icon"></i>
                <h3>Add Recipe</h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
})

var ActualrecipeComponent = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var RecipeInfo = Parse.Object.extend('recipes');
    var info = new RecipeInfo();
    var name = $('#name').val();
    var recipeName = $('#recipename').val();
    var notes = $('#notes').val();
    info.set({
      'name': name,
      'recipeName': recipeName
    });

    info.save(null, {
      success: function(info){
        console.log(info.id);
      },
      error: function(error) {
        console.log(error);
      }
    })
    Backbone.history.navigate('recipeCardPage', {trigger: true});

  },
  render: function(){
    return(
      <div className="recipeaddform">
        <div className="row photorow">
          <div className="col-md-4 addphoto">
            <i className="fa fa-plus plus-icon-photo"></i>
              <h3>Add Photo</h3>
          </div>
          <div className="col-md-8">
            <input type="name" id="recipename" className="form-control recipename"  placeholder="Recipe Name"/>
            <input type="name" id="name" className="form-control" placeholder="By"/>
          </div>
        </div>
        <div className="row textrow">
          <div className="col-md-12">
            <textarea id="notes" className="form-control" rows="2" placeholder="Notes..."></textarea>
            <button onClick={this.handleSubmit} className="btn btn-default adjustrecipe" type="submit">Add Recipe</button>
          </div>
        </div>
      </div>
    );
  }
})


var RecipeCardComponent = React.createClass({
  render: function(){
    return(
      <div className="servingsarea">
        <div className="row">
          <div className="col-md-12">
            <h3 className="makes">Makes</h3>
              <input type="text" className="form-control makesbox" placeholder="" />
                <h3 className="servings">servings</h3>
                  <label className="us"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>US</label>
                    <label className="metric"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>Metric</label>
                      <button className="btn btn-default adjustrecipe" type="submit">Adjust Recipe</button>
                      <h3>Notes</h3>
                      <textarea className="form-control" rows="2"></textarea>

          </div>
        </div>
      </div>
    );
  }
})

// $('.boxes').on('click', function(){
//   console.log('you clicked a button');
//   Backbone.history.navigate('recipecardpage', {trigger: true});
// })

module.exports = {
  'HomePage': HomePage,
  'AddRecipeComponent': AddRecipeComponent,
  'ActualrecipeComponent': ActualrecipeComponent,
  'RecipeCardComponent': RecipeCardComponent
}
