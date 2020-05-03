import { Builder } from '../interfaces/builder'

class Car {
  seats: number | undefined

  engine: string | undefined

  tripComputer: string | undefined

  gps: string | undefined

  constructor() {}

  builder(): CarBuilder {
    return new CarBuilder()
  }
}

class CarBuilder implements Builder<Car> {
  private car: Car

  constructor() {
    this.car = new Car()
  }

  build(): Car {
    return this.car
  }

  reset(): CarBuilder {
    this.car = new Car()
    return this
  }

  setSeats(seats: number): CarBuilder {
    this.car.seats = seats
    return this
  }

  setEngine(engine: string): CarBuilder {
    this.car.engine = engine
    return this
  }

  setTripComputer(tripComputer: string): CarBuilder {
    this.car.tripComputer = tripComputer
    return this
  }

  setGPS(gps: string): CarBuilder {
    this.car.gps = gps
    return this
  }
}

export { Car, CarBuilder }
