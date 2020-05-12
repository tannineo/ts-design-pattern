import { Director } from '@src/creational/builder/impl/director'
import { CarBuilder } from '@src/creational/builder/impl/car'
import { CarManualBuilder } from '@src/creational/builder/impl/carManual'

test('Builder test: director car', () => {
  const director = new Director(new CarBuilder())

  const racer = director.getNewRacer()

  expect(racer.seats).not.toBe('1')
  expect(racer.seats).toBe(1)
})

test('Builder test: director carManual', () => {
  const director = new Director(new CarBuilder())
  director.builder = new CarManualBuilder()

  const bus = director.getNewBus()

  expect(bus.seats).not.toBe(24)
  expect(bus.seats).toBe('24')
})

test('Builder test: director multiple instances', () => {
  const director = new Director(new CarBuilder())

  const racer = director.getNewRacer()
  const bus = director.getNewBus()

  expect(racer.seats).toBe(1)
  expect(bus.seats).toBe(24)
})
