import { RoundHole, SquarePeg } from './pegs'
import { applyMixins } from '@src/helpers/mixins'

// Declaration Merging
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
interface SquarePegAdapterMulti extends RoundHole, SquarePeg {}

class SquarePegAdapterMulti {
  isFit(): boolean {
    return (this.width * Math.sqrt(2)) / 2 <= this.radius
  }
}

const SquarePegAdapterMultiConstructor = applyMixins(SquarePegAdapterMulti, [
  RoundHole,
  SquarePeg,
])

export { SquarePegAdapterMultiConstructor, SquarePegAdapterMulti }
