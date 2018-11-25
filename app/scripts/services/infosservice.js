'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('infosService', function($resource, envService) {
    return $resource(envService.getHost() + 'infos/:id.json', {}, {
        getMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/getMany.json'
        },
        indexAdmin: {
            method: 'POST',
            url: envService.getHost() + 'infos/indexAdmin.json'
        },
        send: {
            method: 'POST',
            url: envService.getHost() + 'infos/send.json'
        }
    });
});