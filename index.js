// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  new_drivers = drivers.map(function (driver) { return driver.toLowerCase(); })
  return new_drivers;
}
