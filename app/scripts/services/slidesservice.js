'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.slidesService
 * @description
 * # slidesService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('slidesService', function ($resource, envService) {
    return $resource(envService.getHost() + 'slides/:id.json');
});