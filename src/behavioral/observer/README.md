# observer

AKA. Event-Subscriber, Listener

## Pros and Cons

Pros:

- introduce new subscriber classes without having to change the publisher’s code
  - vice versa if there’s a publisher interface
  - Open/Closed Principle
- establish relations between objects at runtime

Cons:

- subscribers are notified in random order (depending on runtime subscription)

## Observer in ReactiveX (RxJS)

TODO
