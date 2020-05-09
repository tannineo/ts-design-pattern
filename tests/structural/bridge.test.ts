import {
  RemoteControl,
  AdvancedRemoteControl,
} from '@src/structural/bridge/remotes'
import { Radio, TV } from '@src/structural/bridge/devices'

test('test bridge', () => {
  const tv = new TV()
  const radio = new Radio()
  const remote = new RemoteControl(tv)

  remote.volumeDown()
  expect(tv.getVolume()).toBe(0)

  const advRemote = new AdvancedRemoteControl(radio)
  advRemote.volumeUp(23)
  expect(radio.getVolume()).toBe(23)
  advRemote.mute()
  expect(radio.getVolume()).toBe(0)
})
