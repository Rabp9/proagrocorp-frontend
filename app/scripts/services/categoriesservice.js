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
    return $resource(envService.getHost() + 'categories/:id.json', {}, {
        search: {
            method: 'GET',
            url: envService.getHost() + 'categories/search/:textSearch.json'
        }
    });
});