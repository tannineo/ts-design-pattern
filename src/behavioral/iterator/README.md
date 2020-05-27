# iterator

The key idea is to:

1. a iterator implements a method to iterate a collection given
   - better using a facotry to init a iterator
2. a iterator should maintain the state of its siteration

## Pros and Cons

Pros:

- clean up the client code and the collections by extracting bulky traversal algorithms into separate classes
  - Single Responsibility Principle
- implement new types of collections and iterators and pass them to existing code without breaking anything
  - Open/Closed Principle
- each iterator object contains its own iteration state
  - iterate over the same collection in parallel
  - delay an iteration and continue it when needed

Cons:

- applying the pattern can be an overkill if your app only works with simple collections
- using an iterator may be less efficient than going through elements of some specialized collections directly
