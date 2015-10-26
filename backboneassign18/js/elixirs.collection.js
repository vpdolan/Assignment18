import Backbone from 'backbone';
import ElixirModel from './elixir.model';


let ElixirsCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/BackboneAssign18',

  model: ElixirModel,

  parse: function(data) {
      return data.results; 
      //this tells backbone to use all the data as results

  }

});

export default ElixirsCollection;
