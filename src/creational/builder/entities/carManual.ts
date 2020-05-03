import { Builder } from '../interfaces/builder'

class CarManual {
  seats: string | undefined

  engine: string | undefined

  tripComputer: string | undefined

  gps: string | undefined

  constructor() {}

  builder(): CarManualBuilder {
    return new CarManualBuilder()
  }
}

class CarManualBuilder implements Builder<CarManual> {
  private carManual: CarManual

  constructor() {
    this.carManual = new CarManual()
  }

  build(): CarManual {
    return this.carManual
  }

  reset(): CarManualBuilder {
    this.carManual = new CarManual()
    return this
  }

  setSeats(seats: string): CarManualBuilder {
    this.carManual.seats = seats.toString() // TODO convert to string
    return this
  }

  setEngine(engine: string): CarManualBuilder {
    this.carManual.engine = engine
    return this
  }

  setTripComputer(tripComputer: string): CarManualBuilder {
    this.carManual.tripComputer = tripComputer
    return this
  }

  setGPS(gps: string): CarManualBuilder {
    this.carManual.gps = gps
    return this
  }
}

export { CarManual, CarManualBuilder }
