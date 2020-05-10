# decorator

AKA. wrapper

decorator wraps the basic class's metheds.

decorators can wrap each other like Matryoshka dolls.

the example also comes with a `ts` decorator example.

## Pros and Cons

Pros:

- extend an object's behavior without making a new subclass
- add or remove responsibilities from an object at runtime
- combine several behaviors by wrapping an object into multiple decorators
- divide a monolithic class that implements many possible variants of behavior into several smaller classes
  - Single Responsibility Principle

Cons:

- hard to remove a specific wrapper from the wrappers stack
- hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack
- initial configuration code of layers might look pretty ugly
