var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var recipe = require('../recipeitem.js');
var models = require('./../models/models');
var recipeCollection = new models.RecipeCollection(recipe);
var HomePage = require('./../components/index.jsx').HomePage;
var addRecipe = require('./../components/index.jsx').AddRecipeComponent;
var actualRecipe = require('./../components/index.jsx').ActualrecipeComponent;
var recipeCardPage = require('./../components/index.jsx').RecipeCardComponent;

// var MenuItemComponent = require('./../components/menu.jsx');

var appContainer = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'addRecipe': 'addRecipe',
    'actualRecipe': 'actualRecipe',
    'recipeCardPage':'recipeCardPage'
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HomePage),
      appContainer
    );
  },
  addRecipe: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(addRecipe),
      appContainer
    );
  },
////////// Use unmount here make global var that you pass in instead of document.getElementById('app')
  actualRecipe: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(actualRecipe),
      appContainer
    )
  },
  recipeCardPage: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(recipeCardPage),
      appContainer
    )
  }
});

module.exports = Router;
