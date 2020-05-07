# abstractFactory

abstract the factory and products with interfaces

every kind of product has its own factory

## Pros and Cons

Pros:

- be sure that the products you’re getting from a factory are compatible with each other
- avoid tight coupling between concrete products and client code
- extract the product creation code into one place, making the code easier to support
  - Single Responsibility Principle
- introduce new variants of products without breaking existing client code
  - Open/Closed Principle

Cons:

- code may become more complicated than it should be
  - since a lot of new interfaces and classes are introduced along with the pattern
