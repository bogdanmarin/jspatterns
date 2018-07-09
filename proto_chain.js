;(function (is) {
    /*
        Prototype chain testing.
    */

    var Person = function(name){
        this.name = name;
    }

    var Female =  function(name){
        Person.call(this, name);
        this.appellation = "Ms."
    }

    var Male = function(name){
        Person.call(this, name);        
        this.appellation = "Mr."
    }

    Female.prototype = Object.create(Person.prototype);
    Female.prototype.constructor = Female;


    Male.prototype = Object.create(Person.prototype);
    Male.prototype.constructor = Male;

    Person.prototype.toString = function(){
        return this.appellation + " " + this.name;
    }
    

    var john = new Male("John");
    is.equal(john.toString(), "Mr. John");
    var maria = new Female("Maria");
    is.equal(maria.toString(), "Ms. Maria");
    is.equal(john instanceof Person, true);
    is.equal(maria instanceof Person, true);

})(is('proto_chain'))
  