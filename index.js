store = {drivers: [], passengers: [], trip: []}
let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
  constructor (name) {
    this.id = driverID ++,
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    let allTrips = this.trips()
    let passIds = allTrips.map(trip => trip.passengerId)
    return store.passengers.filter(p => passIds.includes(p.id))
  }
}

class Passenger {
  constructor (name) {
    this.id = passengerID ++,
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    let allTrips = this.trips()
    let driverIds = allTrips.map(trip => trip.driverId)
    return store.drivers.filter(d => driverIds.includes(d.id))
  }
}

class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = tripID ++,
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }
}
