/**
 * from https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * apply mixins
 *
 * @param derivedCtor
 * @param baseCtors
 * @returns derivedCtor
 */
export const applyMixins = function (derivedCtor: any, baseCtors: any[]): any {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      const proDescr = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      if (proDescr !== undefined) {
        Object.defineProperty(derivedCtor.prototype, name, proDescr)
      }
    })
  })

  return derivedCtor
}

export type Constructor<T = {}> = new (...args: any[]) => T
