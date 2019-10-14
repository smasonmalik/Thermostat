'use strict'

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemp()).toEqual(20)
  });

  it('increase temp with up()', function() {
    thermostat.up()
    expect(thermostat.getTemp()).toEqual(21)
  });

  it('decrease temp with down()', function() {
    thermostat.down()
    expect(thermostat.getTemp()).toEqual(19)
  });
});
