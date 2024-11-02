import {
  DynamicArity,
  NAry,
} from '@/ast/Arity'
import {
  describe,
  expect,
  test,
} from '@jest/globals'


describe('Arity', () => {
  describe('DynamicArity', () => {
    describe('given invalid number', () => {
      describe('given negative min value', () => {
        test('it should throw RangeError', () => {
          const minNumber = -3
          const maxNumber = 1
          const dynamicArity = () => {
            return new DynamicArity(minNumber, maxNumber)
          }
          expect(dynamicArity).toThrow(RangeError)
          expect(dynamicArity).toThrow('min must be positive or zero')
        })
      })

      describe('given negative max value', () => {
        test('it should throw RangeError', () => {
          const minNumber = 1
          const maxNumber = -1
          const dynamicArity = () => {
            return new DynamicArity(minNumber, maxNumber)
          }
          expect(dynamicArity).toThrow(RangeError)
          expect(dynamicArity).toThrow('max must be positive or zero')
        })
      })

      describe('given min value greater than max value', () => {
        test('it should throw RangeError', () => {
          const minNumber = 1
          const maxNumber = 0
          const dynamicArity = () => {
            return new DynamicArity(minNumber, maxNumber)
          }
          expect(dynamicArity).toThrow(RangeError)
          expect(dynamicArity).toThrow('min must be less than or equal to max')
        })
      })
    })

    describe('given zero', () => {
      test('it should return expected value', () => {
        const minNumber = 0
        const maxNumber = 0
        const dynamicArity = new DynamicArity(minNumber, maxNumber)
        expect(dynamicArity.min()).toBe(0)
        expect(dynamicArity.max()).toBe(0)
      })
    })

    describe('given valid number', () => {
      test('it should return expected value ', () => {
        const minNumber = 1
        const maxNumber = 2
        const dynamicArity = new DynamicArity(minNumber, maxNumber)
        expect(dynamicArity.min()).toBe(minNumber)
        expect(dynamicArity.max()).toBe(maxNumber)
      })
    })
  })

  describe('NAry', () => {
    describe('given invalid number', () => {
      describe('given negative value', () => {
        test('it should throw RangeError', () => {
          const number = -1
          const nAry = () => {
            return new NAry(number)
          }
          expect(nAry).toThrow(RangeError)
          expect(nAry).toThrow('value must be positive or zero')
        })
      })
    })

    describe('given zero', () => {
      test('it should return expected value', () => {
        const number = 0
        const nAry = new NAry(number)
        expect(nAry.min()).toBe(number)
        expect(nAry.min()).toBe(number)
      })
    })

    describe('given valid number', () => {
      test('it should return expected value ', () => {
        const number = 1
        const nAry = new NAry(number)
        expect(nAry.min()).toBe(number)
        expect(nAry.max()).toBe(number)
      })
    })
  })
})