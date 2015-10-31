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
    var droid4 = droidProvider.$get();
    droid4.name = 'ig-88';
    console.log(droid4.speak());

    //////////////////////////////////////////////////////
    //constant
    var errors = {
        mindtrick: "These aren't the droids you're looking for"
    };

    console.log(errors.mindtrick);

    //////////////////////////////////////////////////////
    /* Angular Stuff*/
    angular.module('app', [])
        .constant('errors',errors)
        .config(configure)
        .provider('droid', DroidProvider)
        .controller('DroidController', DroidController)
        .controller('AnotherDroidController', AnotherDroidController)

    function DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'ig-88';
        droidCtrl.message = droid.speak();
    }

    function AnotherDroidController(droid) {
        var anotherDroidCtrl = this;
        anotherDroidCtrl.message = droid.speak();
    }

    function configure(errors, droidProvider) {
        console.log("from config: " + errors.mindtrick);
    }


})();








