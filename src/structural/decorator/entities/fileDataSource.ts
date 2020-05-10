import { DataSource } from '../interfaces/dataSource'
import { DataSourceDecoratorAnnotation as DataSourcePipes } from '../decorators/dataSourceDecoratorAnnotations'

class FileDataSource implements DataSource {
  writeData(data: string): string {
    return 'writeData: ' + data
  }

  readData(): string {
    return 'readData: data~!@#$%'
  }
}

@DataSourcePipes({
  encrypt: true,
  compress: true,
})
class FileDataSourceDecorated implements DataSource {
  writeData(data: string): string {
    return 'writeData: ' + data
  }

  readData(): string {
    return 'readData: data~!@#$%'
  }
}

export { FileDataSource, FileDataSourceDecorated }
