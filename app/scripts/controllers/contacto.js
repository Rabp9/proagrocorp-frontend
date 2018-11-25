'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('ContactoCtrl', function ($scope, $sce, ngProgressFactory,
    imgResponsiveFilter, infosService, $rootScope, $utilsViewService) {
    
    $scope.pathLocation = $rootScope.pathLocation;
    
    var search = ['bg_contacto', 'contacto_image'];
   
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        infosService.getMany(search, function(data) {
            $scope.infosContacto = data.infos;
            $scope.progressbar.complete();
        });
    };
    
    $scope.send = function(mensaje, boton) {
        $('#' + boton + ' .texto').text('Enviando...');
        $utilsViewService.disable('#' + boton);
        
        infosService.send(mensaje, function(data) {
            $scope.message = data;
            $('#' + boton + ' .texto').text('Enviar');
            $utilsViewService.enable('#' + boton);
        });
    };
    
    $scope.getBgContactoSrc = function(bg_contacto, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + bg_contacto;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.getContactoImageSrc = function(contacto_image, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + contacto_image;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});