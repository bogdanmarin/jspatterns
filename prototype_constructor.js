;(function (is) {
  /*
      Same Car function but now we are adding a function toString to it's proprotype object.
  */
  function Car (model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
  }

  Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles'
  }

  var audi = new Car('Audi A3', '2009', '167000')
  is.equal(audi.toString(), 'Audi A3 has done 167000 miles')
})(is('prototype_constructor'))
