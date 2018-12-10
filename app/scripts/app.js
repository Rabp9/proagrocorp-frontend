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
    'ezplus',
    'ngYoutubeEmbed',    
    'angularValidator',
    '720kb.socialshare'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    
    var searchState = {
        name: 'search',
        url: '/search/{textSearch}',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search',
        title: 'Search'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(contactoState);
    $stateProvider.state(nosotrosState);
    $stateProvider.state(productoState);
    $stateProvider.state(categoryState);
    $stateProvider.state(searchState);
    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);
})
.run(function($rootScope, $state, $window,envService, infosService, linksService, categoriesService, $q, $sce, imgResponsiveFilter) {
    
    $rootScope.pathLocation = envService.getHost();
    
    var search = ['logo', 'nosotros', 'copyright'];
    
    $rootScope.init = function() {
        $q.all([
             infosService.getMany(search).$promise,
             linksService.getHeader().$promise,
             linksService.getFooter().$promise,
             categoriesService.get().$promise
        ]).then(function(data) {
            $rootScope.infosIndex = data[0].infos;
            $rootScope.linksHeader = data[1].linksHeader;
            $rootScope.linksFooter = data[2].linksFooter;
            $rootScope.categories = data[3].categories;
        });
    };
    
    $rootScope.$on('$stateChangeSuccess', function(event, toParams, fromState, fromParams) {
        $rootScope.title = $state.current.title;
        $window.scrollTo(0, 0);

        var openedMenu = $('#js-navbar-collapse').hasClass('in');
        
        var mq = window.matchMedia('(max-width: 767px)');
        if (mq.matches && openedMenu) {
            $('.navbar-toggle').click();
        }
    });
    
    $rootScope.search = function(textSearch) {
        $state.go('search', {textSearch: textSearch});
    };
    
    $rootScope.getLogoSrc = function(logo, size) {
        var src = $rootScope.pathLocation + 'img/infos/' + logo;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    /*
     * 
        
    $rootScope.trustAsHtml = function(string) {
        return $sce.trustAsHtml(string);
    };
    */
    $rootScope.init();
});

angular.module('uib/template/carousel/carousel.html', []).run(['$templateCache', function($templateCache) {
}]);