import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index.js'

describe('value/create/BigInt', () => {
  it('Should create value', () => {
    const T = Type.BigInt()
    Assert.deepEqual(Value.Create(T), BigInt(0))
  })
  it('Should create default', () => {
    const T = Type.BigInt({ default: true })
    Assert.deepEqual(Value.Create(T), true)
  })
})
