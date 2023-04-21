import { Expect } from './assert.js'
import { Type, Static } from '@sinclair/typebox'

{
  const T = Type.String({ $id: 'T' })
  const R = Type.Ref(T)

  type T = Static<typeof T>
  type R = Static<typeof R>

  Expect(T).ToInfer<string>()
  Expect(R).ToInfer<string>()
}
