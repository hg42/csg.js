const mat4 = require('../../math/mat4')
const vec2 = require('../../math/vec2')
const fromSides = require('./fromSides')
const flip = require('./flip')

/** this actually transforms the individual points/ vertices/ etc
 * so should be called sparselly
 * it does NOT update the shape's transformation matrix
 * it should be used whenever boolean operations are applied
 * @param  {Mat4} matrix
 * @param  {Shape2} shape
 * @returns {Shape2} a new shape, with updated geometry
 */
function transformGeometry (matrix, shape) {
  const newsides = shape.sides.map(side => [
    vec2.transformMat4(matrix, side[0]),
    vec2.transformMat4(matrix, side[1])
  ])
  return mat4.isMirroring(matrix) ? flip(fromSides(newsides)) : fromSides(newsides)
}
module.exports = transformGeometry
