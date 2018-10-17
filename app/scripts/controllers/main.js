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
    slidesService, $q, imgResponsiveFilter) {
    
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.pathLocation = $rootScope.pathLocation;
   
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        return $q.all([
            slidesService.get().$promise
        ]).then(function(data) {
            $scope.slides = data[0].slides;
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
    
    $scope.init();
});