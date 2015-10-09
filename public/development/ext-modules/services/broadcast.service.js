(function() {
    'use strict';
    angular
        .module('sharedServices')
        .factory('broadcast', broadcast);

    broadcast.$inject = ['$rootScope'];
    function broadcast($rootScope){
        var service = {
            registerEvent: registerEvent,
            broadcastEvent: broadcastEvent
        };
        return service;

        function registerEvent(eventName, callback){
            $rootScope.$on(eventName, callback);
        }

        function broadcastEvent(eventName, object){
            $rootScope.$broadcast(eventName, object);
        }
    }
}());
