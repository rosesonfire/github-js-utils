import { describe, before, it } from './../setup'
// unit
import foldLeft
  from './../../main/utils/foldLeft'

describe('FoldLeft', () => {
  let
    emptyArray,
    arrayWithSingleItem,
    reductionWithSingleItem,
    arrayWithMultipleItems,
    reductionWithMultipleItems,
    seed,
    reducerFunc

  before(() => {
    emptyArray = []
    arrayWithSingleItem = [2]
    reductionWithSingleItem = 3
    arrayWithMultipleItems = [4, 5]
    reductionWithMultipleItems = 10
    seed = 1
    reducerFunc = (accumulation, item) => accumulation + item
  })

  describe('When passing empty array', () => {
    it('should return the seed', () =>
      foldLeft(emptyArray, seed, reducerFunc).should.equal(seed))
  })

  describe('When passing array with single item', () => {
    it('should return fold properly', () =>
      foldLeft(arrayWithSingleItem, seed, reducerFunc).should
        .equal(reductionWithSingleItem))
  })

  describe('When passing array with multiple items', () => {
    it('should return fold properly', () =>
      foldLeft(arrayWithMultipleItems, seed, reducerFunc).should
        .equal(reductionWithMultipleItems))
  })
})
