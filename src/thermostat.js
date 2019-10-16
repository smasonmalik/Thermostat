var Thermostat = function() {
  this.DEFAULT_TEMP = 20
  this.MIN_TEMP = 10
  this.MAX_PWS_ON = 25
  this.MAX_PWS_OFF = 32
  this.powerSave = true
  this.lowUsageTemp = 18
  this.temp = this.DEFAULT_TEMP
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
    return this.temp === this.MAX_PWS_OFF;
  }
  return this.temp >= this.MAX_PWS_ON;
};

Thermostat.prototype.resetTemp = function () {
  this.temp = this.DEFAULT_TEMP
}

Thermostat.prototype.usage = function () {
  if (this.temp < this.lowUsageTemp) {
    return "low-usage"
  }
  else if (this.temp < this.MAX_PWS_ON) {
    return "medium-usage"
  }
  else {
    return "high-usage"
  }
}
