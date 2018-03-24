import { describe, before, it } from './setup'
// unit
import { utils, wrappers } from './../main'

describe('JsUtils', () => {
  let
    expectedUtilities,
    expectedWrappers,
    _utils,
    _wrappers

  before(() => {
    expectedUtilities = [
      'createDefensivePromise',
      'foldLeft',
      'groupArrayItems'
    ]
    expectedWrappers = ['axiosWrapper']
    _utils = utils
    _wrappers = wrappers
  })

  describe('When getting the utilities', () => {
    it('should have expected utilities', () =>
      expectedUtilities.forEach(utils => {
        _utils.should.have.own.property(utils)
        _utils[utils].should.be.a('function')
      }))
  })

  describe('When getting the wrappers', () => {
    it('should have expected wrappers', () =>
      expectedWrappers.forEach(wrapper => {
        _wrappers.should.have.own.property(wrapper)
        _wrappers[wrapper].should.be.a('function')
      }))
  })
})
