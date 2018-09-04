
let store = {drivers: [], trips: [], passengers: []}
let driverId = 0
let tripId = 0
let passengerId = 0

class Driver {

  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    let arrayPassengerIds = this.trips().map(trip => trip.passengerId);

    let arrayPassengers = []
    for(const id of arrayPassengerIds) {
      for(const value of store.passengers) {
        if (value.id === id) {
          arrayPassengers.push(value)
        }
      }
    }
    return arrayPassengers
  }

}


class Trip {

  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

}


class Passenger {

  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  drivers() {
    let arrayDriverIds = this.trips().map(trip => trip.driverId);

    let arrayDrivers = []
    for(const id of arrayDriverIds) {
      for(const value of store.drivers) {
        if (value.id === id) {
          arrayDrivers.push(value)
        }
      }
    }
    return arrayDrivers
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

}
