(function() {
    'use strict';

    angular
        .module('sharedServices')
        .factory('windowEvent', windowEvent)

    windowEvent.$inject = ['$rootScope', '$window'];
    function windowEvent($rootScope, $window) {
        var resizeEventCallbackArr = [];

        init();

        var service = {
            registerResizeEvent: registerResizeEvent,
            deregisterResizeEvent: deregisterResizeEvent,
            getWindowWidth: getWindowWidth
        };
        return service;

        function init() {
            $rootScope.$on('$destroy', removeAllEventListeners);
        }

        function registerResizeEvent(eventName, callback) {
                //check to see if function is already registered
                //if not, register it
                //if it is already registered, ignore it
            if(resizeEventCallbackArr.indexOf(callback) === -1){
                resizeEventCallbackArr.push({callback: callback,
                                            eventName: eventName});
                $($window).on(eventName, callback);
            }
        }

        function deregisterResizeEvent(callback){
                //check to see if function is registered
                //if it is, remove it
                //if not, do nothing
            var callbackPosInArray = resizeEventCallbackArr
                                    .map(function(x)
                                            {
                                                return x.callback;
                                            }).indexOf(callback);

            if(callbackPosInArray !== -1) {
                removeEventListenerFor(callbackPosInArray)
                resizeEventCallbackArr.splice(callbackPosInArray, 1);
            }
        }

        function getWindowWidth(){
            return Math.max($($window).width(), $window.innerWidth);
        }

            //cleanup functions
        function removeAllEventListeners(){
            if(resizeEventCallbackArr.length > 0)
            {
                var i;
                for(i = 0; i < resizeEventCallbackArr.length; i++) {
                    removeEventListenerFor(i);
                }
            }
        }
        function removeEventListenerFor(position){
            $($window).off(resizeEventCallbackArr[position].eventName); //hmm, not looking good
        }
    }
}());
