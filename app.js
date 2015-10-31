(function () {
    "use strict";

    //constant
    var errors = {
        mindtrick: "These aren't the droids you're looking for"
    };
    
    console.log(errors.mindtrick);


    //////////////////////////////////////////////////////
    /* Angular Stuff*/
    angular.module('app', [])
        .constant('errors', errors)
        .config(configure)
        .controller('DroidController', DroidController)

    function DroidController(errors) {
        var droidCtrl = this;
        errors.mindtrick = "another error";
        droidCtrl.message = errors.mindtrick;

    }

    function configure(errors) {
        console.log("in config: " + errors.mindtrick);
        
        
    }


})();








