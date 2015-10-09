(function() {
    'use strict';

    angular
        .module('psMenu')
        .controller('psMenuController', psMenuController);

    psMenuController.$inject = ['constants', 'routing',
                                'menuState', '$scope'];
    function psMenuController(constants, routing,
                                menuState, $scope){
        var vm = this;
            //exposed properties
        vm.menuStateDataObject = menuState.menuStateDataObject;
        vm.activeElement = null;
            //move it to the menuStateDataObject in the menuState service
        vm.menuOpenScope = null;
            //exposed methods
        vm.setActiveElement = setActiveElement;
        vm.getActiveElement = getActiveElement;
        vm.toggleMenuOrientation = toggleMenuOrientation;
        vm.setRoute = setRoute;
        vm.setMenuOpenScope = setMenuOpenScope;

        function setActiveElement(el){
            vm.activeElement = el;
        }
        function getActiveElement(){
            return vm.activeElement;
        }

        function setRoute(route){
            routing.changeRouteTo(route);
        }

        function toggleMenuOrientation(){
            menuState.toggleMenuVertical();
        }

        function setMenuOpenScope(scope) {
            vm.menuOpenScope = scope;
        }

        angular.element(document).bind('click', function(e){
            if(vm.menuOpenScope)
            {
                if(!$(e.target).parents().hasClass("ps-menu-area-vertical")
                    &&
                    !$(e.target).parents().hasClass("ps-menu-area-horizontal")) {
                    vm.menuOpenScope.closeMenu();
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        })
    }
}());
