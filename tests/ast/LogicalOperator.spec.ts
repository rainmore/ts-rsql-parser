import { LogicalOperator } from '@/ast/Operator'
import {
  describe,
  expect,
  test,
}                          from '@jest/globals'

describe('LogicalOperator', () => {
  test('should return expected value', () => {
    expect(LogicalOperator.AND).toBe(';')
    expect(LogicalOperator.OR).toBe(',')
  })
})