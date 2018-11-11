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
    imgResponsiveFilter, ngProgressFactory) {
    
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.loading = true;
        categoriesService.get({id: $state.params.category_id}, function(data) {
            $scope.category = data.category;
            $scope.loading = false;
            $rootScope.title = data.category.descripcion;
            $scope.progressbar.complete();
        });
    };
    
    $scope.getCategoriesSrc = function(category, size) {
        var src = $rootScope.pathLocation + 'img/categories/' + category.portada;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});