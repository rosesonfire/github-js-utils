'use strict';

var _setup = require('./setup');

var _main = require('./../main');

(0, _setup.describe)('JsUtils', function () {
  var expectedUtilities = void 0,
      expectedWrappers = void 0,
      _utils = void 0,
      _wrappers = void 0;

  (0, _setup.before)(function () {
    expectedUtilities = ['createDefensivePromise'];
    expectedWrappers = ['axiosWrapper'];
    _utils = _main.utils;
    _wrappers = _main.wrappers;
  });

  (0, _setup.describe)('When getting the utilities', function () {
    (0, _setup.it)('should have expected utilities', function () {
      return expectedUtilities.forEach(function (utils) {
        _utils.should.have.own.property(utils);
        _utils[utils].should.own.be.a('function');
      });
    });
  });

  (0, _setup.describe)('When getting the wrappers', function () {
    (0, _setup.it)('should have expected wrappers', function () {
      return expectedWrappers.forEach(function (wrapper) {
        _wrappers.should.have.own.property(wrapper);
        _wrappers[wrapper].should.be.a('function');
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnNwZWMuanMiXSwibmFtZXMiOlsiZXhwZWN0ZWRVdGlsaXRpZXMiLCJleHBlY3RlZFdyYXBwZXJzIiwiX3V0aWxzIiwiX3dyYXBwZXJzIiwiZm9yRWFjaCIsInNob3VsZCIsImhhdmUiLCJvd24iLCJwcm9wZXJ0eSIsInV0aWxzIiwiYmUiLCJhIiwid3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFFQSxxQkFBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsTUFDRUEsMEJBREY7QUFBQSxNQUVFQyx5QkFGRjtBQUFBLE1BR0VDLGVBSEY7QUFBQSxNQUlFQyxrQkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hILHdCQUFvQixDQUFDLHdCQUFELENBQXBCO0FBQ0FDLHVCQUFtQixDQUFDLGNBQUQsQ0FBbkI7QUFDQUM7QUFDQUM7QUFDRCxHQUxEOztBQU9BLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsbUJBQUcsZ0NBQUgsRUFBcUM7QUFBQSxhQUNuQ0gsa0JBQWtCSSxPQUFsQixDQUEwQixpQkFBUztBQUNqQ0YsZUFBT0csTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxHQUFuQixDQUF1QkMsUUFBdkIsQ0FBZ0NDLEtBQWhDO0FBQ0FQLGVBQU9PLEtBQVAsRUFBY0osTUFBZCxDQUFxQkUsR0FBckIsQ0FBeUJHLEVBQXpCLENBQTRCQyxDQUE1QixDQUE4QixVQUE5QjtBQUNELE9BSEQsQ0FEbUM7QUFBQSxLQUFyQztBQUtELEdBTkQ7O0FBUUEsdUJBQVMsMkJBQVQsRUFBc0MsWUFBTTtBQUMxQyxtQkFBRywrQkFBSCxFQUFvQztBQUFBLGFBQ2xDVixpQkFBaUJHLE9BQWpCLENBQXlCLG1CQUFXO0FBQ2xDRCxrQkFBVUUsTUFBVixDQUFpQkMsSUFBakIsQ0FBc0JDLEdBQXRCLENBQTBCQyxRQUExQixDQUFtQ0ksT0FBbkM7QUFDQVQsa0JBQVVTLE9BQVYsRUFBbUJQLE1BQW5CLENBQTBCSyxFQUExQixDQUE2QkMsQ0FBN0IsQ0FBK0IsVUFBL0I7QUFDRCxPQUhELENBRGtDO0FBQUEsS0FBcEM7QUFLRCxHQU5EO0FBT0QsQ0E3QkQ7QUFIQSIsImZpbGUiOiJpbmRleC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgaXQgfSBmcm9tICcuL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHsgdXRpbHMsIHdyYXBwZXJzIH0gZnJvbSAnLi8uLi9tYWluJ1xuXG5kZXNjcmliZSgnSnNVdGlscycsICgpID0+IHtcbiAgbGV0XG4gICAgZXhwZWN0ZWRVdGlsaXRpZXMsXG4gICAgZXhwZWN0ZWRXcmFwcGVycyxcbiAgICBfdXRpbHMsXG4gICAgX3dyYXBwZXJzXG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICBleHBlY3RlZFV0aWxpdGllcyA9IFsnY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSddXG4gICAgZXhwZWN0ZWRXcmFwcGVycyA9IFsnYXhpb3NXcmFwcGVyJ11cbiAgICBfdXRpbHMgPSB1dGlsc1xuICAgIF93cmFwcGVycyA9IHdyYXBwZXJzXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyB0aGUgdXRpbGl0aWVzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCB1dGlsaXRpZXMnLCAoKSA9PlxuICAgICAgZXhwZWN0ZWRVdGlsaXRpZXMuZm9yRWFjaCh1dGlscyA9PiB7XG4gICAgICAgIF91dGlscy5zaG91bGQuaGF2ZS5vd24ucHJvcGVydHkodXRpbHMpXG4gICAgICAgIF91dGlsc1t1dGlsc10uc2hvdWxkLm93bi5iZS5hKCdmdW5jdGlvbicpXG4gICAgICB9KSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIHRoZSB3cmFwcGVycycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgd3JhcHBlcnMnLCAoKSA9PlxuICAgICAgZXhwZWN0ZWRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xuICAgICAgICBfd3JhcHBlcnMuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KHdyYXBwZXIpXG4gICAgICAgIF93cmFwcGVyc1t3cmFwcGVyXS5zaG91bGQuYmUuYSgnZnVuY3Rpb24nKVxuICAgICAgfSkpXG4gIH0pXG59KVxuIl19