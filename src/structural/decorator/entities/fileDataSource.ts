import { DataSource } from '../interfaces/dataSource'

class FileDataSource implements DataSource {
  writeData(data: string): void {
    console.log('writeData: ' + data)
  }

  readData(): string {
    return 'readData: data~!@#$%'
  }
}

export { FileDataSource }
