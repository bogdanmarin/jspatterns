;(function (is) {
    /*
       Test es6, ecma2015 promises
    */

    let promise = new Promise((resolve, reject)=>{
        let result = 1;
        
        setTimeout(()=>{
            result = 5;
            resolve(result);
        }, 1000)
    });

    promise.then((res)=>{
        is.equal(res, 5);
    }).catch((e)=>{

    })


})(is('promises'))
  