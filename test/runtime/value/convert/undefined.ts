import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index.js'

describe('value/convert/Undefined', () => {
  const T = Type.Undefined()
  it('Should convert from string 1', () => {
    const R = Value.Convert(T, 'undefined')
    Assert.deepEqual(R, undefined)
  })
  it('Should convert from string 2', () => {
    const R = Value.Convert(T, 'hello')
    Assert.deepEqual(R, 'hello')
  })
})
