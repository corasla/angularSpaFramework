(function() {
    'use strict';

    angular
        .module('psFramework')
        .directive('psFramework', psFramework);

    function psFramework(){
        return {
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            transclude: true,
            controller: "psFrameworkController as vm",
            templateUrl: "development/ext-modules/psFramework/psFramework.template.html", //not good, will be refactored
            link: function(scope, el, attrs, ctrl, transclude) {
            //   el.find('.subtitle').append(transclude());
            }
        };
    }
}());
