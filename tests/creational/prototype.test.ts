import { Rectangle, Circle } from '@src/creational/prototype/shape'

test('prototype test', () => {
  const rect = new Rectangle()
  rect.width = 10

  const newRect = rect.clone()
  expect(newRect.width).toBe(10)
})

test('prototype test circle', () => {
  const circle = new Circle()
  circle.radius = 1

  const newCircle = circle.clone()
  expect(newCircle.radius).toBe(1)
})
