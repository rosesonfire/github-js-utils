import chai from 'chai'
import assertArrays from 'chai-arrays'
import chaiAsPromised from 'chai-as-promised'

chai.should()
chai.use(assertArrays)
chai.use(chaiAsPromised)

const getNestedProperty = (object, nestedPropertyName) => {
  let nestedProperty = object

  nestedPropertyName.split('.').forEach(propertyName => {
    nestedProperty = nestedProperty[propertyName]
  })

  return nestedProperty
}

/* eslint-disable no-undef */
exports = module.exports = ({
  expect: chai.expect,
  describe,
  before,
  beforeEach,
  afterEach,
  it,
  getNestedProperty
})
/* eslint-enable no-undef */
