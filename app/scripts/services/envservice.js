'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.envService
 * @description
 * # envService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/proagrocorp-backend/';
            }
        }
    };
});