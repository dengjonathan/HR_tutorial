var log = function(a) {
  console.log(a);
}

var names = ['jon', 'jane', 'jack'];

/* QUESTION: how do you encapsulate the for loop below within a function
so that each(names, callback) will do the same thing as the for loop? */

// var i;
// for (i = 0; i < names.length; i++) {
//   log(names[i]);
// }

var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

each(names, log); // ['jon', 'jane', 'jack']
