'use strict';

/**
 * @ngdoc filter
 * @name proagrocorpFrontendApp.filter:trustUrl
 * @function
 * @description
 * # trustUrl
 * Filter in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.filter('trustUrl', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
});