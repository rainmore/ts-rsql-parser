import { foo } from '@/index';
import { describe, expect, test } from '@jest/globals';

describe('foo module', () => {
  test('give "world" will return "hello, world"', () => {
    const str = foo('world')
    expect(str).toBe('hello, WORLD')
  });
});