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

  it('doesnt go down below 10', function() {
    for (let step = 0; step < 11; step++) {
      thermostat.down();
    }
    expect(thermostat.getTemp()).toEqual(10)
  })

  it('initializes with powerSave on', function() {
    expect(thermostat.isPowerSaveOn()).toEqual(true)
  })

  it('turns powerSave off', function() {
    thermostat.powerSaveOff()
    expect(thermostat.isPowerSaveOn()).toEqual(false)
  })

  it('turns powerSave on', function() {
    thermostat.powerSaveOff()
    thermostat.powerSaveOn()
    expect(thermostat.isPowerSaveOn()).toEqual(true)
  })

  it('ismaxtemp', function() {
    for (let step = 0; step < 5; step++) {
      thermostat.up();
    }
    expect(thermostat.isMaxTemp()).toEqual(true)
  })

  it('resets the temp to 20', function() {
    thermostat.resetTemp()
    expect(thermostat.getTemp()).toEqual(20)
  })

  describe('max temp when PWS on', function() {
    it('caps temp at 25 degrees', function() {
      for (let step = 0; step < 13; step++) {
        thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(25)
    })
  })

  describe('max temp when PWS off', function() {
    it('caps temp at 32 degrees', function() {
      thermostat.powerSaveOff()
      for (let step = 0; step < 16; step++) {
        thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(32)
    })
  })

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.usage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is < 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (let step = 0; step < 3; step++) {
        thermostat.down();
      }
      expect(thermostat.usage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is >= 25', function() {
    it('it is considered high-usage', function() {
      for (let step = 0; step < 5; step++) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });
});
