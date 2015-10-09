(function() {
    'use strict';
    angular
        .module('sharedServices')
        .factory('menuState', menuState);

    function menuState() {
        var menuStateDataObject = {
            isMenuVisible: false,
            isMenuButtonVisible: false,
            isMenuVertical: true,
            isSubmenuOpen: false,
            menuBlockedVertically: false
        };
        return {
            menuStateDataObject: menuStateDataObject,
            toggleMenuVisible: toggleMenuVisible,
            toggleMenuVertical: toggleMenuVertical,
            blockMenuVertically: blockMenuVertically,
            unblockMenuVertically: unblockMenuVertically
        };

            //visibility
        function toggleMenuVisible(){
            setMenuVisible(!menuStateDataObject.isMenuVisible);
        }
        function setMenuVisible(value) {
            menuStateDataObject.isMenuVisible = value;
        }
            //orientation
        function toggleMenuVertical(){
            setMenuVertical(!menuStateDataObject.isMenuVertical);
        }
        function setMenuVertical(value){
            menuStateDataObject.isMenuVertical = value;
        }
        function blockMenuVertically(){
            menuStateDataObject.menuBlockedVertically = true;
        }
        function unblockMenuVertically(){
            menuStateDataObject.menuBlockedVertically = false;
        }
    }
}());
