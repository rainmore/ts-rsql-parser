import { ComparisonOperator, LogicalOperator } from './Operator'
import { RSQLVisitor }        from './RSQLVisitor'

export interface Node {

  accept<R, A>(var1: RSQLVisitor<R, A>, var2: A): R

}


export class ComparisonNode implements Node {

  get operator(): ComparisonOperator {
    return this._operator
  }

  get selector(): string {
    return this._selector
  }

  get arguments(): Array<String> {
    return this._arguments
  }

  constructor(private _operator: ComparisonOperator, private _selector: string, private _arguments: Array<string>) {
    if (_operator === null) {
      throw new TypeError('operator must not be null')
    }

    if (_selector === null || _selector.length === 0) {
      throw new TypeError('selector must not be null or empty')
    }

    if (_arguments === null) {
      throw new TypeError('arguments must not be null')
    }

    ComparisonNode.validate(_operator, _arguments.length)
  }

  withOperator(newOperator: ComparisonOperator): ComparisonNode {
    return new ComparisonNode(newOperator, this._selector, this._arguments)
  }

  withSelector(newSelector: string): ComparisonNode {
    return this._selector === newSelector ? this : new ComparisonNode(this._operator, newSelector, this._arguments)
  }

  withArguments(newArguments: Array<string>): ComparisonNode {
    return new ComparisonNode(this._operator, this._selector, newArguments)
  }

  private static validate(operator: ComparisonOperator, argc: number) {
    const arity = operator.arity
    const min = arity.min()
    const max = arity.max()

    if (argc < min || argc > max) {
      if (min === max) {
        throw new RangeError(`operator '${operator.symbol}' can have exactly ${max} argument(s), but got ${argc}`)
      }
      else {
        throw new RangeError(`operator '${operator.symbol}' can have from ${min} to ${max}argument(s), but got ${argc}`)
      }
    }
  }

  toString(): string {
    const arity = this._operator.arity
    const args: string[] = [
      this._selector,
      this.operator.toString(),
    ]

    if (arity.max() > 1) {
      args.push(`('${this._arguments.join('\',\'')}')`)
    }
    else if (this._arguments.length > 0) {
      args.push(`'${this._arguments[0]}'`)
    }

    return args.join('')
  }

  accept<R, A>(visitor: RSQLVisitor<R, A>, param: A): R {
    // @ts-ignore
    return visitor.visit(this, param)
  }

}

export interface LogicalNode extends Node {

  operator(): LogicalOperator
  children(): Array<Node>

}

abstract class NodeStringUtils {

  static join(children: Array<Node>, separator: string) {
    const result: string[] = []

    children.forEach(node => {
      if (node instanceof ComparisonNode) {
        result.push((node as ComparisonNode).toString())
      }
      else if (node instanceof AndNode) {
        const childrenStr = this.join(node.children(), node.operator())
        result.push(`(${childrenStr})`)
      }
      else if (node instanceof OrNode) {
        const childrenStr = this.join(node.children(), node.operator())
        result.push(`(${childrenStr})`)
      }
    })

    return result.join(separator)
  }

}

export class OrNode implements LogicalNode {
  children(): Array<Node> {
    return this._children
  }

  operator(): LogicalOperator {
    return LogicalOperator.OR
  }

  constructor(private _children: Array<Node>) {
  }

  accept<R, A>(visitor: RSQLVisitor<R, A>, param: A): R {
    return visitor.visit(this, param)
  }

  toString(): string {
    return NodeStringUtils.join(this._children, this.operator())
  }
}

export class AndNode implements LogicalNode {
  children(): Array<Node> {
    return this._children
  }

  operator(): LogicalOperator {
    return LogicalOperator.AND
  }

  constructor(private _children: Array<Node>) {
  }

  accept<R, A>(visitor: RSQLVisitor<R, A>, param: A): R {
    return visitor.visit(this, param)
  }

  toString(): string {
    return NodeStringUtils.join(this._children, this.operator())
  }
}