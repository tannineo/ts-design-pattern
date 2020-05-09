# bridge

The bridge has two parts:

- an 'implementation' interface
  - to define the actual operations to implement
- an 'abstract' super class
  - use the 'implementation' interface to do works
  - easy to extend 'abstract' super class

## Pros and Cons

Pros:

- create platform-independent classes and apps
- the client code works with high-level abstractions
  - it isn't exposed to the platform details
- new abstractions and implementations can be introduced independently from each other
  - Open/Closed Principle
- focus on high-level logic in the abstraction and on platform details in the implementation
  - Single Responsibility Principle

Cons:

- the code might be more complicated by applying the pattern to a highly cohesive class
