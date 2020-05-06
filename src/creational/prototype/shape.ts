abstract class Shape {
  x: number
  y: number
  color: string

  constructor(source?: Shape) {
    this.x = (source && source.x) || 0
    this.y = (source && source.y) || 0
    this.color = (source && source.color) || 'white'
  }

  abstract clone(): Shape
}

class Rectangle extends Shape {
  width: number
  height: number

  constructor(source?: Rectangle) {
    super(source)
    this.width = (source && source.width) || 0
    this.height = (source && source.height) || 0
  }

  clone(): Rectangle {
    return new Rectangle(this)
  }
}

class Circle extends Shape {
  radius: number

  constructor(source?: Circle) {
    super(source)
    this.radius = (source && source.radius) || 0
  }

  clone(): Circle {
    return new Circle(this)
  }
}

export { Shape, Rectangle, Circle }
