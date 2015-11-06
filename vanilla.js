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
    
    var droid = droidFactory();
    droid.name = 'c3-po';
    console.log(droid.speak());

    

    
    
    
    
    
    
    




})();
