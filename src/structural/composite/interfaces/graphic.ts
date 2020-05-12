interface Graphic {
  move(x: number, y: number): [number, number]
  draw(): string
}

export { Graphic }
