const test = require('ava')
const { distanceToPoint, create, fromPoints } = require('./index')

const { nearlyEqual } = require('../../../../test/helpers/index')
const { EPS } = require('../../constants')

test('line2: distanceToPoint() should return proper values', (t) => {
  const line1 = create()
  const dis1 = distanceToPoint([0, 0], line1)
  nearlyEqual(t, dis1, 0, EPS)
  const dis2 = distanceToPoint([1, 0], line1)
  nearlyEqual(t, dis2, 0, EPS)
  const dis3 = distanceToPoint([0, 1], line1)
  nearlyEqual(t, dis3, 1, EPS)

  const line2 = fromPoints([-5, 4], [5, -6])
  const dis4 = distanceToPoint([0, 0], line2)
  nearlyEqual(t, dis4, 0.7071067690849304, EPS)
  const dis5 = distanceToPoint([1, 0], line2)
  nearlyEqual(t, dis5, 1.4142135381698608, EPS)
  const dis6 = distanceToPoint([2, 0], line2)
  nearlyEqual(t, dis6, 2.1213203072547913, EPS)
  const dis7 = distanceToPoint([3, 0], line2)
  nearlyEqual(t, dis7, 2.8284270763397217, EPS)
  const dis8 = distanceToPoint([4, 0], line2)
  nearlyEqual(t, dis8, 3.535533845424652, EPS)
  const dis9 = distanceToPoint([5, 0], line2)
  nearlyEqual(t, dis9, 4.2426406145095825, EPS)


  t.true(true)
})
