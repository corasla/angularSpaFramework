(function() {
    'use strict';
    angular
        .module('sharedServices')
        .factory('routing', routing);

    routing.$inject = ['$location', 'broadcast', 'constants'];
    function routing($location, broadcast, constants){
        var dataObject = {
            routeString: ''
        }
        var service = {
            dataObject: dataObject,
            changeRouteTo: changeRouteTo
        };
        return service;

        function changeRouteTo(address) {
            dataObject.routeString = address; //maybe we should validate this...
            $location.path('/' + address);
            broadcast.broadcastEvent(constants.PS_MENU_ITEM_SELECTED, {});
        }
    }
}());
