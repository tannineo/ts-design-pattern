import { Graphic } from '../interfaces/graphic'

class BaseShape implements Graphic {
  id: string
  x: number
  y: number

  constructor(id: string, x = 0, y = 0) {
    this.id = id
    this.x = x
    this.y = y
  }

  move(x: number, y: number): [number, number] {
    this.x = x
    this.y = y
    return [this.x, this.y]
  }

  draw(): string {
    return this.id + '.draw(): ' + 'x: ' + this.x + ', y: ' + this.y
  }
}

class Dot extends BaseShape {}

class Circle extends BaseShape {
  radius: number

  constructor(id: string, x = 0, y = 0, radius = 0) {
    super(id, x, y)
    this.radius = radius
  }

  draw(): string {
    return super.draw() + ', radius:' + this.radius
  }
}

export { BaseShape, Dot, Circle }
