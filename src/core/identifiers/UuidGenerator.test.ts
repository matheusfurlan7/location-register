import { describe, it, expect } from 'vitest'
import { UuidGenerator } from './UuidGenerator'

describe('UuidGenerator', () => {
  it('should generate a valid UUID string', () => {
    const generator = new UuidGenerator()
    const id = generator.generate()

    expect(id).toBeTypeOf('string')
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  })
})
