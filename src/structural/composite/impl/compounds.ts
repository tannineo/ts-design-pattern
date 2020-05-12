import * as _ from 'lodash'
import { BaseShape } from './shapes'

class CompoundGraphic extends BaseShape {
  children: BaseShape[] = []

  move(x: number, y: number): [number, number] {
    this.children.forEach(c => c.move(c.x + x, c.y + y))
    return super.move(x, y)
  }

  draw(): string {
    return (
      super.draw() +
      '\n' +
      this.children
        .map(c => c.draw())
        .reduce((prv, cur) => {
          return prv + '\n' + cur
        }, '')
    )
  }

  /**
   * search id in the tree
   */
  exists(id: string): BaseShape | null {
    let resultShape: BaseShape | null = null
    this.children.forEach(c => {
      if (c.id === id) return (resultShape = c)
      if ((c as CompoundGraphic).children) {
        const temp = (c as CompoundGraphic).exists(id)
        resultShape = temp ? temp : resultShape
      }
    })

    return resultShape
  }

  add(...children: BaseShape[]): void {
    children.forEach(c => {
      if (!this.exists(c.id)) {
        this.children.push(c)
      }
    })
  }

  /**
   * search id in the tree and remove
   *
   * it will search in the sub CompoundGraphic
   *
   * @param id
   */
  remove(id: string): void {
    _.remove(this.children, c => {
      if ((c as CompoundGraphic).children) {
        ;(c as CompoundGraphic).remove(id)
      }
      return c.id === id
    })
  }
}

export { CompoundGraphic }
