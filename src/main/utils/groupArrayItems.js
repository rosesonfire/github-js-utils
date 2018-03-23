import foldLeft from './foldLeft'

// Groups elements in a list
// Example grouping [1, 2, 3, 4, 5, 6] by groups of length 3 will yield
//   [[1, 2, 3], [4, 5, 6]]
export default (items, groupSize) => {
  if (groupSize <= 0) {
    throw new Error(`Group size (${groupSize}) must be greater than zero`)
  }

  if (items.length % groupSize !== 0) {
    throw new Error(`Array size (${items.length}) is not divisible by group ` +
    `size (${groupSize})`)
  }

  return foldLeft(items, [[], []], ([groupedArray, group], item) => {
    group.push(item)
    if (group.length === groupSize) {
      groupedArray.push(group)
      group = []
    }

    return [groupedArray, group]
  })[0]
}
