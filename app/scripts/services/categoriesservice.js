'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.categoriesService
 * @description
 * # categoriesService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('categoriesService', function($resource, envService) {
    return $resource(envService.getHost() + 'infos/:id.json', {}, {
        getMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/getMany.json',
        }
    });
});