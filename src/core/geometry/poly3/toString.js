const plane = require('../../math/plane/')
const vec3 = require('../../math/vec3/')

const toString = (poly3) => {
  let result = 'poly3: plane: ' + plane.toString(poly3.plane) + ' vertices: ['
  poly3.vertices.map(function (vertex) {
    result += '  ' + vec3.toString(vertex) + '\n'
  })
  result += ']'
  return result
}

module.exports = toString
