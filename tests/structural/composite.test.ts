import { Dot, Circle } from '@src/structural/composite/impl/shapes'
import { CompoundGraphic } from '@src/structural/composite/impl/compounds'

test('test composite', () => {
  const dot1 = new Dot('dot1', 1, 2)
  const dot2 = new Dot('dot2', 2, 3)
  const circle1 = new Circle('circle1', 3, 3, 233)

  const compound1 = new CompoundGraphic('com1')
  compound1.add(dot1, dot2, circle1)

  expect(compound1.children.length).toBe(3)
  expect(compound1.exists(dot1.id)).toBe(dot1)

  compound1.move(233, 233)
  expect(dot2.x).toBe(235)
  expect(dot2.y).toBe(236)

  compound1.remove(circle1.id)
  expect(compound1.children.length).toBe(2)
  expect(compound1.exists(circle1.id)).toBeNull()

  const compound2 = new CompoundGraphic('com2')
  const circle2 = new Circle('circle2', 4, 5, 111)
  compound2.add(circle2)
  compound1.add(compound2)

  compound1.move(-1, -1)
  expect(circle2.x).toBe(3)
  expect(circle2.y).toBe(4)

  compound1.remove(circle2.id)
  expect(compound1.children.length).toBe(3)
  expect(compound1.exists(dot1.id)).not.toBeNull()
  expect(compound1.exists(circle2.id)).toBeNull()
  expect(compound2.children.length).toBe(0)
  expect(compound2.exists(circle2.id)).toBeNull()
})
