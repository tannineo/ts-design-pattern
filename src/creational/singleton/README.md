# singleton

## Pros and Cons

Pros:

- be sure that a class has only a single instance
- gain a global access point to that instance
- singleton object is initialized only when it’s requested for the first time

Cons:

- violates the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). The pattern solves two problems at the time
- can mask bad design, for instance, when the components of the program know too much about each other
- requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times
- may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects
  - since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton
    - or just don’t write the tests
    - or don’t use the Singleton pattern
