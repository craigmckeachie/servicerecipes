(function () {
    "use strict";

    //revealing module pattern
    function droidFactory() {
        function speakingPrivately() {
            return "Hi I am " + this.name;
        }

        return {
            name: '',
            speak: speakingPrivately
        }
    }


    angular.module('app', [])
        .factory('droid', droidFactory)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'c3-po';
        droidCtrl.message = droid.speak();
    }


})();








