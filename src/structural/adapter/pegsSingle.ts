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
  private radius: number

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
  private width: number

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

class SquarePegAdapter extends RoundPeg {
  // radius from super class is useless

  private peg: SquarePeg

  constructor(peg: SquarePeg) {
    super()
    this.peg = peg
  }

  setPeg(peg: SquarePeg): void {
    this.peg = peg
  }

  setWidth(width: number): void {
    this.peg.setWidth(width)
  }

  getWidth(): number {
    return this.peg.getWidth()
  }

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2
  }
}

export { RoundHole, RoundPeg, SquarePeg, SquarePegAdapter }
