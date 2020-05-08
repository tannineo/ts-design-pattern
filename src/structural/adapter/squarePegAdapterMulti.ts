import { RoundHole, SquarePeg } from './pegs'
import { applyMixins } from '@src/helpers/mixins'

// Declaration Merging
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
interface SquarePegAdapterMultiBase extends RoundHole, SquarePeg {}

class SquarePegAdapterMultiBase {
  isFit(): boolean {
    return (this.width * Math.sqrt(2)) / 2 <= this.radius
  }
}

const SquarePegAdapterMulti = applyMixins(SquarePegAdapterMultiBase, [
  RoundHole,
  SquarePeg,
])

export { SquarePegAdapterMulti, SquarePegAdapterMultiBase }
