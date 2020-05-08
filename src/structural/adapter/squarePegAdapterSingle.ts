import { RoundPeg, SquarePeg } from './pegs'

class SquarePegAdapterSingle extends RoundPeg {
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

export default SquarePegAdapterSingle
