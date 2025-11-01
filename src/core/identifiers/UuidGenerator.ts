import { randomUUID } from 'crypto'
import { IUniqueIdGenerator } from './IUniqueIdGenerator'

export class UuidGenerator implements IUniqueIdGenerator {
  generate(): string {
    return randomUUID()
  }
}
