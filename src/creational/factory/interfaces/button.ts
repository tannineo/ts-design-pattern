interface Button {
  info: string

  render(): void

  onClick(cb: Function): void
}

export { Button }
