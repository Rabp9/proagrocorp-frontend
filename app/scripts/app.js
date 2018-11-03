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
    'angular-scroll-animate',
    'ngProgress',
    'ezplus'
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
    
    var nosotrosState = {
        name: 'nosotros',
        url: '/nosotros',
        templateUrl: 'views/nosotros.html',
        controller: 'NosotrosCtrl',
        controllerAs: 'nosotros',
        title: 'Nosotros'
    };
    
    var contactoState = {
        name: 'contacto',
        url: '/contacto',
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto',
        title: 'Contacto'
    };
    
    var categoryState = {
        name: 'category',
        url: '/category/{category_id}',
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        params: {
            id: {
                value: '1'
            }
        }
    };
    
    var productoState = {
        name: 'producto',
        url: '/category/{category_id}/producto/{producto_id}/{slug}',
        templateUrl: 'views/producto.html',
        controller: 'ProductoCtrl',
        controllerAs: 'producto',
        params: {
            id: {
                value: '1'
            }
        }
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(contactoState);
    $stateProvider.state(nosotrosState);
    $stateProvider.state(productoState);
    $stateProvider.state(categoryState);
    $urlRouterProvider.when('', '/');
})
.run(function($rootScope, $state, /*$window, $sce,*/ envService, infosService, linksService, categoriesService, /*serviciosservice,
    noticiasservice,*/ $q) {
    $rootScope.pathLocation = envService.getHost();
    
    var search = ['logo', 'descripcion'];
    
    $rootScope.init = function() {
        $q.all([
             infosService.getMany(search).$promise,
             linksService.getHeader().$promise,
             linksService.getFooter().$promise,
             categoriesService.get().$promise
             //noticiasservice.getSome({amount: 3}).$promise
        ]).then(function(data) {
            $rootScope.infosIndex = data[0].infos;
            $rootScope.linksHeader = data[1].linksHeader;
            $rootScope.linksFooter = data[2].linksFooter;
            $rootScope.categories = data[3].categories;
            /*$rootScope.servicios_index = data[1].servicios;
            $rootScope.noticias_index = data[2].noticias;*/
        });
    };
    
    $rootScope.$on('$stateChangeSuccess', function(event, toParams, fromState, fromParams) {
        $rootScope.title = $state.current.title;
    });
    /*
    $('#mmNav a').click(function() {
        $('.dropdown.open').removeClass('open');
    });
    
    var mq = window.matchMedia('(max-width: 767px)');
    $('.nav a[ui-sref]').on('click', function() {
        if (mq.matches) {
            $('.navbar-toggle').click();
        }
    });
        
    $rootScope.trustAsHtml = function(string) {
        return $sce.trustAsHtml(string);
    };
    */
    $rootScope.init();
});

angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
}]);