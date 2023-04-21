import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index.js'

describe('value/create/Boolean', () => {
  it('Should create value', () => {
    const T = Type.Boolean()
    Assert.deepEqual(Value.Create(T), false)
  })
  it('Should create default', () => {
    const T = Type.Boolean({ default: true })
    Assert.deepEqual(Value.Create(T), true)
  })
})
