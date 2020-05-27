import CCIterator from '../interfaces/ccIterator'

enum CONNECTION_TYPE {
  FRIENDS = 'friends',
  COWORKERS = 'coworkers',
}

class FacebookIterator implements CCIterator<string> {
  private facebook: Facebook

  private profileID: string

  private type: CONNECTION_TYPE

  private currentPosition = 0

  private cache: string[] | undefined

  constructor(facebook: Facebook, profileID: string, type: CONNECTION_TYPE) {
    this.facebook = facebook
    this.profileID = profileID
    this.type = type
  }

  private lazyInit() {
    if (!this.cache) {
      this.cache = this.facebook.socialGraphRequest(this.profileID, this.type)
    }
  }

  hasMore(): boolean {
    this.lazyInit()
    return this.currentPosition < (this.cache as string[]).length
  }

  getNext(): string | null {
    if (this.hasMore()) {
      return (this.cache as string[])[this.currentPosition++]
    }
    return null
  }
}

class Facebook {
  socialGraphRequest(profileID: string, type: CONNECTION_TYPE): string[] {
    return type === CONNECTION_TYPE.FRIENDS ? ['1', '2', '3'] : ['4', '5', '6']
  }
}

export { Facebook, FacebookIterator, CONNECTION_TYPE }
