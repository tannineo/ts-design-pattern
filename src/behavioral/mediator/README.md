# mediator

## Pros and Cons

Pros:

- extract the communications between various components into a single place, making it easier to comprehend and maintain
  - Single Responsibility Principle
- introduce new mediators without having to change the actual components
  - Open/Closed Principle
- reduce coupling between various components of a program
- reuse individual components more easily

Cons:

- Over time a mediator can evolve into a God Object

## Extended: Component Tree and State Uplifting

The parent nodes in component tree act like a mediator(?) to the child nodes.

The state is uplifted to the parent node.

See:

- https://reactjs.org/docs/lifting-state-up.html#lifting-state-up
