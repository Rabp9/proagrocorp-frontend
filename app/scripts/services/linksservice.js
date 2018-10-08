'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.linksService
 * @description
 * # linksService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('linksService', function($resource, envService) {
    return $resource(envService.getHost() + 'links/:id.json', {}, {
        getHeader: {
            method: 'GET',
            url: envService.getHost() + 'links/getHeader.json',
        },
        getFooter: {
            method: 'GET',
            url: envService.getHost() + 'links/getFooter.json',
        }
    });
});