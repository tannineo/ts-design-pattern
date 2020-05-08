# adapter

To notice that typescript DO NOT support multiple `extends` but multiple interface to `implements`

A workaround to '`extends`' multiple classes is `mixins`, see:

- the handbook section: https://www.typescriptlang.org/docs/handbook/mixins.html
- the Typescript Deep Dive section: https://www.typescriptlang.org/docs/handbook/mixins.html
- this blog post: https://medium.com/@michaelolof/typescript-mix-yet-another-mixin-library-29c7a349b47d
  - issue about mixins: https://github.com/Microsoft/TypeScript/pull/13743#issuecomment-299540915
  - mixins lib:
    - https://github.com/likerRr/ts-mixin
    - https://www.npmjs.com/package/ts-mixins

They are basically functions to add properties to existing constructors.

There seems to have no proper ways dealing with constructor's args, the mixins seems to be good to share the methods among super classes.

For real practice it's better using multiple interfaces

## Implementations

Here we have two solutions:

- the 'official' pseudocode, using one-class-extends
  - see [pegsSingle.ts](./pegsSingle.ts)
- multiple inheritance using `mixins`
  - see [pegsMulti.ts](./pegsMulti.ts)

## Pros and Cons

Pros:

- separate the interface or data conversion code from the primary business logic of the program
  - Single Responsibility Principle
- introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface
  - Open/Closed Principle

Cons:

- the overall complexity of the code increases because you need to introduce a set of new interfaces and classes
  - sometimes it's simpler just to change the service class so that it matches the rest of your code
