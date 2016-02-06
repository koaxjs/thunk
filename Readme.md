
# thunk

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Koax thunk middleware. Included in Koax to give it thunk support.

## Installation

    $ npm install @koax/thunk

## Middleware

``js
function thunk (action, next) {
  if (isFunction(action)) return toPromise(action)
  return next()
}
``

## License

MIT

[travis-image]: https://img.shields.io/travis/koaxjs/thunk.svg?style=flat-square
[travis-url]: https://travis-ci.org/koaxjs/thunk
[git-image]: https://img.shields.io/github/tag/koaxjs/thunk.svg
[git-url]: https://github.com/koaxjs/thunk
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@koax/thunk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@koax/thunk
