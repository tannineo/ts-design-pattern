import { DataSource } from '../interfaces/dataSource'

class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource

  constructor(source: DataSource) {
    this.wrappee = source
  }

  writeData(data: string): void {
    this.wrappee.writeData(data)
  }

  readData(): string {
    return this.wrappee.readData()
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    this.wrappee.writeData('encrypted(' + data + ')')
  }

  readData(): string {
    return 'decrypted(' + this.wrappee.readData() + ')'
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    this.wrappee.writeData('compressed(' + data + ')')
  }

  readData(): string {
    return 'decompressed(' + this.wrappee.readData() + ')'
  }
}

export { DataSourceDecorator, EncryptionDecorator, CompressionDecorator }
