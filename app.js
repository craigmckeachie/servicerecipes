(function () {
    "use strict";

    //value object
    var droidValue = {
        name: '',
        speak: function () {
            return "Hi I am " + this.name;
        }
    };


    angular.module('app', [])
        .value('droid', droidValue)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'bb-8';
        droidCtrl.message = droid.speak();

    }


})();








