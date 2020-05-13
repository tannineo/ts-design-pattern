# flyweight

AKA. Cache

Identify intrinsic state and extrinsic state.

Optimize the memory usage by managing and sharing the extrinsic state.

Difference between Flyweight pattern and Object Pool pattern:

- https://stackoverflow.com/questions/30422525/what-are-the-differences-between-flyweight-and-object-pool-patterns
  - Object Pool: need to checkout from the pool and giveback
  - Flyweight: use the context object like a Singleton

## Pros and Cons

Pros:

- save lots of RAM, assuming your program has tons of similar objects

Cons:

- trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method
- the code becomes much more complicated
  - new team members will always be wondering why the state of an entity was separated in such a way
