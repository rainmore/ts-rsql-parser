import { NodesFactory }       from '@/ast/NodesFactory'
import { ComparisonOperator } from '@/ast/Operator'


enum TokenKind {
  EOF = 0,
  ALPHA = 3,
  ESCAPED_CHAR = 4,
  UNRESERVED_STR = 5,
  SINGLE_QUOTED_STR = 6,
  DOUBLE_QUOTED_STR = 7,
  AND = 8,
  OR = 9,
  LPAREN = 10,
  RPAREN = 11,
  COMP_FIQL = 12,
  COMP_ALT = 13,
  DEFAULT = 0
}

enum TOKEN_IMAGE: Array<string> = [
  '<EOF>',
  '" "',
  '"\t"',
  '<ALPHA>',
  '<ESCAPED_CHAR>',
  '<UNRESERVED_STR>',
  '<SINGLE_QUOTED_STR>',
  '<DOUBLE_QUOTED_STR>',
  '<AND>',
  '<OR>',
  '"("',
  '")"',
  '<COMP_FIQL>',
  '<COMP_ALT>'
]

interface TokenNode<T extends TokenKind> {
  kind: T
}

interface TokenValueNode<T extends TokenKind> extends TokenNode<T> {
  value: string
}

type TokenType =
  TokenNode<TokenKind.EOF> |
  TokenNode<TokenKind.ALPHA> |
  TokenNode<TokenKind.ESCAPED_CHAR> |
  TokenNode<TokenKind.UNRESERVED_STR> |
  TokenValueNode<TokenKind.SINGLE_QUOTED_STR> |
  TokenValueNode<TokenKind.DOUBLE_QUOTED_STR> |
  TokenNode<TokenKind.AND> |
  TokenNode<TokenKind.OR> |
  TokenNode<TokenKind.LPAREN> |
  TokenNode<TokenKind.RPAREN> |
  TokenNode<TokenKind.COMP_FIQL> |
  TokenNode<TokenKind.COMP_ALT> |
  TokenNode<TokenKind.DEFAULT>


class Token<T extends TokenKind> {
  kind: T
  beginLine: number
  beginColumn: number
  endLine: number
  endColumn: number
  image: string
  next: Token
  specialToken: Token


  toString(): string {
    return this.image
  }

  static of(kind: number, image: string): Token {
    const token = new Token()
    token.image = image
    return token
  }

}

export class Parser {

  private tokenStringMap: Map<string, TokenKind> = new Map<string, TokenKind>(
    [
      ['<EOF>', TokenKind.EOF],
      // ['" "', TokenKind.EOF],
      // ['"\t"', TokenKind.EOF],
      // ['<ALPHA>', TokenKind.EOF],
      ['<ESCAPED_CHAR>', TokenKind.ESCAPED_CHAR],
      ['<UNRESERVED_STR>', TokenKind.UNRESERVED_STR],
      ['<SINGLE_QUOTED_STR>', TokenKind.SINGLE_QUOTED_STR],
      ['<DOUBLE_QUOTED_STR>', TokenKind.DOUBLE_QUOTED_STR],
      ['<AND>', TokenKind.AND],
      ['<OR>', TokenKind.OR],
      ['"("', TokenKind.LPAREN],
      ['")"', TokenKind.RPAREN],
      ['<COMP_FIQL>', TokenKind.COMP_FIQL],
      ['<COMP_ALT>', TokenKind.COMP_ALT],
    ]
  )

  constructor(private nodesFactory: NodesFactory) {

  }

  tokeniser(input: string): Array<TokenType> {
    const results: Array<TokenType> = []
    let currentPosition = 0

    while (currentPosition < input.length) {
      // Process token, increment currentPosition
      const currentToken = input[currentPosition]

      // Our language doesn't care about whitespace.
      if (currentToken === ' ') {
        currentPosition++
        continue
      }

      let didMatch: boolean = false

      for (const { key, value } of tokenStringMap) {
        if (!lookaheadString(key)) {
          continue
        }

        out.push(value)
        currentPosition += key.length
        didMatch = true
      }

      if (didMatch) continue
    }

    return results
  }

}