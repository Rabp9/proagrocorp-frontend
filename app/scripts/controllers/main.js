'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('MainCtrl', function ($scope) {
    $scope.slides = [
        {
            id: 1,
            image: "https://picsum.photos/600/200/?image=0"
        },
        {
            id: 2,
            image: "https://picsum.photos/600/200?image=1"
        },
        {
            id: 3,
            image: "https://picsum.photos/600/200/?image=2"
        },
    ];
    
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
});