/**
 * Imports
 */

import isFunction from '@f/is-function'
import toPromise from '@f/thunk-to-promise'

/**
 * thunk
 */

function thunk (action, next) {
  if (isFunction(action)) return toPromise(action)
  return next()
}

/**
 * Exports
 */

export default thunk
