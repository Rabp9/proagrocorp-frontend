'use strict';

/**
 * @ngdoc service
 * @name proagrocorpFrontendApp.$utilsViewService
 * @description
 * # $utilsViewService
 * Factory in the proagrocorpFrontendApp.
 */
angular.module('proagrocorpFrontendApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        }
    };
});