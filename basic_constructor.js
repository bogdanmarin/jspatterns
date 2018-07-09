;(function (is) {
    /*
        Just a basic function declaration and then calling it's constructor
    */
  function Car (model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles

    this.toString = function () {
      return this.model + ' has done ' + this.miles + ' miles'
    }
  }

  var golf = new Car('Golf 6', '2009', '167000')
  is.equal(golf.toString(), 'Golf 6 has done 167000 miles')
})(is('basic_constructor'))
