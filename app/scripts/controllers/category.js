'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('CategoryCtrl', function ($scope, $state, categoriesService, $sce, $rootScope,
    imgResponsiveFilter, ngProgressFactory, productosService, $q) {
    
    $scope.getCategories = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.loading = true;
        return $q(function(resolve, reject) {
            categoriesService.get({id: $state.params.category_id}, function(data) {
                $scope.category = data.category;
                $rootScope.title = data.category.descripcion;
                resolve(data.category.id);
            });
        });
    };
    
    $scope.getProductos = function(category_id) {
        $scope.loading = true;
        $scope.progressbar.start();
        productosService.get({
            estado_id: 1,
            category_id: category_id,
            page: $scope.page,
            items_per_page: $scope.items_per_page
        }, function(data) {
            $scope.productos = data.productos;
            $scope.pagination = data.pagination;
            $scope.loading = false;
            $scope.progressbar.complete();
        });
    };
    
    $scope.init = function() {
        $scope.loading = true;
        $scope.page = 1;
        $scope.items_per_page = 20;
        $scope.productos = [];
        $scope.getCategories().then(function(category_id) {
            $scope.getProductos(category_id);
        });
    };
    
    $scope.getCategoriesSrc = function(category, size) {
        var src = $rootScope.pathLocation + 'img/categories/' + category.portada;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.pageChanged = function() {
        $scope.getProductos($scope.category.id);
    };
    
    $scope.onChangeItemsPerPage = function() {
        $scope.page = 1;
        $scope.getProductos($scope.category.id);
    };
    
    $scope.init();
});