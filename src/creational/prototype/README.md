# prototype

provide a clone method

## Pros and Cons

Pros:

- clone objects without coupling to their concrete classes
- get rid of repeated initialization code in favor of cloning pre-built prototypes
- produce complex objects more conveniently (?)
- get an alternative to inheritance when dealing with configuration presets for complex objects

Cons:

- cloning complex objects that have circular references might be very tricky
  - since we often don't know (completely) the actual implementation inside the object
