var Thermostat = function() {
  this.MIN_TEMP = 10
  this.MAX_PWS_On = 25
  this.MAX_PWS_Off = 32
  this.powerSave = true
  this.temp = 20
};

Thermostat.prototype.getTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function () {
  if (this.isMaxTemp() === false) {
    this.temp += 1
  }
};

Thermostat.prototype.down = function () {
  if (this.isMinTemp() === false) {
    this.temp -= 1
  }
};

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSave
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSaveOn() === false) {
    return this.temp === this.MAX_PWS_Off;
  }
  return this.temp === this.MAX_PWS_On;
};
