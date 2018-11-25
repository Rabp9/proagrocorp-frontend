'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('SearchCtrl', function ($scope, $rootScope, $state, ngProgressFactory,
    infosService, $sce, imgResponsiveFilter, $utilsViewService, productosService,
    categoriesService) {
    
    $scope.pathLocation = $rootScope.pathLocation;
    
    var search = ['bg_search', 'search_text'];
   
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.textSearch = $state.params.textSearch;
        infosService.getMany(search, function(data) {
            $scope.infosSearch = data.infos;
            $scope.progressbar.complete();
            $scope.searchText($scope.textSearch, 'btnSearch');
        });
    };
    
    $scope.searchText = function(textSearch, boton) {
        $utilsViewService.disable('#' + boton);
        
        $scope.loading = true;
        $scope.progressbar.start();
        productosService.search({textSearch: textSearch}, function(data) {
            $scope.productosSearch = data.productos;
            categoriesService.search({textSearch: textSearch}, function(data) {
                $scope.categoriesSearch = data.categories;
                $scope.loading = false;
                $scope.progressbar.complete();
                $utilsViewService.enable('#' + boton);
            });
        });
       
    };
    
    $scope.getBgSearchSrc = function(bg_search, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + bg_search;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});