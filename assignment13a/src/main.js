(function () {

  var url = 'http://json-data.herokuapp.com/forms';

  //go fetch data and do somethingk with it

  var promise = $.getJSON(url);
    promise.then( function (response) {
        console.log(response);
//data is now on page

//create template for elements on url

var textInput = function (object) {
  var template = '
    <div "class=text-input">
    <input value="" type=$ obj.type }" placeholder="${obj.label }"  id="${ obj.id }">
    <i class="fa-user ${obj.icon "}"></i>
    <id="${obj.options[0]}"
        </div>
    ';

    '<div "class=email-input">
    <input value="" type=$ obj.type }" placeholder="${obj.label }" id="${ obj.id }">
    <i class="fa-envelope ${obj.icon "}"</i>
    <id="${obj.options[0]}"
    </div>';

    '<div "class=text">
    <input value="" type=$ obj.type }" placeholder="${obj.label }"  id="${ obj.id }">
    <i class="fa-globe" ${obj.icon "}"</i>
    id="${obj.options[0]}"
    









    return template;
  }
   // 
//our do something function
   var doSomething = function (each item in the array) {

  ._each)(array, function (item) {
    //each is iterating over every single item in array. in order to get into an array, you must iterate
    var htmlBlock;

    //if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {

      htmlBlock = textInput(item); }

      $('form').append(htmlBlock); 

       console.log(item);

  }

});




}());
