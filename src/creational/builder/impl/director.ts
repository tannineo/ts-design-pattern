import { Builder } from '../interfaces/builder'
import { CarManual } from './carManual'
import { Car } from './car'

class Director {
  builder: Builder<Car | CarManual>

  // allow NO undefined builder inside
  constructor(builder: Builder<Car | CarManual>) {
    this.builder = builder
  }

  // The director can construct several product

  getNewBus(): Car | CarManual {
    return this.builder
      .reset()
      .setSeats(24) // TODO number here is converted to string
      .setEngine('bus engine')
      .setTripComputer('bus trip computer')
      .setGPS('solid GPS')
      .build()
  }

  getNewRacer(): Car | CarManual {
    return this.builder
      .reset()
      .setSeats(1) // TODO number here is converted to string
      .setEngine('speedy engine')
      .setTripComputer('race computer')
      .setGPS('do we need this in a race?')
      .build()
  }
}

export { Director }
