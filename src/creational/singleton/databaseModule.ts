import AsyncLock from 'async-lock'
// import * as Bluebird from 'bluebird'
// Promise = Bluebird.Promise as any

const AYSNC_LOCK_KEY = 'DATABASE_MODULE'
// const lock = new AsyncLock({ Promise: Bluebird.Promise })
const lock = new AsyncLock()

/**
 * here we use module to implement singleton
 */

class Database {
  state: string | undefined
}

let db: Database

const getInstance: () => Promise<Database> = async () => {
  if (!db) {
    await lock.acquire(AYSNC_LOCK_KEY, () => {
      if (!db) {
        db = new Database()
      }
    })
  }
  return db
}

export { getInstance }
