# adapter

To notice that typescript DO NOT support multiple `extends` but multiple interface to `implements`

A workaround to '`extends`' multiple classes is `mixins`, see [the handbook section](https://www.typescriptlang.org/docs/handbook/mixins.html)

## Pros and Cons

Pros:

- separate the interface or data conversion code from the primary business logic of the program
  - Single Responsibility Principle
- introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface
  - Open/Closed Principle

Cons:

- the overall complexity of the code increases because you need to introduce a set of new interfaces and classes
  - sometimes it’s simpler just to change the service class so that it matches the rest of your code
