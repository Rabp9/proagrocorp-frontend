'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:ProductoCtrl
 * @description
 * # ProductoCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('ProductoCtrl', function ($scope, $state, ngProgressFactory, productosService,
    $rootScope) {
        
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        productosService.get({id: $state.params.id}, function(data) {
            $scope.producto = data.producto;
            var imagen = 'img/productos/' + $scope.producto.portada;
            $rootScope.title = $scope.producto.titulo; 
            $scope.progressbar.complete();
            $scope.style = {
                backgroundImage: 'url("' + $rootScope.path_location + imagen + '")'
            };
        });
    };
    
    $scope.init();
});