'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _foldLeft = require('./foldLeft');

var _foldLeft2 = _interopRequireDefault(_foldLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Groups elements in a list
// Example grouping [1, 2, 3, 4, 5, 6] by groups of length 3 will yield
//   [[1, 2, 3], [4, 5, 6]]
exports.default = function (items, groupSize) {
  if (groupSize <= 0) {
    throw new Error('Group size (' + groupSize + ') must be greater than zero');
  }

  if (items.length % groupSize !== 0) {
    throw new Error('Array size (' + items.length + ') is not divisible by group ' + ('size (' + groupSize + ')'));
  }

  return (0, _foldLeft2.default)(items, [[], []], function (_ref, item) {
    var _ref2 = _slicedToArray(_ref, 2),
        groupedArray = _ref2[0],
        group = _ref2[1];

    group.push(item);
    if (group.length === groupSize) {
      groupedArray.push(group);
      group = [];
    }

    return [groupedArray, group];
  })[0];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2dyb3VwQXJyYXlJdGVtcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsImdyb3VwU2l6ZSIsIkVycm9yIiwibGVuZ3RoIiwiaXRlbSIsImdyb3VwZWRBcnJheSIsImdyb3VwIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO2tCQUNlLFVBQUNBLEtBQUQsRUFBUUMsU0FBUixFQUFzQjtBQUNuQyxNQUFJQSxhQUFhLENBQWpCLEVBQW9CO0FBQ2xCLFVBQU0sSUFBSUMsS0FBSixrQkFBeUJELFNBQXpCLGlDQUFOO0FBQ0Q7O0FBRUQsTUFBSUQsTUFBTUcsTUFBTixHQUFlRixTQUFmLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2xDLFVBQU0sSUFBSUMsS0FBSixDQUFVLGlCQUFlRixNQUFNRyxNQUFyQixnREFDUEYsU0FETyxPQUFWLENBQU47QUFFRDs7QUFFRCxTQUFPLHdCQUFTRCxLQUFULEVBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsZ0JBQXdCSSxJQUF4QixFQUFpQztBQUFBO0FBQUEsUUFBL0JDLFlBQStCO0FBQUEsUUFBakJDLEtBQWlCOztBQUNoRUEsVUFBTUMsSUFBTixDQUFXSCxJQUFYO0FBQ0EsUUFBSUUsTUFBTUgsTUFBTixLQUFpQkYsU0FBckIsRUFBZ0M7QUFDOUJJLG1CQUFhRSxJQUFiLENBQWtCRCxLQUFsQjtBQUNBQSxjQUFRLEVBQVI7QUFDRDs7QUFFRCxXQUFPLENBQUNELFlBQUQsRUFBZUMsS0FBZixDQUFQO0FBQ0QsR0FSTSxFQVFKLENBUkksQ0FBUDtBQVNELEMiLCJmaWxlIjoiZ3JvdXBBcnJheUl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvbGRMZWZ0IGZyb20gJy4vZm9sZExlZnQnXG5cbi8vIEdyb3VwcyBlbGVtZW50cyBpbiBhIGxpc3Rcbi8vIEV4YW1wbGUgZ3JvdXBpbmcgWzEsIDIsIDMsIDQsIDUsIDZdIGJ5IGdyb3VwcyBvZiBsZW5ndGggMyB3aWxsIHlpZWxkXG4vLyAgIFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbmV4cG9ydCBkZWZhdWx0IChpdGVtcywgZ3JvdXBTaXplKSA9PiB7XG4gIGlmIChncm91cFNpemUgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgR3JvdXAgc2l6ZSAoJHtncm91cFNpemV9KSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvYClcbiAgfVxuXG4gIGlmIChpdGVtcy5sZW5ndGggJSBncm91cFNpemUgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFycmF5IHNpemUgKCR7aXRlbXMubGVuZ3RofSkgaXMgbm90IGRpdmlzaWJsZSBieSBncm91cCBgICtcbiAgICBgc2l6ZSAoJHtncm91cFNpemV9KWApXG4gIH1cblxuICByZXR1cm4gZm9sZExlZnQoaXRlbXMsIFtbXSwgW11dLCAoW2dyb3VwZWRBcnJheSwgZ3JvdXBdLCBpdGVtKSA9PiB7XG4gICAgZ3JvdXAucHVzaChpdGVtKVxuICAgIGlmIChncm91cC5sZW5ndGggPT09IGdyb3VwU2l6ZSkge1xuICAgICAgZ3JvdXBlZEFycmF5LnB1c2goZ3JvdXApXG4gICAgICBncm91cCA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIFtncm91cGVkQXJyYXksIGdyb3VwXVxuICB9KVswXVxufVxuIl19