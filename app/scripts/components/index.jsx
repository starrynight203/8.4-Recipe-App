var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

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
        <AddRecipeComponent/>
        <RecipeCardComponent/>
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
  render: function(){
    return(
      <div className="addrecipe">
        <div className="row">
          <ul className="boxes">
            <li className="col-md-4 plus1">
              <i className="fa fa-plus plus-icon"></i>
                <h3>Add Recipe</h3>
            </li>
            <li className="col-md-4 plus2">
              <i className="fa fa-plus plus-icon2"></i>
                <h3>Add Recipe</h3>
            </li>
            <li className="col-md-4 plus3">
              <i className="fa fa-plus plus-icon3"></i>
                <h3>Add Recipe</h3>
            </li>
        </ul>
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
          </div>
        </div>
      </div>
    );
  }
})

module.exports = HomePage;
