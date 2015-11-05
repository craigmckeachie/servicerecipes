(function () {
    "use strict";

    //constructor function
    function DroidService() {
        this.name = '';
    }

    DroidService.prototype.speak = function () {
        return "Hi I am " + this.name;
    }

    var droid = new DroidService();
    droid.name = 'r2-d2';
    console.log(droid.speak());
    

    




})();
