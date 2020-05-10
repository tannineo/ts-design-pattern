import { DataSource } from '../interfaces/dataSource'
import { DataSourceDecoratorAnnotation } from '../decorators/dataSourceDecoratorAnnotations'

class FileDataSource implements DataSource {
  writeData(data: string): void {
    console.log('writeData: ' + data)
  }

  readData(): string {
    return 'readData: data~!@#$%'
  }
}

@DataSourceDecoratorAnnotation({
  encrypt: true,
  compress: true,
})
class FileDataSourceDecorated implements DataSource {
  writeData(data: string): void {
    console.log('writeData: ' + data)
  }

  readData(): string {
    return 'readData: data~!@#$%'
  }
}

export { FileDataSource, FileDataSourceDecorated }
