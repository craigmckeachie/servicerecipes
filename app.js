(function () {
    "use strict";

    //module pattern (configurable per app)
    function droidProvider() {
        var greeting = '';
        return{
            configure: function (settings) {
                greeting = settings.greeting;
            },
            $get: function () {
                return{
                    name: '',
                    speak: function () {
                        return greeting + this.name;
                    }
                }
            }
        }
    }


    angular.module('app', [])
        .config(function (droidProvider) {
            droidProvider.configure({greeting: "Greetings I am "})

        })
        .provider('droid', droidProvider)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'ig-88'
        droidCtrl.message = droid.speak();

    }


})();








