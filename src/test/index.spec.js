import { describe, before, it, getNestedProperty } from './setup'
// unit
import jsUtils from './../main'
// sideEffects
import createDefensivePromise from './../main/utils/createDefensivePromise'
import axiosWrapper from './../main/wrappers/axiosWrapper'

describe('JsUtils', () => {
  let expectedProperties

  before(() => {
    expectedProperties = [
      {
        name: 'utils.createDefensivePromise',
        property: createDefensivePromise
      },
      {
        name: 'wrappers.axiosWrapper',
        property: axiosWrapper
      }
    ]
  })

  describe('When getting the utilities', () => {
    it('should have expected properties', () =>
      expectedProperties.forEach(({ name, property }) => {
        jsUtils.should.have.nested.property(name)
        getNestedProperty(jsUtils, name).should.equal(property)
      }))
  })
})
