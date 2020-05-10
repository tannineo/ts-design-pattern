import { FileDataSource } from '@src/structural/decorator/entities/fileDataSource'
import {
  EncryptionDecorator,
  CompressionDecorator,
} from '@src/structural/decorator/entities/dataSourceDecorators'

test('test decorator', () => {
  const source = new FileDataSource()

  // data >> encrypt >> compress >> source
  const encryptedCompressedSource = new EncryptionDecorator(
    new CompressionDecorator(source),
  )

  expect(
    encryptedCompressedSource.readData().startsWith('decrypted(decompressed('),
  ).toBe(true)
})
