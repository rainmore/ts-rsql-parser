import {
  AndNode,
  LogicalNode,
  OrNode,
  Node,
  ComparisonNode,
} from '@/ast/Node'
import {
  ComparisonOperator,
  LogicalOperator,
}                      from '@/ast/Operator'

export class NodesFactory {

  private _comparisonOperators: Map<string, ComparisonOperator> = new Map();

  constructor(private operators: Array<ComparisonOperator>) {
    if (operators === null || operators.length === 0) {
      throw new TypeError('operators must not be null, undefined or empty')
    }

    operators.forEach(operator => {
      this._comparisonOperators.set(operator.symbol, operator)
      if (operator.hasAltSymbol()) {
        this._comparisonOperators.set(operator.altSymbol!!, operator)
      }
    })
  }

  get comparisonOperators(): Map<string, ComparisonOperator> {
    return this._comparisonOperators
  }

  createLogicalNode(operator: LogicalOperator, children: Array<Node>): LogicalNode {
    switch (operator) {
      case LogicalOperator.AND:
        return new AndNode(children);
      case LogicalOperator.OR:
        return new OrNode(children);
      default:
        throw new TypeError("Unknown operator: " + operator);
    }
  }

  createComparisonNode(operatorToken: string, selector: string, args: Array<string>): ComparisonNode {
    const operator = this.comparisonOperators.get(operatorToken)
    if (operator === undefined) {
      throw new TypeError(`unsupported operator '${operatorToken}'`)
    }
    return new ComparisonNode(operator!!, selector, args)
  }

}