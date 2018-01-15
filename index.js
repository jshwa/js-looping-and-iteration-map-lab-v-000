// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  drivers.map(function (driver) {
    return Object.assign({}, driver.toLowerCase());
  })
}
