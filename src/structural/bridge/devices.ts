interface Device {
  isEnabled(): boolean
  enable(): void
  disable(): void

  getVolume(): number
  setVolume(volume: number): void

  getChannel(): number
  setChannel(channel: number): void
}

/**
 * TV and Radio are actually the same implementation
 */

class TV implements Device {
  private enabled = false
  private volume = 0
  private channel = 0

  isEnabled(): boolean {
    return this.enabled
  }

  enable(): void {
    this.enabled = true
  }

  disable(): void {
    this.enabled = false
  }

  getVolume(): number {
    return this.volume
  }

  setVolume(volume: number): void {
    this.volume = volume
  }

  getChannel(): number {
    return this.channel
  }

  setChannel(channel: number): void {
    this.channel = channel
  }
}

class Radio implements Device {
  private enabled = false
  private volume = 0
  private channel = 0

  isEnabled(): boolean {
    return this.enabled
  }

  enable(): void {
    this.enabled = true
  }

  disable(): void {
    this.enabled = false
  }

  getVolume(): number {
    return this.volume
  }

  setVolume(volume: number): void {
    this.volume = volume
  }

  getChannel(): number {
    return this.channel
  }

  setChannel(channel: number): void {
    this.channel = channel
  }
}

export { Device, TV, Radio }
