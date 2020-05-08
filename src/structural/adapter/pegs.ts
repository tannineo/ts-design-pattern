class RoundHole {
  radius: number

  constructor(radius?: number) {
    this.radius = radius ? radius : 0
  }

  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.getRadius()
  }
}

class RoundPeg {
  protected radius: number

  constructor(radius?: number) {
    this.radius = radius ? radius : 0
  }

  // we are not using getter/setter override here
  // it will cause some 'chaos' in inheritance

  setRadius(radius: number): void {
    this.radius = radius
  }

  getRadius(): number {
    return this.radius
  }
}

class SquarePeg {
  protected width: number

  constructor(width?: number) {
    this.width = width ? width : 0
  }

  setWidth(width: number): void {
    this.width = width
  }

  getWidth(): number {
    return this.width
  }
}

export { RoundHole, RoundPeg, SquarePeg }
