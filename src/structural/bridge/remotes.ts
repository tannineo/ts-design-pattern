import { Device } from './devices'

const MIN_VOLUME = 0
const MAX_VOLUME = 100
const MIN_CHANNEL = 0
const MAX_CHANNEL = 999

class RemoteControl {
  protected device: Device

  constructor(device: Device) {
    this.device = device
  }

  togglePower(): boolean {
    if (this.device.isEnabled()) this.device.disable()
    else this.device.enable

    return this.device.isEnabled()
  }

  volumeDown(modifier = 10): number {
    const curVol = this.device.getVolume()
    this.device.setVolume(
      curVol - modifier > MIN_VOLUME ? curVol - modifier : MIN_VOLUME,
    )
    return this.device.getVolume()
  }

  volumeUp(modifier = 10): number {
    const curVol = this.device.getVolume()
    this.device.setVolume(
      curVol + modifier < MAX_VOLUME ? curVol + modifier : MAX_VOLUME,
    )
    return this.device.getVolume()
  }

  channelDown(): number {
    const curChannel = this.device.getChannel()
    this.device.setChannel(
      curChannel - 1 > MIN_CHANNEL ? curChannel - 1 : MIN_CHANNEL,
    )
    return this.device.getChannel()
  }

  channelUp(): number {
    const curChannel = this.device.getChannel()
    this.device.setChannel(
      curChannel + 1 < MAX_CHANNEL ? curChannel + 1 : MAX_CHANNEL,
    )
    return this.device.getChannel()
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(MIN_VOLUME)
  }
}

export { RemoteControl, AdvancedRemoteControl }
