import {
  FileDataSource,
  FileDataSourceDecorated,
} from '@src/structural/decorator/entities/fileDataSource'
import {
  EncryptionDecorator,
  CompressionDecorator,
} from '@src/structural/decorator/entities/dataSourceDecorators'

test('test decorator', () => {
  const source = new FileDataSource()

  // the order of wraps is not controlled
  // data >> encrypt >> compress >> source
  let encryptedCompressedSource = new EncryptionDecorator(
    new CompressionDecorator(source),
  )

  expect(
    encryptedCompressedSource
      .writeData('233')
      .startsWith('writeData: compressed(encrypted('),
  ).toBe(true)
  expect(
    encryptedCompressedSource.readData().startsWith('decrypted(decompressed('),
  ).toBe(true)

  // the order of wraps is not controlled
  // data >> compress >> encrypt >> source
  encryptedCompressedSource = new CompressionDecorator(
    new EncryptionDecorator(source),
  )

  expect(
    encryptedCompressedSource
      .writeData('233')
      .startsWith('writeData: encrypted(compressed('),
  ).toBe(true)
  expect(
    encryptedCompressedSource.readData().startsWith('decompressed(decrypted('),
  ).toBe(true)
})

test('test ts decorator', () => {
  const source = new FileDataSourceDecorated()

  // notice that:
  // using decorator factory with configs
  // we can control the order of wraps inside the decorator factory
  //
  // data >> compress >> encrypt >> source
  expect(
    source.writeData('233').startsWith('writeData: encrypted(compressed('),
  ).toBe(true)
  expect(source.readData().startsWith('decompressed(decrypted(')).toBe(true)
})
