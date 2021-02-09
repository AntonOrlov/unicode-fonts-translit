'use strict'

const table = require('./symbols.json')

const regExp = new RegExp('[\u{1F100}-\u{1F1FF}\u{1D400}-\u{1D7FF}\u{2460}-\u{24FF}\u{2100}-\u{214F}]', 'gu')

const transliterator = function(text) {
  return text.replace(regExp, match => {
    const hexCode = match.codePointAt(0).toString(16).toUpperCase()
    return (hexCode in table) ? table[hexCode] : match
  })
}

module.exports = transliterator
