'use strict';

describe('Service: $utilsViewService', function () {

  // load the service's module
  beforeEach(module('proagrocorpFrontendApp'));

  // instantiate service
  var $utilsViewService;
  beforeEach(inject(function (_$utilsViewService_) {
    $utilsViewService = _$utilsViewService_;
  }));

  it('should do something', function () {
    expect(!!$utilsViewService).toBe(true);
  });

});
