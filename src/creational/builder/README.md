# builder

## Pros and Cons

Pros:

- construct objects step-by-step, defer construction steps or run steps recursively
- reuse the same construction code when building various representations of products
- isolate complex construction code from the business logic of the product ([Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle))

Cons:

- the overall complexity of the code increases since the pattern requires creating multiple new classes
