(function () {
    "use strict";

    //configurable module
    function DroidProvider() {
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

    var droidProvider = DroidProvider();
    droidProvider.configure({greeting: 'Greetings I am '});
    var droid = droidProvider.$get();
    droid.name = 'ig-88';
    console.log(droid.speak());

    /* Angular Stuff*/
    angular.module('app', [])
        .config(configure)
        .provider('droid', DroidProvider)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'ig-88'
        droidCtrl.message = droid.speak();

    }

    function configure(droidProvider) {
        droidProvider.configure({greeting: 'Greetings I am '});
    }


})();








