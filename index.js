// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase(); })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    driver.filter(function (char) {
      char === " "
      console.log(char)
    })
    console.log(driver)
  })
}
