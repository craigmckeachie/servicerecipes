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


    /* Angular Stuff*/
    angular.module('app', [])
        .service('droid', DroidService)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'r2-d2';
        droidCtrl.message = droid.speak();

    }

})();








