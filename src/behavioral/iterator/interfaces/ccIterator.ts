interface CCIterator<T> {
  getNext(): T | null

  hasMore(): boolean
}

export default CCIterator
