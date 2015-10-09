(function() {
    'use strict';

    angular
        .module('psMenu')
        .directive('psMenuItem', psMenuItem);

    function psMenuItem(){
        return {
            require: '^psMenu',
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: "development/ext-modules/psMenu/menuItem/psMenuItem.template.html",
            link: function(scope, el, attr, ctrl){
                scope.isActive = function(){
                    return el === ctrl.getActiveElement();
                }

                scope.isVertical = function(){
                    return ctrl.menuStateDataObject.isMenuVertical || el.parents('.ps-subitem-section').length > 0;
                }

                el.on('click', function(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    scope.$apply(function(){
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                });
            }
        }
    }
}());
