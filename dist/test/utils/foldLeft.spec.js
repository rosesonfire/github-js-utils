'use strict';

var _setup = require('./../setup');

var _foldLeft = require('./../../main/utils/foldLeft');

var _foldLeft2 = _interopRequireDefault(_foldLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _setup.describe)('FoldLeft', function () {
  var emptyArray = void 0,
      arrayWithSingleItem = void 0,
      reductionWithSingleItem = void 0,
      arrayWithMultipleItems = void 0,
      reductionWithMultipleItems = void 0,
      seed = void 0,
      reducerFunc = void 0;

  (0, _setup.before)(function () {
    emptyArray = [];
    arrayWithSingleItem = [2];
    reductionWithSingleItem = 3;
    arrayWithMultipleItems = [4, 5];
    reductionWithMultipleItems = 10;
    seed = 1;
    reducerFunc = function reducerFunc(accumulation, item) {
      return accumulation + item;
    };
  });

  (0, _setup.describe)('When passing empty array', function () {
    (0, _setup.it)('return the seed', function () {
      return (0, _foldLeft2.default)(emptyArray, seed, reducerFunc).should.equal(seed);
    });
  });

  (0, _setup.describe)('When passing array with single item', function () {
    (0, _setup.it)('return fold properly', function () {
      return (0, _foldLeft2.default)(arrayWithSingleItem, seed, reducerFunc).should.equal(reductionWithSingleItem);
    });
  });

  (0, _setup.describe)('When passing array with multiple items', function () {
    (0, _setup.it)('return fold properly', function () {
      return (0, _foldLeft2.default)(arrayWithMultipleItems, seed, reducerFunc).should.equal(reductionWithMultipleItems);
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3V0aWxzL2ZvbGRMZWZ0LnNwZWMuanMiXSwibmFtZXMiOlsiZW1wdHlBcnJheSIsImFycmF5V2l0aFNpbmdsZUl0ZW0iLCJyZWR1Y3Rpb25XaXRoU2luZ2xlSXRlbSIsImFycmF5V2l0aE11bHRpcGxlSXRlbXMiLCJyZWR1Y3Rpb25XaXRoTXVsdGlwbGVJdGVtcyIsInNlZWQiLCJyZWR1Y2VyRnVuYyIsImFjY3VtdWxhdGlvbiIsIml0ZW0iLCJzaG91bGQiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7Ozs7O0FBR0EscUJBQVMsVUFBVCxFQUFxQixZQUFNO0FBQ3pCLE1BQ0VBLG1CQURGO0FBQUEsTUFFRUMsNEJBRkY7QUFBQSxNQUdFQyxnQ0FIRjtBQUFBLE1BSUVDLCtCQUpGO0FBQUEsTUFLRUMsbUNBTEY7QUFBQSxNQU1FQyxhQU5GO0FBQUEsTUFPRUMsb0JBUEY7O0FBU0EscUJBQU8sWUFBTTtBQUNYTixpQkFBYSxFQUFiO0FBQ0FDLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUMsOEJBQTBCLENBQTFCO0FBQ0FDLDZCQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCO0FBQ0FDLGlDQUE2QixFQUE3QjtBQUNBQyxXQUFPLENBQVA7QUFDQUMsa0JBQWMscUJBQUNDLFlBQUQsRUFBZUMsSUFBZjtBQUFBLGFBQXdCRCxlQUFlQyxJQUF2QztBQUFBLEtBQWQ7QUFDRCxHQVJEOztBQVVBLHVCQUFTLDBCQUFULEVBQXFDLFlBQU07QUFDekMsbUJBQUcsaUJBQUgsRUFBc0I7QUFBQSxhQUNwQix3QkFBU1IsVUFBVCxFQUFxQkssSUFBckIsRUFBMkJDLFdBQTNCLEVBQXdDRyxNQUF4QyxDQUErQ0MsS0FBL0MsQ0FBcURMLElBQXJELENBRG9CO0FBQUEsS0FBdEI7QUFFRCxHQUhEOztBQUtBLHVCQUFTLHFDQUFULEVBQWdELFlBQU07QUFDcEQsbUJBQUcsc0JBQUgsRUFBMkI7QUFBQSxhQUN6Qix3QkFBU0osbUJBQVQsRUFBOEJJLElBQTlCLEVBQW9DQyxXQUFwQyxFQUFpREcsTUFBakQsQ0FDR0MsS0FESCxDQUNTUix1QkFEVCxDQUR5QjtBQUFBLEtBQTNCO0FBR0QsR0FKRDs7QUFNQSx1QkFBUyx3Q0FBVCxFQUFtRCxZQUFNO0FBQ3ZELG1CQUFHLHNCQUFILEVBQTJCO0FBQUEsYUFDekIsd0JBQVNDLHNCQUFULEVBQWlDRSxJQUFqQyxFQUF1Q0MsV0FBdkMsRUFBb0RHLE1BQXBELENBQ0dDLEtBREgsQ0FDU04sMEJBRFQsQ0FEeUI7QUFBQSxLQUEzQjtBQUdELEdBSkQ7QUFLRCxDQXBDRDtBQUpBIiwiZmlsZSI6ImZvbGRMZWZ0LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZm9sZExlZnRcbiAgZnJvbSAnLi8uLi8uLi9tYWluL3V0aWxzL2ZvbGRMZWZ0J1xuXG5kZXNjcmliZSgnRm9sZExlZnQnLCAoKSA9PiB7XG4gIGxldFxuICAgIGVtcHR5QXJyYXksXG4gICAgYXJyYXlXaXRoU2luZ2xlSXRlbSxcbiAgICByZWR1Y3Rpb25XaXRoU2luZ2xlSXRlbSxcbiAgICBhcnJheVdpdGhNdWx0aXBsZUl0ZW1zLFxuICAgIHJlZHVjdGlvbldpdGhNdWx0aXBsZUl0ZW1zLFxuICAgIHNlZWQsXG4gICAgcmVkdWNlckZ1bmNcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGVtcHR5QXJyYXkgPSBbXVxuICAgIGFycmF5V2l0aFNpbmdsZUl0ZW0gPSBbMl1cbiAgICByZWR1Y3Rpb25XaXRoU2luZ2xlSXRlbSA9IDNcbiAgICBhcnJheVdpdGhNdWx0aXBsZUl0ZW1zID0gWzQsIDVdXG4gICAgcmVkdWN0aW9uV2l0aE11bHRpcGxlSXRlbXMgPSAxMFxuICAgIHNlZWQgPSAxXG4gICAgcmVkdWNlckZ1bmMgPSAoYWNjdW11bGF0aW9uLCBpdGVtKSA9PiBhY2N1bXVsYXRpb24gKyBpdGVtXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gcGFzc2luZyBlbXB0eSBhcnJheScsICgpID0+IHtcbiAgICBpdCgncmV0dXJuIHRoZSBzZWVkJywgKCkgPT5cbiAgICAgIGZvbGRMZWZ0KGVtcHR5QXJyYXksIHNlZWQsIHJlZHVjZXJGdW5jKS5zaG91bGQuZXF1YWwoc2VlZCkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gcGFzc2luZyBhcnJheSB3aXRoIHNpbmdsZSBpdGVtJywgKCkgPT4ge1xuICAgIGl0KCdyZXR1cm4gZm9sZCBwcm9wZXJseScsICgpID0+XG4gICAgICBmb2xkTGVmdChhcnJheVdpdGhTaW5nbGVJdGVtLCBzZWVkLCByZWR1Y2VyRnVuYykuc2hvdWxkXG4gICAgICAgIC5lcXVhbChyZWR1Y3Rpb25XaXRoU2luZ2xlSXRlbSkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gcGFzc2luZyBhcnJheSB3aXRoIG11bHRpcGxlIGl0ZW1zJywgKCkgPT4ge1xuICAgIGl0KCdyZXR1cm4gZm9sZCBwcm9wZXJseScsICgpID0+XG4gICAgICBmb2xkTGVmdChhcnJheVdpdGhNdWx0aXBsZUl0ZW1zLCBzZWVkLCByZWR1Y2VyRnVuYykuc2hvdWxkXG4gICAgICAgIC5lcXVhbChyZWR1Y3Rpb25XaXRoTXVsdGlwbGVJdGVtcykpXG4gIH0pXG59KVxuIl19