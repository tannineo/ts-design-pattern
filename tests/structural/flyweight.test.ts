import { Tree, TreeType, TreeTypeFactory } from '@src/structural/flyweight/tree'

test('test flyweight', () => {
  const type1 = TreeTypeFactory.getTreeType('type1', 'green', 'texture1')
  const type2 = TreeTypeFactory.getTreeType('type2', 'yellow', 'texture2')

  const tree1 = new Tree(1, 2, type1)
  const tree2 = new Tree(3, 4, type2)

  expect(tree1.draw()).toBe(
    'A Tree of name:type1, color:green, texture:texture1 is at x:1 y:2',
  )
  expect(tree2.draw()).toBe(
    'A Tree of name:type2, color:yellow, texture:texture2 is at x:3 y:4',
  )
})
