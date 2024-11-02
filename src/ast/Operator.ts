import {
  Arity,
  DynamicArity,
  NAry,
} from './Arity'

export enum LogicalOperator {
  AND = ';',
  OR = ','
}

export class ComparisonOperator {
  private SYMBOL_PATTERN = /=[a-zA-Z]*=|[><]=?|!=/g

  get symbol(): string {
    return this._symbol
  }

  get arity(): Arity {
    return this._arity
  }

  get altSymbol(): string | undefined {
    return this._altSymbol
  }

  constructor(private _symbol: string, private _arity: Arity, private _altSymbol?: string) {
    if (_symbol === null || _symbol.length === 0) {
      throw new TypeError('symbol must not be null or empty')
    }

    if (!this.isValidSymbal(_symbol)) {
      throw new TypeError('invalid symbol format')
    }

    if (_arity === null) {
      throw new TypeError('_arity must not be null')
    }

    if (_altSymbol !== undefined && _altSymbol?.length === 0) {
      throw new TypeError('_altSymbol must not be empty')
    }
  }

  hasAltSymbol(): boolean {
    return this._altSymbol !== 'undefined'
  }

  private isValidSymbal(symbol: string): boolean {
    return symbol.length > 0 && symbol.match(this.SYMBOL_PATTERN) !== null
  }

  toString(): string {
    return `${this._symbol}`
  }

}

abstract class Operators {

  static EQUAL: ComparisonOperator                 = new ComparisonOperator('==', new NAry(1))
  static NOT_EQUAL: ComparisonOperator             = new ComparisonOperator('!=', new NAry(1))
  static GREATER_THAN: ComparisonOperator          = new ComparisonOperator('=gt=', new NAry(1), '>')
  static GREATER_THAN_OR_EQUAL: ComparisonOperator = new ComparisonOperator('=ge=', new NAry(1), '>=')
  static LESS_THAN: ComparisonOperator             = new ComparisonOperator('=lt=', new NAry(1), '<')
  static LESS_THAN_OR_EQUAL: ComparisonOperator    = new ComparisonOperator('=le=', new NAry(1), '<=')
  static IN: ComparisonOperator                    = new ComparisonOperator('=in=', new DynamicArity(0, Number.MAX_VALUE))
  static NOT_IN: ComparisonOperator                = new ComparisonOperator('=out=', new DynamicArity(0, Number.MAX_VALUE))
  static IS_NULL: ComparisonOperator               = new ComparisonOperator('=null=', new NAry(0))
  static NOT_NULL: ComparisonOperator              = new ComparisonOperator('=notnull=', new NAry(0))

  static defaultOperators(): Array<ComparisonOperator> {
    return [
      this.EQUAL,
      this.NOT_EQUAL,
      this.GREATER_THAN,
      this.GREATER_THAN_OR_EQUAL,
      this.LESS_THAN,
      this.LESS_THAN_OR_EQUAL,
      this.IN,
      this.NOT_IN,
      this.IS_NULL,
      this.NOT_NULL
    ]
  }
}