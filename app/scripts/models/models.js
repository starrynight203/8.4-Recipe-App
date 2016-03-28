var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({

});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: "",
  parse: function(data){
    return data;
  }
});

module.exports = {
  "Recipe": Recipe,
  "RecipeCollection": RecipeCollection
};
