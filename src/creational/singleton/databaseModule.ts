/**
 * here we use module to implement singleton
 */

class Database {
  state: string | undefined
}

let db: Database | undefined

const getInstance: () => Database = () => {
  if (!db) {
    db = new Database()
  }
  return db
}

export { getInstance }
