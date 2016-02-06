/**
 * Imports
 */

import test from 'tape'
import thunk from '../src'
import isPromise from '@f/is-promise'

/**
 * Tests
 */

test('should return promise if thunk', (t) => {

  t.ok(isPromise(thunk(function () {})))
  t.end()
})

test('should call next if not', (t) => {
  t.plan(1)
  thunk(true, t.pass)
})
