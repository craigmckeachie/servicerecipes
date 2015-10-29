(function () {
    "use strict";

    // revealing module pattern
    function DroidFactory() {
        //private
        function speakingPrivately () {
            return "Hi I am " + this.name;
        }

        //public
        return{
            name: '',
            speak: speakingPrivately
        }
    }

    var droid = DroidFactory();
    droid.name = 'bb-8';
    console.log(droid.speak());


    /* Angular Stuff*/
    angular.module('app', [])
        .factory('droid', DroidFactory)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'bb-8';
        droidCtrl.message = droid.speak();

    }


})();








