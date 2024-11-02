import { NodesFactory } from '@/ast/NodesFactory'
import { Node } from '@/ast/Node'
import { ComparisonOperator } from '@/ast/Operator'


export class RSQLParser {
  private nodesFactory: NodesFactory

  constructor(operators: Array<ComparisonOperator>) {
    this.nodesFactory = new NodesFactory(operators)
  }

  parse(query: string): Node {
    if (query === null || query.length === 0) {
      throw new TypeError('query must not be null or empty')
    }

    let node: Node = null

    return node
  }

}