import { DatabaseAsync } from '@src/creational/singleton/databaseAsync'
import * as DatabaseModule from '@src/creational/singleton/databaseModule'
// import * as Bluebird from 'bluebird'
// Promise = Bluebird.Promise as any

test('singleton databaseAsync test', async () => {
  const db1 = await DatabaseAsync.getInstance()

  if (db1 === undefined) {
    throw new Error('undefined instances')
  } else {
    db1.state = '2333'
  }

  const db2 = await DatabaseAsync.getInstance()

  if (db2 === undefined) {
    throw new Error('undefined instances')
  }

  expect(db2.state).toBe('2333')
})

test('singleton databaseAsync async test', async () => {
  const dbArr: any[] = [null, null] // be careful about the reference here
  // 'undefined' (like values below) is the basic type,
  // and won't be ref-ed when passing to the 'asyncFunc'
  // so we use array to pass the ref
  // let db1, db2

  const asyncFunc = async (
    db: any[],
    index: number,
    state: string,
  ): Promise<void> => {
    db[index] = await DatabaseAsync.getInstance()
    db[index].state = state
  }

  await Promise.all([asyncFunc(dbArr, 0, '2333'), asyncFunc(dbArr, 1, '1919')])

  if (!dbArr[0] || !dbArr[1]) {
    throw new Error('undefined instances')
  }

  expect(dbArr[0].state).toBe(dbArr[1].state)
})

test('singleton DatabaseModule test', async () => {
  const db1 = await DatabaseModule.getInstance()

  if (db1 === undefined) {
    throw new Error('undefined instances')
  } else {
    db1.state = '2333'
  }

  const db2 = await DatabaseModule.getInstance()

  if (db2 === undefined) {
    throw new Error('undefined instances')
  }

  expect(db2.state).toBe('2333')
})

test('singleton DatabaseModule async test', async () => {
  const dbArr: any[] = [null, null]

  const asyncFunc = async (
    db: any[],
    index: number,
    state: string,
  ): Promise<void> => {
    db[index] = await DatabaseModule.getInstance()
    db[index].state = state
  }

  await Promise.all([asyncFunc(dbArr, 0, '2333'), asyncFunc(dbArr, 1, '1919')])

  if (!dbArr[0] || !dbArr[1]) {
    throw new Error('undefined instances')
  }

  expect(dbArr[0].state).toBe(dbArr[1].state)
})
