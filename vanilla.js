(function () {
    "use strict";

    //value object
    var droidValue = {
        name: '',
        speak: function () {
            return "Hi I am " + this.name;
        }
    };
    
    var droid = droidValue;
    droid.name = 'bb-8';
    console.log(droid.speak());
    
       



})();
