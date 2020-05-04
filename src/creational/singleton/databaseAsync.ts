import AsyncLock from 'async-lock'
// import * as Bluebird from 'bluebird'
// Promise = Bluebird.Promise as any

const AYSNC_LOCK_KEY = 'DATABASE_ASYNC'
// const lock = new AsyncLock({ Promise: Bluebird.Promise })
const lock = new AsyncLock()

class DatabaseAsync {
  private static instance: DatabaseAsync

  public state: string | undefined

  private constructor() {
    // private constructor
  }

  public static async getInstance(): Promise<DatabaseAsync> {
    if (!DatabaseAsync.instance) {
      // not initialized instance
      // acquire lock to init
      await lock.acquire(AYSNC_LOCK_KEY, () => {
        if (!DatabaseAsync.instance) {
          DatabaseAsync.instance = new DatabaseAsync()
        }
      })
    }
    // initialized instance
    return DatabaseAsync.instance
  }
}

export { DatabaseAsync }
