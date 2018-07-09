var is = (function () {
  var test = true

  var print = function (result, msg) {
    let output = document.createElement('p');    
    output.style.color = result ? 'green': 'red';
    output.innerHTML = msg;
    document.body.appendChild(output);
  }

  var equal = function (a, b) {
    test = typeof a === typeof b && a === b;
    print(test, this + ': <b>' + a + '</b> equals <b>'  + b + '</b>');
  }

  return function(module){
      return {
        equal: equal.bind(module)
      }
  }
})()
