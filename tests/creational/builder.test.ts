import { Director } from '@src/creational/builder/entities/director'
import { CarBuilder } from '@src/creational/builder/entities/car'
import { CarManualBuilder } from '@src/creational/builder/entities/carManual'

test('Builder test: director car', () => {
  const director = new Director(new CarBuilder())

  const racer = director.getNewRacer()

  expect(racer.seats).toBe(1)
})

test('Builder test: director', () => {
  const director = new Director(new CarBuilder())
  director.builder = new CarManualBuilder()

  const bus = director.getNewBus()

  expect(bus.seats).not.toBe(24)
  expect(bus.seats).toBe('24')
})
