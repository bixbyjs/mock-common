/* global describe, it, expect */

var common = require('..');

describe('mock-common', function() {
  
  it('should export constructors', function() {
    expect(common.Logger).to.be.a('function');
  });
  
});
