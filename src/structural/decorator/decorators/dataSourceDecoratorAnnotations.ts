/**
 * here we implement a decorator factory
 * accepting configs to decide what operations are needed
 *
 * since operations of decorators might have the ordering issue
 * it's better to control the ordering using configs
 */

import { DataSource } from '../interfaces/dataSource'
import { Constructor } from '@src/types'

/**
 *
 * decorator factory
 *
 * data >> compress >> encrypt >> source
 *
 * @param config
 */
const DataSourceDecoratorAnnotation = function (config?: {
  encrypt?: boolean
  compress?: boolean
}): <T extends Constructor<DataSource>>(target: T) => T {
  return function <T extends Constructor<DataSource>>(target: T): T {
    return class extends target {
      writeData(data: string): string {
        let str = data
        if (config?.compress) {
          str = 'compressed(' + str + ')'
        }
        if (config?.encrypt) {
          str = 'encrypted(' + str + ')'
        }
        return super.writeData(str)
      }

      readData(): string {
        let data = super.readData()
        if (config?.encrypt) {
          data = 'decrypted(' + data + ')'
        }
        if (config?.compress) {
          data = 'decompressed(' + data + ')'
        }
        return data
      }
    }
  }
}

// the following code won't pass type checks
// the decorated class must implement DataSource interface

// @DataSourceDecoratorAnnotation()
// class TestDecoratorTypeCheck {}

export { DataSourceDecoratorAnnotation }
