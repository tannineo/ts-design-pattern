import {
  RoundHole,
  RoundPeg,
  SquarePeg,
  SquarePegAdapter,
} from '@src/structural/adapter/pegsExtend'

test('adapter test RoundHole fits', () => {
  const hole = new RoundHole(233)
  const rPeg1 = new RoundPeg(213)
  const rPeg2 = new RoundPeg(998)

  expect(hole.fits(rPeg1)).toBe(true)
  expect(hole.fits(rPeg2)).toBe(false)
})

test('adapter test RoundHole fits SquarePeg', () => {
  const hole = new RoundHole(233)
  const sPeg1 = new SquarePeg(233)
  const sPeg2 = new SquarePeg(998)

  const adapter = new SquarePegAdapter(sPeg1)
  expect(hole.fits(adapter)).toBe(true)

  adapter.setPeg(sPeg2)
  expect(hole.fits(adapter)).toBe(false)
})
