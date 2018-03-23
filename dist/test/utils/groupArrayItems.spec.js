'use strict';

var _setup = require('./../setup');

var _groupArrayItems = require('./../../main/utils/groupArrayItems');

var _groupArrayItems2 = _interopRequireDefault(_groupArrayItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _setup.describe)('GroupArrayItems', function () {
  var emptyArray = void 0,
      arrayWithSixItems = void 0,
      arrayWithSevenItems = void 0,
      groupedArray = void 0,
      groupSize = void 0,
      zeroGroupSize = void 0,
      negativeGroupSize = void 0,
      groupIndivisibleErrorMsg = void 0,
      groupSizeZeroErrorMsg = void 0,
      groupSizeNegativeErrorMsg = void 0;

  (0, _setup.before)(function () {
    emptyArray = [];
    arrayWithSixItems = [1, 2, 3, 4, 5, 6];
    arrayWithSevenItems = [1, 2, 3, 4, 5, 6, 7];
    groupedArray = [[1, 2, 3], [4, 5, 6]];
    groupSize = 3;
    zeroGroupSize = 0;
    negativeGroupSize = -3;
    groupIndivisibleErrorMsg = 'Array size (7) is not divisible by group size' + ' (3)';
    groupSizeZeroErrorMsg = 'Group size (0) must be greater than zero';
    groupSizeNegativeErrorMsg = 'Group size (-3) must be greater than zero';
  });

  (0, _setup.describe)('When passing empty array', function () {
    (0, _setup.it)('should return empty array', function () {
      return (0, _groupArrayItems2.default)(emptyArray, groupSize).should.equalTo(emptyArray);
    });
  });

  (0, _setup.describe)('When array size is divisible by groupSize', function () {
    (0, _setup.it)('should return grouped array', function () {
      return (0, _groupArrayItems2.default)(arrayWithSixItems, groupSize).forEach(function (group, i) {
        return group.should.equalTo(groupedArray[i]);
      });
    });
  });

  (0, _setup.describe)('When array size is not divisible by groupSize', function () {
    (0, _setup.it)('should fail', function () {
      try {
        (0, _groupArrayItems2.default)(arrayWithSevenItems, groupSize);
      } catch (e) {
        e.message.should.equal(groupIndivisibleErrorMsg);
      }
    });
  });

  (0, _setup.describe)('When group size is zero', function () {
    (0, _setup.it)('should fail', function () {
      try {
        (0, _groupArrayItems2.default)(arrayWithSevenItems, zeroGroupSize);
      } catch (e) {
        e.message.should.equal(groupSizeZeroErrorMsg);
      }
    });
  });

  (0, _setup.describe)('When group size is negative', function () {
    (0, _setup.it)('should fail', function () {
      try {
        (0, _groupArrayItems2.default)(arrayWithSevenItems, negativeGroupSize);
      } catch (e) {
        e.message.should.equal(groupSizeNegativeErrorMsg);
      }
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3V0aWxzL2dyb3VwQXJyYXlJdGVtcy5zcGVjLmpzIl0sIm5hbWVzIjpbImVtcHR5QXJyYXkiLCJhcnJheVdpdGhTaXhJdGVtcyIsImFycmF5V2l0aFNldmVuSXRlbXMiLCJncm91cGVkQXJyYXkiLCJncm91cFNpemUiLCJ6ZXJvR3JvdXBTaXplIiwibmVnYXRpdmVHcm91cFNpemUiLCJncm91cEluZGl2aXNpYmxlRXJyb3JNc2ciLCJncm91cFNpemVaZXJvRXJyb3JNc2ciLCJncm91cFNpemVOZWdhdGl2ZUVycm9yTXNnIiwic2hvdWxkIiwiZXF1YWxUbyIsImZvckVhY2giLCJncm91cCIsImkiLCJlIiwibWVzc2FnZSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7Ozs7QUFHQSxxQkFBUyxpQkFBVCxFQUE0QixZQUFNO0FBQ2hDLE1BQ0VBLG1CQURGO0FBQUEsTUFFRUMsMEJBRkY7QUFBQSxNQUdFQyw0QkFIRjtBQUFBLE1BSUVDLHFCQUpGO0FBQUEsTUFLRUMsa0JBTEY7QUFBQSxNQU1FQyxzQkFORjtBQUFBLE1BT0VDLDBCQVBGO0FBQUEsTUFRRUMsaUNBUkY7QUFBQSxNQVNFQyw4QkFURjtBQUFBLE1BVUVDLGtDQVZGOztBQVlBLHFCQUFPLFlBQU07QUFDWFQsaUJBQWEsRUFBYjtBQUNBQyx3QkFBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFwQjtBQUNBQywwQkFBc0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUF0QjtBQUNBQyxtQkFBZSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLENBQWY7QUFDQUMsZ0JBQVksQ0FBWjtBQUNBQyxvQkFBZ0IsQ0FBaEI7QUFDQUMsd0JBQW9CLENBQUMsQ0FBckI7QUFDQUMsK0JBQTJCLGtEQUN6QixNQURGO0FBRUFDLDRCQUF3QiwwQ0FBeEI7QUFDQUMsZ0NBQTRCLDJDQUE1QjtBQUNELEdBWkQ7O0FBY0EsdUJBQVMsMEJBQVQsRUFBcUMsWUFBTTtBQUN6QyxtQkFBRywyQkFBSCxFQUFnQztBQUFBLGFBQzlCLCtCQUFnQlQsVUFBaEIsRUFBNEJJLFNBQTVCLEVBQXVDTSxNQUF2QyxDQUE4Q0MsT0FBOUMsQ0FBc0RYLFVBQXRELENBRDhCO0FBQUEsS0FBaEM7QUFFRCxHQUhEOztBQUtBLHVCQUFTLDJDQUFULEVBQXNELFlBQU07QUFDMUQsbUJBQUcsNkJBQUgsRUFBa0M7QUFBQSxhQUNoQywrQkFBZ0JDLGlCQUFoQixFQUFtQ0csU0FBbkMsRUFBOENRLE9BQTlDLENBQXNELFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGVBQ3BERCxNQUFNSCxNQUFOLENBQWFDLE9BQWIsQ0FBcUJSLGFBQWFXLENBQWIsQ0FBckIsQ0FEb0Q7QUFBQSxPQUF0RCxDQURnQztBQUFBLEtBQWxDO0FBR0QsR0FKRDs7QUFNQSx1QkFBUywrQ0FBVCxFQUEwRCxZQUFNO0FBQzlELG1CQUFHLGFBQUgsRUFBa0IsWUFBTTtBQUN0QixVQUFJO0FBQ0YsdUNBQWdCWixtQkFBaEIsRUFBcUNFLFNBQXJDO0FBQ0QsT0FGRCxDQUVFLE9BQU9XLENBQVAsRUFBVTtBQUNWQSxVQUFFQyxPQUFGLENBQVVOLE1BQVYsQ0FBaUJPLEtBQWpCLENBQXVCVix3QkFBdkI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJEOztBQVVBLHVCQUFTLHlCQUFULEVBQW9DLFlBQU07QUFDeEMsbUJBQUcsYUFBSCxFQUFrQixZQUFNO0FBQ3RCLFVBQUk7QUFDRix1Q0FBZ0JMLG1CQUFoQixFQUFxQ0csYUFBckM7QUFDRCxPQUZELENBRUUsT0FBT1UsQ0FBUCxFQUFVO0FBQ1ZBLFVBQUVDLE9BQUYsQ0FBVU4sTUFBVixDQUFpQk8sS0FBakIsQ0FBdUJULHFCQUF2QjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUkQ7O0FBVUEsdUJBQVMsNkJBQVQsRUFBd0MsWUFBTTtBQUM1QyxtQkFBRyxhQUFILEVBQWtCLFlBQU07QUFDdEIsVUFBSTtBQUNGLHVDQUFnQk4sbUJBQWhCLEVBQXFDSSxpQkFBckM7QUFDRCxPQUZELENBRUUsT0FBT1MsQ0FBUCxFQUFVO0FBQ1ZBLFVBQUVDLE9BQUYsQ0FBVU4sTUFBVixDQUFpQk8sS0FBakIsQ0FBdUJSLHlCQUF2QjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUkQ7QUFTRCxDQW5FRDtBQUpBIiwiZmlsZSI6Imdyb3VwQXJyYXlJdGVtcy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgaXQgfSBmcm9tICcuLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGdyb3VwQXJyYXlJdGVtc1xuICBmcm9tICcuLy4uLy4uL21haW4vdXRpbHMvZ3JvdXBBcnJheUl0ZW1zJ1xuXG5kZXNjcmliZSgnR3JvdXBBcnJheUl0ZW1zJywgKCkgPT4ge1xuICBsZXRcbiAgICBlbXB0eUFycmF5LFxuICAgIGFycmF5V2l0aFNpeEl0ZW1zLFxuICAgIGFycmF5V2l0aFNldmVuSXRlbXMsXG4gICAgZ3JvdXBlZEFycmF5LFxuICAgIGdyb3VwU2l6ZSxcbiAgICB6ZXJvR3JvdXBTaXplLFxuICAgIG5lZ2F0aXZlR3JvdXBTaXplLFxuICAgIGdyb3VwSW5kaXZpc2libGVFcnJvck1zZyxcbiAgICBncm91cFNpemVaZXJvRXJyb3JNc2csXG4gICAgZ3JvdXBTaXplTmVnYXRpdmVFcnJvck1zZ1xuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgZW1wdHlBcnJheSA9IFtdXG4gICAgYXJyYXlXaXRoU2l4SXRlbXMgPSBbMSwgMiwgMywgNCwgNSwgNl1cbiAgICBhcnJheVdpdGhTZXZlbkl0ZW1zID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddXG4gICAgZ3JvdXBlZEFycmF5ID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICAgIGdyb3VwU2l6ZSA9IDNcbiAgICB6ZXJvR3JvdXBTaXplID0gMFxuICAgIG5lZ2F0aXZlR3JvdXBTaXplID0gLTNcbiAgICBncm91cEluZGl2aXNpYmxlRXJyb3JNc2cgPSAnQXJyYXkgc2l6ZSAoNykgaXMgbm90IGRpdmlzaWJsZSBieSBncm91cCBzaXplJyArXG4gICAgICAnICgzKSdcbiAgICBncm91cFNpemVaZXJvRXJyb3JNc2cgPSAnR3JvdXAgc2l6ZSAoMCkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVybydcbiAgICBncm91cFNpemVOZWdhdGl2ZUVycm9yTXNnID0gJ0dyb3VwIHNpemUgKC0zKSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvJ1xuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIHBhc3NpbmcgZW1wdHkgYXJyYXknLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZW1wdHkgYXJyYXknLCAoKSA9PlxuICAgICAgZ3JvdXBBcnJheUl0ZW1zKGVtcHR5QXJyYXksIGdyb3VwU2l6ZSkuc2hvdWxkLmVxdWFsVG8oZW1wdHlBcnJheSkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gYXJyYXkgc2l6ZSBpcyBkaXZpc2libGUgYnkgZ3JvdXBTaXplJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIGdyb3VwZWQgYXJyYXknLCAoKSA9PlxuICAgICAgZ3JvdXBBcnJheUl0ZW1zKGFycmF5V2l0aFNpeEl0ZW1zLCBncm91cFNpemUpLmZvckVhY2goKGdyb3VwLCBpKSA9PlxuICAgICAgICBncm91cC5zaG91bGQuZXF1YWxUbyhncm91cGVkQXJyYXlbaV0pKSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBhcnJheSBzaXplIGlzIG5vdCBkaXZpc2libGUgYnkgZ3JvdXBTaXplJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdyb3VwQXJyYXlJdGVtcyhhcnJheVdpdGhTZXZlbkl0ZW1zLCBncm91cFNpemUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGUubWVzc2FnZS5zaG91bGQuZXF1YWwoZ3JvdXBJbmRpdmlzaWJsZUVycm9yTXNnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gZ3JvdXAgc2l6ZSBpcyB6ZXJvJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZmFpbCcsICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdyb3VwQXJyYXlJdGVtcyhhcnJheVdpdGhTZXZlbkl0ZW1zLCB6ZXJvR3JvdXBTaXplKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlLm1lc3NhZ2Uuc2hvdWxkLmVxdWFsKGdyb3VwU2l6ZVplcm9FcnJvck1zZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGdyb3VwIHNpemUgaXMgbmVnYXRpdmUnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ3JvdXBBcnJheUl0ZW1zKGFycmF5V2l0aFNldmVuSXRlbXMsIG5lZ2F0aXZlR3JvdXBTaXplKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlLm1lc3NhZ2Uuc2hvdWxkLmVxdWFsKGdyb3VwU2l6ZU5lZ2F0aXZlRXJyb3JNc2cpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=