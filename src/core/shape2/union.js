const geom2 = require('../geometry/geom2')
const clone = require('./clone')
const create = require('./create')

/**
   * Return a new Shape2 solid representing the space in either this solid or
   * in the given solids.
   * Immutable: Neither this solid nor the given solids are modified.
   * @param {Shape2[]} csg - list of Shape2 objects
   * @returns {Shape2} new Shape2 object
   * @example
   * let C = union(A, B)
   * @example
   * +-------+            +-------+
   * |       |            |       |
   * |   A   |            |   C   |
   * |    +--+----+   =   |       +----+
   * +----+--+    |       +----+       |
   *      |   B   |            |       |
   *      |       |            |       |
   *      +-------+            +-------+
   */
const union = (...shapes) => {
  if (shapes.length < 2) {
    throw new Error(`please provide at least two operands for a boolean union.(${shapes.length} given)`)
  }
  // first we transform all geometries to 'bake in' the transforms
  const shapesWithUpdatedGeoms = shapes.map(shape => {
    const transformedGeom = geom2.transform(shape.transforms, shape.geometry)
    const newShape = clone(shape)
    newShape.geometry = transformedGeom
    return newShape
  })

  const newGeometry = geom2.union(shapesWithUpdatedGeoms[0], ...shapesWithUpdatedGeoms)
  /* this means that the new shape:
   - has default transforms (reset)
   - does not get any attributes or data from the input shapes
  */
  const newShape = create()
  newShape.geometry = newGeometry
  return newShape
}

module.exports = union