import {
  Facebook,
  FacebookIterator,
  CONNECTION_TYPE,
} from '@src/behavioral/iterator/impls/facebook'

test('test iterator', () => {
  const fb = new Facebook()

  const fbItr = new FacebookIterator(fb, '233', CONNECTION_TYPE.FRIENDS)

  expect(fbItr.hasMore()).toBe(true)
  expect(fbItr.getNext()).toBe('1')

  expect(fbItr.hasMore()).toBe(true)
  expect(fbItr.getNext()).toBe('2')

  expect(fbItr.hasMore()).toBe(true)
  expect(fbItr.getNext()).toBe('3')

  expect(fbItr.hasMore()).toBe(false)
  expect(fbItr.getNext()).toBeNull()
})
