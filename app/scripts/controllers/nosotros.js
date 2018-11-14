'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:NosotrosCtrl
 * @description
 * # NosotrosCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('NosotrosCtrl', function ($scope, $sce, ngProgressFactory,
    imgResponsiveFilter, infosService, $rootScope) {
    
    $scope.pathLocation = $rootScope.pathLocation;
    
    var search = ['bg_nosotros', 'nosotros_body', 'descripcion'];
   
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        infosService.getMany(search, function(data) {
            $scope.infosNosotros = data.infos;
            $scope.progressbar.complete();
        });
    };
    
    $scope.getBgNosotrosSrc = function(bg_nosotros, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + bg_nosotros;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});