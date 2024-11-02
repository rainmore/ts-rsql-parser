import { ComparisonNode } from '@/ast/Node'
import { Operators }      from '@/ast/Operator'
import {
  describe,
  expect,
  test,
}                         from '@jest/globals'


describe('ComparisonNode', () => {
  describe('operator()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      expect(comparisonNode.operator).toBe(Operators.EQUAL)
    })
  })

  describe('selector()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      expect(comparisonNode.selector).toBe('id')
    })
  })

  describe('arguments()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      expect(comparisonNode.arguments.length).toBe(1)
      expect(comparisonNode.arguments[0]).toBe('1')
    })
  })

  describe('withOperator()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1']).withOperator(Operators.NOT_EQUAL)
      expect(comparisonNode.operator).toBe(Operators.NOT_EQUAL)
      expect(comparisonNode.selector).toBe('id')
      expect(comparisonNode.arguments.length).toBe(1)
      expect(comparisonNode.arguments[0]).toBe('1')
    })
  })

  describe('withSelector()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1']).withSelector('userId')
      expect(comparisonNode.operator).toBe(Operators.EQUAL)
      expect(comparisonNode.selector).toBe('userId')
      expect(comparisonNode.arguments.length).toBe(1)
      expect(comparisonNode.arguments[0]).toBe('1')
    })
  })

  describe('withArguments()', () => {
    test('should return expected value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1']).withArguments(['2'])
      expect(comparisonNode.operator).toBe(Operators.EQUAL)
      expect(comparisonNode.selector).toBe('id')
      expect(comparisonNode.arguments.length).toBe(1)
      expect(comparisonNode.arguments[0]).toBe('2')
    })
  })

  describe('toString()', () => {
    test('should return expected value given a single value', () => {
      const comparisonNode = new ComparisonNode(Operators.EQUAL, 'id', ['1'])
      expect(`${comparisonNode}`).toBe('id==\'1\'')
    })

    test('should return expected value given multiple values', () => {
      const comparisonNode = new ComparisonNode(Operators.IN, 'id', ['1', '2'])
      expect(`${comparisonNode}`).toBe('id=in=(\'1\',\'2\')')
    })
  })
})