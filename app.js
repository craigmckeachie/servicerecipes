(function () {
    "use strict";

    //object literal
    var DroidValue = {
        name: '',
        speak: function () {
            return "Hi I am " + this.name;
        }
    };

    var droid = DroidValue;
    droid.name = "c3-po";
    console.log(droid.speak());


    /* Angular Stuff*/
    angular.module('app', [])
        .value('droid', DroidValue)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'c3-po';
        droidCtrl.message = droid.speak();
    }


})();








