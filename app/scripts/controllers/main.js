'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('MainCtrl', function ($scope, $rootScope, $sce, ngProgressFactory,
    slidesService, $q, imgResponsiveFilter, categoriesService, productosService,
    infosService) {
    
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.pathLocation = $rootScope.pathLocation;
    
    var search = ['bg_descripcion', 'video_file', 'descripcion'];
    
    $scope.init = function() {
        $scope.slides = [];
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.loading = true;
        return $q.all([
            slidesService.get().$promise,
            categoriesService.get({estado_id: 1}).$promise,
            productosService.get({estado_id: 1}).$promise,
            infosService.getMany(search).$promise
        ]).then(function(data) {
            $scope.slides = data[0].slides;
            $scope.categories = data[1].categories;
            $scope.productos = data[2].productos;
            $scope.infos = data[3].infos;
            $scope.loading = false;
            
            for (var i = 0; i < $scope.categories.length; i++) {
                $scope.categories[i].col = 'col-sm-6';
                // $scope.categories[i].delay = Math.floor((Math.random() * 100) + 1) / 100;
                if (i % 2) {
                    $scope.categories[i].lp = 'R';
                } else {
                    $scope.categories[i].lp = 'L';
                }
                if (i > 1) {
                    $scope.categories[i].lp += 'D';
                }
            }
            if ($scope.categories.length % 2) {
                $scope.categories[$scope.categories.length - 1].col = 'col-sm-12';
                $scope.categories[$scope.categories.length - 1].lp = 'LRD';
            }
            
            $scope.progressbar.complete();
        });
    };
    
    $scope.animateElementInFadeIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeIn'); // this example leverages animate.css classes
    };

    $scope.animateElementOutFadeIn = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated fadeIn'); // this example leverages animate.css classes
    };
    
    $scope.animateElementInZoomIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated zoomIn'); // this example leverages animate.css classes
    };

    $scope.animateElementOutZoomIn = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated zoomIn'); // this example leverages animate.css classes
    };
    
    $scope.getSlideSrc = function(slide, size) {
        var src = $rootScope.pathLocation + 'img/slides/' + slide.imagen;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.getCategoriesSrc = function(category, size) {
        var src = $rootScope.pathLocation + 'img/categories/' + category.portada;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.getProductosSrc = function(producto, size) {
        var src = $rootScope.pathLocation + 'img/productos/' + producto.imagen;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.getBgDescripcionSrc = function(bg_descripcion, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + bg_descripcion;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});