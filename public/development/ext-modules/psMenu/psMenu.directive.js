(function() {
    'use strict';

    angular
        .module('psMenu')
        .directive('psMenu', psMenu);

    function psMenu(){
        return {
            scope: {

            },
            transclude: true,
            controller: 'psMenuController as vm',
            templateUrl: "development/ext-modules/psMenu/psMenuTemplate.html",
            link: function(scope, el, attrs, ctrl, transclude) {
                // console.log('finding -> ' + el.find('.menu'))
                // el.find('.menu').append(transclude());
            }
        }
    }
}());
