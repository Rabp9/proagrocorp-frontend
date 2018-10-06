'use strict';

/**
 * @ngdoc overview
 * @name proagrocorpFrontendApp
 * @description
 * # proagrocorpFrontendApp
 *
 * Main module of the application.
 */
angular
.module('proagrocorpFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ngPicturefill',
    'slick',
    'angular-scroll-animate'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };
    
    $stateProvider.state(mainState);
    $urlRouterProvider.when('', '/');
});

angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
}]);
