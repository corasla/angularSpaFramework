(function() {
    'use strict';

    angular
        .module('app')
        .directive('wwaDashboard', wwaDashboard);

    function wwaDashboard(){
        return {
            scope:{

            },
            template: '<h1>Dashboard page</h1>'
        }
    }
}());
