# factory

One concrete factory to produce one kind of product

Using abstract classes and interfaces to unify factories and products

## Pros and Cons

Pros:

- avoid tight coupling between the creator and the concrete products
- Single Responsibility Principle
  - the product creation code can be moved into one place in the program, making the code easier to support
- Open/Closed Principle
  - new types of products can be introduced into the program without breaking existing client code

Cons:

- the code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern
  - the best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes
