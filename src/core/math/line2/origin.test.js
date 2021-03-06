const test = require('ava')
const { origin, create, fromPoints } = require('./index')

const { compareVectors } = require('../../../../test/helpers/index')

test('line2: origin() should return proper origins', (t) => {
  const line1 = create()
  const org1 = origin(line1)
  t.true(compareVectors(org1, [0, 0]))

  const line2 = fromPoints([1, 0], [0, 1])
  const org2 = origin(line2)
  t.true(compareVectors(org2, [0.4999999701976776, 0.4999999701976776]))

  const line3 = fromPoints([0, 1], [1, 0])
  const org3 = origin(line3)
  t.true(compareVectors(org3, [0.4999999701976776, 0.4999999701976776]))

  const line4 = fromPoints([0, 6], [6, 0])
  const org4 = origin(line4)
  t.true(compareVectors(org4, [2.999999761581421, 2.999999761581421]))

  const line5 = fromPoints([-5, 5], [5, -5])
  const org5 = origin(line5)
  t.true(compareVectors(org5, [0, 0]))
})
