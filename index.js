function receivesAFunction (callback){
  return callback();
}

function returnsANamedFunction(){
  return function namedfunction(){
    console.log('this is a named function');
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log('this is an anonymous function ');
  }
}
