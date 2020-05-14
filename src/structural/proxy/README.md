# proxy

Use a Proxy class to accept all the work but actually let the original class do the job.

Both Proxy class and the original class are implementing the same interface.

No implement provided for Proxy pattern.

## ES6 Proxy

The proxy pattern for general object.

The MDN web docs page provides a group of examples:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## Pros and Cons

Pros:

- control the service object without clients knowing about it
- manage the lifecycle of the service object when clients don’t care about it
- the proxy works even if the service object isn’t ready or is not available
  - like mocking
- introduce new proxies without changing the service or clients
  - Open/Closed Principle

Cons:

- the code may become more complicated since you need to introduce a lot of new classes
- the response from the service might get delayed
