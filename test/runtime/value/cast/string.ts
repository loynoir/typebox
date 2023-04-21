import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index.js'

describe('value/cast/String', () => {
  const T = Type.String()
  const E = ''
  it('Should upcast from string', () => {
    const value = 'hello'
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, 'hello')
  })
  it('Should upcast from object', () => {
    const value = {}
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, E)
  })
  it('Should upcast from array', () => {
    const value = [1]
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, E)
  })
  it('Should upcast from undefined', () => {
    const value = undefined
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, E)
  })
  it('Should upcast from null', () => {
    const value = null
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, E)
  })
  it('Should upcast from date', () => {
    const value = new Date(100)
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, E)
  })
  it('Should preserve', () => {
    const value = 'foo'
    const result = Value.Cast(T, value)
    Assert.deepEqual(result, value)
  })
})
