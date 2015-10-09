
(function() {
    'use strict';

    angular
        .module('psFramework')
        .controller('psFrameworkController', psFrameworkController);

    psFrameworkController.$inject = ['$scope', 'windowEvent',
                                    'broadcast', 'constants',
                                    'menuState', '$timeout'];
    function psFrameworkController($scope, windowEvent,
                                    broadcast, constants,
                                    menuState, $timeout){
        var vm = this;
            //exposed properties
        vm.menuStateDataObject = menuState.menuStateDataObject;
            //exposed methods
        vm.menuButtonClicked = menuButtonClicked;
            //event notifiers
        windowEvent.registerResizeEvent(constants.PS_RESIZE_EVENT, windowResized);
        broadcast.registerEvent(constants.PS_MENU_ITEM_SELECTED, menuItemSelected);
            //startup function
        init();

        function init(){
                //check width at start to auto adjust the menu button visibility
            $timeout(function(){
                checkWidth();
            }, 0);
        }

        function menuButtonClicked() {
            menuState.toggleMenuVisible();
        }

        function windowResized(){
            $scope.$apply(function(){
                checkWidth();
            });
        }

        function checkWidth(){
            var width = windowEvent.getWindowWidth();
            var value = false;
            value = (width >= 768);
            vm.menuStateDataObject.isMenuVisible = value;
            vm.menuStateDataObject.isMenuButtonVisible = !value;

            sizeIsDesktopMode(value);
        }
        function sizeIsDesktopMode(value){
                //too small
            if(value === false) {
                menuState.blockMenuVertically();
                vm.menuStateDataObject.isMenuVertical = true;
            }
            else {
                menuState.unblockMenuVertically();
            }
        }

        function menuItemSelected() {
            checkWidth();
        }
    }
}());
