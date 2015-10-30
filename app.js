(function () {
    "use strict";

    //constructor function
    function DroidService() {
        this.name = ''
    }

    DroidService.prototype.speak = function () {
        return "Hi I am " + this.name;
    }

    var droid1 = new DroidService();
    droid1.name = 'r2-d2';

    console.log(droid1.speak());

    //////////////////////////////////////////////////////
    //revealing module pattern
    function DroidFactory() {

        function speak() {
            return "Hi I am " + this.name;
        }

        return {
            name: '',
            speak: speak
        }
    }

    var droid2 = DroidFactory();
    droid2.name = "bb-8";
    console.log(droid2.speak());

    //////////////////////////////////////////////////////
    //value

    var DroidValue  = {name: '',
        speak: function () {
            return "I am " + this.name;
        }
    };

    var droid3 = DroidValue;
    droid3.name = "c3-po";
    console.log(droid3.speak());

    //////////////////////////////////////////////////////
    //module pattern (configurable per app)
    function DroidProvider() {
        var greeting;
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
    droidProvider.configure({greeting: "Hi I am "});
    var droid = droidProvider.$get();
    droid.name = 'ig-88';
    console.log(droid.speak());

    //////////////////////////////////////////////////////
    /* Angular Stuff*/
    angular.module('app', [])
        .value('droid', DroidValue)
        .controller('DroidController', DroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'ig-88';
        droidCtrl.message = droid.speak();
    }


})();








