'use strict';

/**
 * @ngdoc function
 * @name proagrocorpFrontendApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the proagrocorpFrontendApp
 */
angular.module('proagrocorpFrontendApp')
.controller('CategoryCtrl', function ($scope, $state, categoriesService) {
    
    $scope.init = function() {
        $scope.loading = true;
        categoriesService.get({id: $state.params.category_id}, function(data) {
            $scope.category = data.category;
            $scope.loading = false;
        });
    };
    
    $scope.init();
});