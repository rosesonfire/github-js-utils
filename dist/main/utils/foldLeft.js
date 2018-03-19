"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Functional fold-left
exports.default = function (items, seed, reducerFunc) {
  return [seed].concat(_toConsumableArray(items)).reduce(reducerFunc);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2ZvbGRMZWZ0LmpzIl0sIm5hbWVzIjpbIml0ZW1zIiwic2VlZCIsInJlZHVjZXJGdW5jIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO2tCQUNlLFVBQUNBLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxXQUFkO0FBQUEsU0FDYixDQUFDRCxJQUFELDRCQUFVRCxLQUFWLEdBQWlCRyxNQUFqQixDQUF3QkQsV0FBeEIsQ0FEYTtBQUFBLEMiLCJmaWxlIjoiZm9sZExlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGdW5jdGlvbmFsIGZvbGQtbGVmdFxuZXhwb3J0IGRlZmF1bHQgKGl0ZW1zLCBzZWVkLCByZWR1Y2VyRnVuYykgPT5cbiAgW3NlZWQsIC4uLml0ZW1zXS5yZWR1Y2UocmVkdWNlckZ1bmMpXG4iXX0=