(function() {
    'use strict';
    angular
        .module('sharedServices')
        .factory('constants', constants);

    function constants(){
        var service = {
            PS_MENU_TOGGLE_SHOW: 'ps-menu-toggle-show',
            PS_MENU_ITEM_SELECTED: 'ps-menu-item-selected-event',
            PS_MENU_TOGGLE_ORIENTATION: 'ps-menu-toggle-orientation',
            PS_RESIZE_EVENT: 'resize.psFramework'
        };
        return service;
    }
}());
