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
    $rootScope, $q, $sce, imgResponsiveFilter) {
        
    $scope.init = function() {
        $scope.loading = true;
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.getProducto().then(function(producto_id) {
            $scope.getProductosRelacionados(producto_id);
        });
    };
    
    $scope.getProducto = function() {
        return $q(function(resolve, reject) {
            productosService.get({
                id: $state.params.producto_id
            }, function(data) {
                $scope.producto = data.producto;
                var imagen = 'img/productos/' + $scope.producto.portada;
                $rootScope.title = $scope.producto.descripcion;
                $scope.style = {
                    backgroundImage: 'url("' + $rootScope.path_location + imagen + '")'
                };
                resolve(data.producto.id);
            });
        });
    };
    
    $scope.getProductosRelacionados = function(producto_id) {
        productosService.getRelacionados({
            producto_id: producto_id
        }, function(data) {
            $scope.productosRelacionados = data.productos
            $scope.loading = false;
            $scope.progressbar.complete();
        });
    };
    
    $scope.getProductosSrc = function(producto, size) {
        var src = $rootScope.pathLocation + 'img/productos/' + producto.imagen;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});