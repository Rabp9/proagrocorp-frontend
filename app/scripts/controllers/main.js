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
    slidesService, $q, imgResponsiveFilter, categoriesService) {
    
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.pathLocation = $rootScope.pathLocation;
   
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        return $q.all([
            slidesService.get().$promise,
            categoriesService.get({estado_id: 1}).$promise
        ]).then(function(data) {
            $scope.slides = data[0].slides;
            $scope.categories = data[1].categories;
            for (var i = 0; i < $scope.categories.length; i++) {
                $scope.categories[i].col = 'col-sm-6';
                if (i % 2) {
                    $scope.categories[i].lp = "R";
                } else {
                    $scope.categories[i].lp = "L";
                }
                if (i > 1) {
                    $scope.categories[i].lp += "D";
                }
            }
            if ($scope.categories.length % 2) {
                $scope.categories[$scope.categories.length - 1].col = 'col-sm-12';
                $scope.categories[$scope.categories.length - 1].lp = 'LRD';
            };
            
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
    
    $scope.getBgSrc = function(category, size) {
        var src = $rootScope.pathLocation + 'img/categories/' + category.portada;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});