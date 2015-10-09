(function() {
    'use strict';
    angular
        .module('psMenu')
        .directive('psMenuGroup', psMenuGroup);

    function psMenuGroup(){
        return {
            require: '^psMenu',
            transclude: true,
            scope: {
                label: '@',
                icon: '@'
            },
            templateUrl: "development/ext-modules/psMenu/menuGroup/psMenuGroup.template.html",
            link: function(scope, el, attrs, ctrl){
                    //properties
                scope.isOpen = false;
                    //methods
                scope.closeMenu = closeMenu;
                scope.clicked = clicked;

                ctrl.setMenuOpenScope(scope);

                scope.isVertical = function(){
                    return ctrl.menuStateDataObject.isMenuVertical || el.parent('.ps-subitem-section').length > 0
                }

                function closeMenu() {
                    scope.isOpen = false;
                    scope.$apply();
                }

                function clicked(){
                    scope.isOpen = !scope.isOpen;
                }
            }
        }
    }
}());
