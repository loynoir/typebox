import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index.js'

describe('value/convert/Unknown', () => {
  const T = Type.Unknown()
  it('Should convert null', () => {
    const V = null
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert undefined', () => {
    const V = undefined
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert string', () => {
    const V = 'hello'
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert number', () => {
    const V = 42
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert boolean', () => {
    const V = true
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert object', () => {
    const V = { x: 1 }
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
  it('Should convert array', () => {
    const V = [1, 2, 3]
    const R = Value.Convert(T, V)
    Assert.deepEqual(R, V)
  })
})
