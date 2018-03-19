// Functional fold-left
export default (items, seed, reducerFunc) =>
  [seed, ...items].reduce(reducerFunc)
