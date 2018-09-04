let store = {passengers: [], drivers: [], trips: []}
let passengerId = 0
let driverId = 0
let tripId = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id
    })
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}


class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.passengerId = passenger.id
    this.driverId = driver.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

}
