var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var recipe = require('../recipeitem.js');
var models = require('./../models/models');
var recipeCollection = new models.RecipeCollection(recipe);
var HomePage = require('./../components/index.jsx');
console.log(HomePage)
// var MenuItemComponent = require('./../components/menu.jsx');

var appContainer = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'recipe':'recipecardpage'
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HomePage),
      appContainer
    );
  },
// Use unmount here make global var that you pass in instead of document.getElementById('app')
  recipecardpage: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(MenuItemComponent,{collection:recipeCollection}),//<<--this isn't right
      appContainer
    );
  }
});

module.exports = Router;
