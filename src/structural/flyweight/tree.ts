class TreeType {
  name: string
  color: string
  texture: string

  constructor(name: string, color: string, texture: string) {
    this.name = name
    this.color = color
    this.texture = texture
  }

  draw(x: number, y: number): string {
    return (
      'A Tree of name:' +
      this.name +
      ', color:' +
      this.color +
      ', texture:' +
      this.texture +
      ' is at x:' +
      x +
      ' y:' +
      y
    )
  }
}

class TreeTypeFactory {
  static treeTypes = [new TreeType('treeTypeA', 'green', 'some texture')]

  static findType(
    name: string,
    color: string,
    texture: string,
  ): TreeType | null {
    const result = TreeTypeFactory.treeTypes.filter(
      e => e.name === name && e.color === color && e.texture === texture,
    )

    if (result.length > 0) return result[0]
    return null
  }

  static getTreeType(name: string, color: string, texture: string): TreeType {
    let type = TreeTypeFactory.findType(name, color, texture)
    if (!type) {
      type = new TreeType(name, color, texture)
      TreeTypeFactory.treeTypes.push(type)
    }
    return type
  }
}

class Tree {
  x: number
  y: number
  type: TreeType

  constructor(x: number, y: number, type: TreeType) {
    this.x = x
    this.y = y
    this.type = type
  }

  draw(): string {
    return this.type.draw(this.x, this.y)
  }
}

export { TreeType, TreeTypeFactory, Tree }
