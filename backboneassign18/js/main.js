import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'JUHEvllrCLEVNH0Y6Lui2IEghbNgLZsEx0OF4wHk';

const API_KEY = '66UDIAncFf7BN2XCR1dTh7P120X1HXPHXrc1oUGe';

$.ajaxSetup({
  headers: {
    'x-Parse-Application-Id': APP_ID,
    'x-Parse=REST-API-Key': API_KEY

  }

});

console.log('Hello, World');



//import ElixirModel from './elixir.model';

import ElixirsCollection from './elixirs.collection';
import ElixirTemplate from './elixir.template';

let elixirs = new ElixirsCollection();

function renderElixirs() {
  //creating an empty dom node

  let $ul = $('<ul></ul>');
//iterate each of the models
  elixirs.each(function(elixir) {
//elixir is an instance of ElixirModel

//grab raw data from person model
    let data = elixir.toJSON();
      console.log('data', data);

 //pass the data to our template
 let templateString = ElixirTemplate(data);
 console.log('templateString', templateString);

 //use templateString to create an li dom node     
    let $li = $( ElixirTemplate(data) );

    $ul.append($li); 
  });
  $('body').html($ul);
  //.append will add to; .html will replace what was there

}

elixirs.fetch().then(renderElixirs);
//must fetch data before can recover all of it, therefore fetch is needed first.


//window.ElixirsCollection = elixirs;
//window.renderElixirs = renderElixirs;
//window allows you to type in console each time checking data
//to bypass this operation and make it automatic, type the following:


//window.PersonModel = PersonModel;