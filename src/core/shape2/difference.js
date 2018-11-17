const geom2 = require('../geometry/geom2')
const clone = require('./clone')
const create = require('./create')

// FIXME: double check this algorithm, or even better, swap it out with something not reliant
// on converting to 3D and back !!!
// TODO: except for the use of geom2 vs geom3 this is identical to shape3's difference
/**
   * Return a new Shape2 solid representing space in this solid but
   * not in the given solids.
   * Immutable: Neither this solid nor the given solids are modified.
   * @param {Shape2[]} Shape2 - list of Shape2 objects
   * @returns {Shape2} new Shape2 object
   * @example
   * let C = difference(A, B)
   * @example
   * +-------+            +-------+
   * |       |            |   C   |
   * |   A   |            |       |
   * |    +--+----+   =   |    +--+
   * +----+--+    |       +----+
   *      |   B   |
   *      |       |
   *      +-------+
   */
const difference = (...shapes) => {
  if (shapes.length < 2) {
    throw new Error(`please provide at least two operands for a boolean difference.(${shapes.length} given)`)
  }
  // first we transform all geometries to 'bake in' the transforms
  const shapesWithUpdatedGeoms = shapes.map(shape => {
    const transformedGeom = geom2.transform(shape.transforms, shape.geometry)
    const newShape = clone(shape)
    newShape.geometry = transformedGeom
    return newShape
  })

  const newGeometry = geom2.difference(shapesWithUpdatedGeoms[0], ...shapesWithUpdatedGeoms)
  /* this means that the new shape:
   - has default transforms (reset)
   - does not get any attributes or data from the input shapes
  */
  const newShape = create()
  newShape.geometry = newGeometry
  return newShape
}

module.exports = difference