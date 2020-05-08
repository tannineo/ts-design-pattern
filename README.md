# ts-design-pattern

Try design patterns in typescript.

It is (should be) also a demo for a pure ts app with:

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

## Creational Patterns

- [Builder](./src/creational/builder)
- [Singleton](./src/creational/singleton)
- [Factory](./src/creational/factory)
- [Prototype](./src/creational/prototype)

## Structural Patterns

- [Adapter](./src/structural/adapter)

## Other Concepts

- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
  - every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function
- [Open/Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
  - software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

## Reference

[Refactoring GURU - Design Patterns & Typescript](https://refactoringguru.cn/design-patterns/typescript)

## About

[The Unlisence](./LICENSE)

[tannineo](https://github.com/tannineo)
