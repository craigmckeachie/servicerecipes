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

    var provider = droidProvider();
    provider.configure({greeting: "Greetings I am "});
    var droid = provider.$get();
    droid.name = 'ig-88';
    console.log(droid.speak());
    
    
       



})();
