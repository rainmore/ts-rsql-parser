import {
  DynamicArity,
  NAry,
}                    from '@/ast/Arity'
import { Operators } from '@/ast/Operator'
import {
  describe,
  expect,
  test,
}                    from '@jest/globals'


describe('Operators', () => {
  describe('EQUAL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.EQUAL
      expect(comparisonOperator.symbol).toBe('==')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('==')
    })
  })

  describe('NOT_EQUAL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.NOT_EQUAL
      expect(comparisonOperator.symbol).toBe('!=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('!=')
    })
  })

  describe('GREATER_THAN', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.GREATER_THAN
      expect(comparisonOperator.symbol).toBe('=gt=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBe('>')
      expect(`${comparisonOperator}`).toBe('=gt=')
    })
  })

  describe('GREATER_THAN_OR_EQUAL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.GREATER_THAN_OR_EQUAL
      expect(comparisonOperator.symbol).toBe('=ge=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBe('>=')
      expect(`${comparisonOperator}`).toBe('=ge=')
    })
  })

  describe('LESS_THAN', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.LESS_THAN
      expect(comparisonOperator.symbol).toBe('=lt=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBe('<')
      expect(`${comparisonOperator}`).toBe('=lt=')
    })
  })

  describe('LESS_THAN_OR_EQUAL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.LESS_THAN_OR_EQUAL
      expect(comparisonOperator.symbol).toBe('=le=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(1)
      expect(comparisonOperator.arity.max()).toBe(1)
      expect(comparisonOperator.altSymbol).toBe('<=')
      expect(`${comparisonOperator}`).toBe('=le=')
    })
  })

  describe('IN', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.IN
      expect(comparisonOperator.symbol).toBe('=in=')
      expect(comparisonOperator.arity).toBeInstanceOf(DynamicArity)
      expect(comparisonOperator.arity.min()).toBe(0)
      expect(comparisonOperator.arity.max()).toBe(Number.MAX_VALUE)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('=in=')
    })
  })

  describe('NOT_IN', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.NOT_IN
      expect(comparisonOperator.symbol).toBe('=out=')
      expect(comparisonOperator.arity).toBeInstanceOf(DynamicArity)
      expect(comparisonOperator.arity.min()).toBe(0)
      expect(comparisonOperator.arity.max()).toBe(Number.MAX_VALUE)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('=out=')
    })
  })

  describe('IS_NULL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.IS_NULL
      expect(comparisonOperator.symbol).toBe('=null=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(0)
      expect(comparisonOperator.arity.max()).toBe(0)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('=null=')
    })
  })

  describe('NOT_NULL', () => {
    test('should return expected value', () => {
      const comparisonOperator = Operators.NOT_NULL
      expect(comparisonOperator.symbol).toBe('=notnull=')
      expect(comparisonOperator.arity).toBeInstanceOf(NAry)
      expect(comparisonOperator.arity.min()).toBe(0)
      expect(comparisonOperator.arity.max()).toBe(0)
      expect(comparisonOperator.altSymbol).toBeUndefined()
      expect(`${comparisonOperator}`).toBe('=notnull=')
    })
  })

  describe('defaultOperators()', () => {
    test('should return expected value', () => {
      const operators = Operators.defaultOperators()

      expect(operators).toContain(Operators.EQUAL)
      expect(operators).toContain(Operators.NOT_EQUAL)
      expect(operators).toContain(Operators.GREATER_THAN)
      expect(operators).toContain(Operators.GREATER_THAN_OR_EQUAL)
      expect(operators).toContain(Operators.LESS_THAN)
      expect(operators).toContain(Operators.LESS_THAN_OR_EQUAL)
      expect(operators).toContain(Operators.IN)
      expect(operators).toContain(Operators.NOT_IN)
      expect(operators).toContain(Operators.IS_NULL)
      expect(operators).toContain(Operators.NOT_NULL)
    })
  })
})