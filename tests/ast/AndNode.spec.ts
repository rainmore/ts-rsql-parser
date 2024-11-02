import {
  AndNode,
  ComparisonNode,
} from '@/ast/Node'
import {
  LogicalOperator,
  Operators,
} from '@/ast/Operator'
import {
  describe,
  expect,
  test,
} from '@jest/globals'


describe('AndNode', () => {
  describe('children()', () => {
    test('should return expected value', () => {
      const comparisonNode1 = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      const comparisonNode2 = new ComparisonNode(Operators.IN, 'id', ['1', '2'])
      const children = [comparisonNode1, comparisonNode2]
      const andNode = new AndNode(children)

      expect(andNode.children().length).toBe(2)
      expect(andNode.children()).toBe(children)
    })
  })

  describe('operator()', () => {
    test('should return expected value', () => {
      const comparisonNode1 = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      const comparisonNode2 = new ComparisonNode(Operators.IN, 'id', ['1', '2'])
      const children = [comparisonNode1, comparisonNode2]
      const andNode = new AndNode(children)

      expect(andNode.operator()).toBe(LogicalOperator.AND)
    })
  })

  describe('toString()', () => {
    test('should return expected value', () => {
      const comparisonNode1 = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      const comparisonNode2 = new ComparisonNode(Operators.IN, 'id', ['1', '2'])
      const children = [comparisonNode1, comparisonNode2]
      const andNode = new AndNode(children)

      expect(`${andNode}`).toBe('(id==\'1\';id=in=(\'1\',\'2\'))')
    })
  })
})