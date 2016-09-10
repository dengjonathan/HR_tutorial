names2 = ['kendra', 'kim', 'kampbell'];

// use this as your callback function in map
var capitalize = function(word) {
  return word[0].toUpperCase() + word.slice(1);
};

// we need each implemented for map to work
var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

/*
QUESTION: create a map function that takes two arguments, an array, and a callback function,
and returns a new array with all the items in the array transformed using the callback function
 */

var map = function(array, callback) {
  var changes = [];

  // call to each function with 2 args: array and callback function
  each(array, function(each) {
    changes.push(callback(each));
  });
  return changes;
};

map(names, capitalize); // ['Kendra', 'Kim', 'Kampbell']
