const vec2 = require('../../math/vec2')

/** Calculate the area of the given Shape2 (a closed convex 2D polygon)
 * For a counter clockwise rotating polygon (about Z) the area is positive, otherwise negative.
 * See http://paulbourke.net/geometry/polygonmesh/
 * @param  {Shape2} shape
 * @returns the area of the 2d shape
 */
const area = shape => {
  let polygonArea = shape.sides
    .reduce((area, side) => area + vec2.cross(side[0], side[1]), 0)
  polygonArea *= 0.5
  return polygonArea
}

module.exports = area
