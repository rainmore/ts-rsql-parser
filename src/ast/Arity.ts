export interface Arity {
  min(): number,

  max(): number,
}

export class DynamicArity implements Arity {

  constructor(private minValue: number, private maxValue: number) {
    if (minValue < 0) {
      throw new RangeError('min must be positive or zero')
    } else if (maxValue < 0) {
      throw new RangeError('max must be positive or zero')
    } else if (minValue > maxValue) {
      throw new RangeError('min must be less than or equal to max')
    }
  }

  min(): number {
    return this.minValue
  }

  max(): number {
    return this.maxValue
  }

}

export class NAry implements Arity {

  constructor(private value: number) {
    if (value < 0) {
      throw new RangeError('value must be positive or zero')
    }
  }

  min(): number {
    return this.value
  }

  max(): number {
    return this.value
  }

}