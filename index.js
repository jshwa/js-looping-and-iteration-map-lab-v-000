// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase(); })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    return console.log({"First Name": driver.split(" ")[0], "Last Name": driver.split(' ')[1]});
  })
}
