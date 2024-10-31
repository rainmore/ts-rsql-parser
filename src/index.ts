import { bar } from "@/utils"

export function foo(str: string) {
  const lala = bar(str)
  return `hello, ${lala}`
}