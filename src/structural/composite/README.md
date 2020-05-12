# composite

use a tree structure to manage the code

## Pros and Cons

Pros:

- work with complex tree structures more conveniently: use polymorphism and recursion to your advantage
- introduce new element types into the app without breaking the existing code, which now works with the object tree
  - Open/Closed Principle

Cons:

- might be difficult to provide a common interface for classes whose functionality differs too much
  - in certain scenarios, you'd need to overgeneralize the component interface, making it harder to comprehend
