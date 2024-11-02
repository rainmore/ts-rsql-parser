import {
  AndNode,
  ComparisonNode,
  OrNode,
} from '@/ast/Node'


export interface RSQLVisitor<R, A> {

  visit(var1: AndNode, var2: A): R
  visit(var1: OrNode, var2: A): R
  visit(var1: ComparisonNode, var2: A): R

}
