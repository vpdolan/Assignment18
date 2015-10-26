import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
// EXAMPLE 1
// //Constructor (blueprint)
// var Animal = function (x, type, legs, tail, sound) {

//   this.name = x;
//   this.type = type;
//   this.legs = legs;
//   this.hasTail = hasTail;

//   this.speak = function () {
//     return this.name + ' says: ' + sound;
//   };
// };

// //Instance
// window.peanut = new Animal('Sparky', 'Dog', 4, true, 'bark');
// window.jaws = new Animal('Bruce', 'Shark', 0., true, 'da na...');
// window.george = new Animal('Tyler', 'Monkey', 2, true, 'ooh ah aha ah');
// //window. to get global variables

// console.log(peanut.type);
//END of EXAMPLE 1

//x and y are objects, even though nothing is going on w/them
//var x = {};
//var y = new Object();
//console.log(x);
//console.log(y);

//examples of arrays as constructors
//var a = [];
//var b = new Array ();


//EXAMPLE 2
//Constructor/Blueprint
// let Animal = (function (params) {

//   params = params || {};

// this.name = param.name;
// this.type = param.type;
// this.legs = param.legs;
// this. hasTail = param.hasTail;

// });

// this.speak = (function () {
//   return this.name + ' says: ' + params.sound;
// });


// //Instance
// window.peanut = new Animal();

// End of EXAMPLE 2

//EXAMPLE 3

//Constructor
let MenuItem = function (params) {
  params = params || {};

  this.id =  params.id;
  this.item = params.item;
  this.price = params.price;
  this.info = params.info;
  this. quantity =  100;


  this.soldOne = function () {
    return this.quantity = this.quantity -1;
  }

  this.eightSix = function () {
    return this.quantity = 0;

  }

};
//working with existing data
let url = 'https://json-data.herokuapp.com/restaurant/menu/1';
let menu = new Array(); // [] can use either bracket type for array 
let menuRequest = $.getJSON(url);

menuRequest.then( function (response) {

  _.each(response.entrees, function (entree) {

    let x = new MenuItem(entree);
    menu.push(x);

  });

  console.log(menu);
  
  });

//Extra in class
//Function to sell an item.  Creating method to look at items and their quantity sold.
window.sellItem = function (id) {


  //take the id param
  //find the spec item in the array
let specItem = _.findWhere(menu, { id: specId });
  console.log(specItem.quantity);

};


  //run that spec item's 'soldOne' method

  specItem.soldOne();
    
  //log out the name + remaining quantity

    return specItem.item + ' has sold one, and there is ' + specItem.quantity + ' left.';

};

sellItem(33);

//tim pushed to github acct 10/20/15












