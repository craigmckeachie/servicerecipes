(function () {
    "use strict";

    angular.module('app', [])
        .config(function ($httpProvider) {
            $httpProvider.defaults.cache = true;
            
        })
        .controller('DemoController', DemoController)


    function DemoController($http) {
        var droidCtrl = this;


        $http({method: 'GET', url: 'http://example.com' })
            .then(function(response){
                //success
            }, function(response){
                //error
            });}


})();








