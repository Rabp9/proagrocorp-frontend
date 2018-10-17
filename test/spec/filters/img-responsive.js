'use strict';

describe('Filter: imgResponsive', function () {

  // load the filter's module
  beforeEach(module('proagrocorpFrontendApp'));

  // initialize a new instance of the filter before each test
  var imgResponsive;
  beforeEach(inject(function ($filter) {
    imgResponsive = $filter('imgResponsive');
  }));

  it('should return the input prefixed with "imgResponsive filter:"', function () {
    var text = 'angularjs';
    expect(imgResponsive(text)).toBe('imgResponsive filter: ' + text);
  });

});
