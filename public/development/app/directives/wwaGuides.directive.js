(function() {
    'use strict';

    angular
        .module('app')
        .directive('wwaGuides', wwaGuides);

    function wwaGuides(){
        return {
            scope:{

            },
            template: '<h1>Guides page</h1>'
        }
    }
}());
