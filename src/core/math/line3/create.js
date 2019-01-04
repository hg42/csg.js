const vec3 = require('../vec3')

const fromPointAndDirection = require('./fromPointAndDirection')

/**
 * Create an unbounded 3D line, centered at 0,0,0 and lying on X axis.
 *
 * @returns {line3} a new unbounded 3D line
 */
const create = () => {
  let point = vec3.fromValues(0, 0, 0)
  let direction = vec3.fromValues(0, 0, 1)
  return fromPointAndDirection(point, direction)
}

module.exports = create
