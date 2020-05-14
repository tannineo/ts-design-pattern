# ts-design-pattern

Try design patterns in typescript.

It is (should be) also a demo for a pure `ts` app with:

- a step to typescript's interface/typing features
- a consistent code style
  - a linter (eslint)
  - a formatter (prettier)
- a test framework (jest)
- a githook management (husky)

TOC:

- [ts-design-pattern](#ts-design-pattern)
  - [TODO](#todo)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Other Concepts](#other-concepts)
  - [Reference](#reference)
  - [About](#about)

## TODO

- [ ] overall relations
- [ ] each pattern with UML
- [ ] for each patterns, adding comparisons with other patterns

## Creational Patterns

- [Builder](./src/creational/builder)
- [Singleton](./src/creational/singleton)
  - TODO working with IOC lib
- [Factory](./src/creational/factory)
- [Prototype](./src/creational/prototype)

## Structural Patterns

- [Adapter](./src/structural/adapter)
  - with a handbook mixins example
- [Bridge](./src/structual/bridge)
- [Decorator](./src/structural/decorator)
  - with a example of `ts` experimental decorator annotation
- [Facade](./src/structural/facade)
- [Composite](./src/structural/composite)
- [Flyweight](./src/structural/flyweight)
- [Proxy](./src/structural/proxy)

## Other Concepts

- [S.O.L.I.D Principles](https://en.wikipedia.org/wiki/SOLID)
  - [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
    - every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function
  - [Open/Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
    - software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
  - [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Behavioral_subtyping)
  - [Interface Segregation Principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
  - [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
- [Anit-pattern](https://en.wikipedia.org/wiki/Anti-pattern)
  - a common response to a recurring problem that is usually ineffective and risks being highly counterproductive
  - [God Object](https://en.wikipedia.org/wiki/God_object)
    - an object that knows too much or does too much

## Reference

- [Refactoring GURU - Design Patterns & Typescript](https://refactoringguru.cn/design-patterns/typescript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

## About

[The Unlisence](./LICENSE)

[tannineo](https://github.com/tannineo)
