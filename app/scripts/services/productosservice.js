'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.productosService
 * @description
 * # productosService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('productosService', function($resource, envService) {
    return $resource(envService.getHost() + 'productos/:id.json', {}, {
        getRelacionados: {
            method: 'GET',
            url: envService.getHost() + 'productos/getRelacionados/:producto_id.json'
        },
        search: {
            method: 'GET',
            url: envService.getHost() + 'productos/search/:textSearch.json'
        }
    });
});