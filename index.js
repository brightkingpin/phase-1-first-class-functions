// receives a function and calls it
function receivesAFunction(callback) {
    callback();
}
  

  // returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
      // function body
    }
}
  

  // returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
      // function body
    }
}
  