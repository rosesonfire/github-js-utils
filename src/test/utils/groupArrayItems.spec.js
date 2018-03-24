import { describe, before, it } from './../setup'
// unit
import groupArrayItems
  from './../../main/utils/groupArrayItems'

describe('GroupArrayItems', () => {
  let
    emptyArray,
    arrayWithSixItems,
    arrayWithSevenItems,
    groupedArray,
    groupSize,
    zeroGroupSize,
    negativeGroupSize,
    groupIndivisibleErrorMsg,
    groupSizeZeroErrorMsg,
    groupSizeNegativeErrorMsg

  before(() => {
    emptyArray = []
    arrayWithSixItems = [1, 2, 3, 4, 5, 6]
    arrayWithSevenItems = [1, 2, 3, 4, 5, 6, 7]
    groupedArray = [[1, 2, 3], [4, 5, 6]]
    groupSize = 3
    zeroGroupSize = 0
    negativeGroupSize = -3
    groupIndivisibleErrorMsg = 'Array size (7) is not divisible by group size' +
      ' (3)'
    groupSizeZeroErrorMsg = 'Group size (0) must be greater than zero'
    groupSizeNegativeErrorMsg = 'Group size (-3) must be greater than zero'
  })

  describe('When passing empty array', () => {
    it('should return empty array', () =>
      groupArrayItems(emptyArray, groupSize).should.equalTo(emptyArray))
  })

  describe('When array size is divisible by groupSize', () => {
    it('should return grouped array', () =>
      groupArrayItems(arrayWithSixItems, groupSize).forEach((group, i) =>
        group.should.equalTo(groupedArray[i])))
  })

  describe('When array size is not divisible by groupSize', () => {
    it('should fail', () => {
      try {
        groupArrayItems(arrayWithSevenItems, groupSize)
        '1'.should.equal('2')
      } catch (e) {
        e.message.should.equal(groupIndivisibleErrorMsg)
      }
    })
  })

  describe('When group size is zero', () => {
    it('should fail', () => {
      try {
        groupArrayItems(arrayWithSevenItems, zeroGroupSize)
        '1'.should.equal('2')
      } catch (e) {
        e.message.should.equal(groupSizeZeroErrorMsg)
      }
    })
  })

  describe('When group size is negative', () => {
    it('should fail', () => {
      try {
        groupArrayItems(arrayWithSevenItems, negativeGroupSize)
        '1'.should.equal('2')
      } catch (e) {
        e.message.should.equal(groupSizeNegativeErrorMsg)
      }
    })
  })
})
