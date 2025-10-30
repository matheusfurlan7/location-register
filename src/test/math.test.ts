import { describe, it, expect } from 'vitest'

const add = (a: number, b: number): number => {
  return a + b
}

describe('add function', () => {
  it('should correctly add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('should handle zero', () => {
    expect(add(5, 0)).toBe(5)
  })
})
