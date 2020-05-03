/**
 * The builder pattern using the example from the book:
 *
 * https://refactoring.guru/design-patterns/builder
 *
 * To notice that we are making a builder chain, like the annotation "@Builder"
 * of lombok in Java
 */
interface Builder<T> {
  build(): T

  reset(): Builder<T>

  setSeats(seats: string | number): Builder<T>

  setEngine(engine: string): Builder<T>

  setTripComputer(tripComputer: string): Builder<T>

  setGPS(gps: string): Builder<T>

  // // additional little things
  // [propName: string]: any
}

export { Builder }
