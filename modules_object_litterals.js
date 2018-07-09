;(function (is) {
  /*
      Module declaration as object liternal. It is used without new keyword.
  */
  var myModule = {
    myProperty: 'value',

    getMyProperty: function () {
      return this.myProperty
    },

    setMyProperty: function(value){
        this.myProperty = value;
    }
  }

  is.equal(myModule.getMyProperty(), 'value')
  myModule.setMyProperty('new value');
  is.equal(myModule.getMyProperty(), 'new value')

})(is('modules_object_literals'))
