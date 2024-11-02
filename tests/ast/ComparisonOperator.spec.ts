import { NAry }               from '@/ast/Arity'
import { ComparisonOperator } from '@/ast/Operator'
import {
  describe,
  expect,
  test,
}                             from '@jest/globals'

describe('ComparisonOperator', () => {
  describe('Given invalid symbal parameter', () => {
    test('it should throw TypeError given empty symbal', () => {
      const symbal = ''
      const arity = new NAry(1)
      const comparisonOperator = () => {
        return new ComparisonOperator(symbal, arity)
      }
      expect(comparisonOperator).toThrow(TypeError)
      expect(comparisonOperator).toThrow('symbol must not be null or empty')
    })

    test('it should throw TypeError given invalid symbal', () => {
      const symbal = '???'
      const arity = new NAry(1)
      const comparisonOperator = () => {
        return new ComparisonOperator(symbal, arity)
      }
      expect(comparisonOperator).toThrow(TypeError)
      expect(comparisonOperator).toThrow('invalid symbol format')
    })
  })

  describe('Given invalid _altSymbol parameter', () => {
    test('it should throw TypeError given empty _altSymbol', () => {
      const symbal = '=='
      const arity = new NAry(1)
      const altSymbol = ''
      const comparisonOperator = () => {
        return new ComparisonOperator(symbal, arity, altSymbol)
      }
      expect(comparisonOperator).toThrow(TypeError)
      expect(comparisonOperator).toThrow('_altSymbol must not be empty')
    })

    test('it should throw TypeError given invalid symbal', () => {
      const symbal = '=='
      const arity = new NAry(1)
      const altSymbol = '???'
      const comparisonOperator = () => {
        return new ComparisonOperator(symbal, arity, altSymbol)
      }
      expect(comparisonOperator).toThrow(TypeError)
      expect(comparisonOperator).toThrow('invalid _altSymbol format')
    })
  })

  describe('hasAltSymbol()', () => {
    test('should return true given valid altSymbol', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const altSymbol = '>'
      const comparisonOperator = new ComparisonOperator(symbal, arity, altSymbol)
      expect(comparisonOperator.hasAltSymbol()).toBeTruthy()
    })

    test('should return false given no altSymbol parameter', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(comparisonOperator.hasAltSymbol()).toBeFalsy()
    })
  })

  describe('symbol()', () => {
    test('should return expected value', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(comparisonOperator.symbol).toBe(symbal)
    })
  })

  describe('toString()', () => {
    test('should return expected value', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(`${comparisonOperator}`).toBe(symbal)
    })
  })

  describe('symbol()', () => {
    test('should return expected value', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(comparisonOperator.symbol).toBe(symbal)
    })
  })

  describe('arity()', () => {
    test('should return expected value', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(comparisonOperator.arity).toBe(arity)
    })
  })

  describe('altSymbol()', () => {
    test('should return undefined with no alterSymbal set', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const comparisonOperator = new ComparisonOperator(symbal, arity)
      expect(comparisonOperator.altSymbol).toBeUndefined()
    })

    test('should return expected value', () => {
      const symbal = '=gt='
      const arity = new NAry(1)
      const altSymbol = '>'
      const comparisonOperator = new ComparisonOperator(symbal, arity, altSymbol)
      expect(comparisonOperator.altSymbol).toBe(altSymbol)
    })
  })
})