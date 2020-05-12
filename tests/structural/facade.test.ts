import { ExampleFacade, Subsystem1, Subsystem2 } from '@src/structural/facade'

test('test facade', () => {
  const facade = new ExampleFacade(new Subsystem1(), new Subsystem2())

  expect(facade.operation()).toBe(
    'Facade initializes subsystems:\nSubsystem1: Ready!\nSubsystem2: Get ready!\nFacade orders subsystems to perform the action:\nSubsystem1: Go!\nSubsystem2: Fire!',
  )
})
