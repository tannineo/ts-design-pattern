import { RoundHole, RoundPeg, SquarePeg } from '@src/structural/adapter/pegs'
import SquarePegAdapterSingle from '@src/structural/adapter/squarePegAdapterSingle'
import {
  SquarePegAdapterMulti,
  SquarePegAdapterMultiConstructor,
} from '@src/structural/adapter/squarePegAdapterMulti'

test('adapter test RoundHole fits', () => {
  const hole = new RoundHole(233)
  const rPeg1 = new RoundPeg(213)
  const rPeg2 = new RoundPeg(998)

  expect(hole.fits(rPeg1)).toBe(true)
  expect(hole.fits(rPeg2)).toBe(false)
})

test('adapter test RoundHole fits SquarePeg using SquarePegAdapterSingle', () => {
  const hole = new RoundHole(233)
  const sPeg1 = new SquarePeg(233)
  const sPeg2 = new SquarePeg(998)

  const adapter = new SquarePegAdapterSingle(sPeg1)
  expect(hole.fits(adapter)).toBe(true)

  adapter.setPeg(sPeg2)
  expect(hole.fits(adapter)).toBe(false)
})

test('adapter test RoundHole fits SquarePeg using SquarePegAdapterMulti', () => {
  const hole = new RoundHole(233)
  const sPeg1 = new SquarePeg(233)
  const sPeg2 = new SquarePeg(998)

  const adapter = new SquarePegAdapterMultiConstructor() as SquarePegAdapterMulti
  adapter.radius = hole.radius
  adapter.setWidth(sPeg1.getWidth())
  expect(adapter.isFit()).toBe(true)

  adapter.setWidth(sPeg2.getWidth())
  expect(adapter.isFit()).toBe(false)
})
