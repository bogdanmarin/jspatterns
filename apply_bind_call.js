;(function (is) {
    /*
        apply vs Bind vs call.
        apply and call calls a function, bind creates a new one to be used later with the same ctx
    */

    var init = function(a,b){
        return this + a + b;
    }

    var r1 = init.apply(3, [1, 1]);
    var r2 = init.call(3, 1, 1);
    var initCopy =  init.bind(3,1,1);
    
    
    is.equal(r1, 5);
    is.equal(r2, 5);
    is.equal(r1,r2);
    
    setTimeout(function(){
        var r3 = initCopy();  
        //at a later time, after 100ms, call binded function  
        is.equal(r1, r3);
    }, 100)


})(is('apply vs call vs bind'))
  