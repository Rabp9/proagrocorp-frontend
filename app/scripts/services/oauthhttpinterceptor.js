'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.oauthHttpInterceptor
 * @description
 * # oauthHttpInterceptor
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
  .factory('oauthHttpInterceptor', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
