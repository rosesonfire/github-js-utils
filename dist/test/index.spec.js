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
        _utils.should.have.property(utils);
        _utils[utils].should.be.a('function');
      });
    });
  });

  (0, _setup.describe)('When getting the wrappers', function () {
    (0, _setup.it)('should have expected wrappers', function () {
      return expectedWrappers.forEach(function (wrapper) {
        _wrappers.should.have.property(wrapper);
        _wrappers[wrapper].should.be.a('function');
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnNwZWMuanMiXSwibmFtZXMiOlsiZXhwZWN0ZWRVdGlsaXRpZXMiLCJleHBlY3RlZFdyYXBwZXJzIiwiX3V0aWxzIiwiX3dyYXBwZXJzIiwiZm9yRWFjaCIsInNob3VsZCIsImhhdmUiLCJwcm9wZXJ0eSIsInV0aWxzIiwiYmUiLCJhIiwid3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFFQSxxQkFBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsTUFDRUEsMEJBREY7QUFBQSxNQUVFQyx5QkFGRjtBQUFBLE1BR0VDLGVBSEY7QUFBQSxNQUlFQyxrQkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hILHdCQUFvQixDQUFDLHdCQUFELENBQXBCO0FBQ0FDLHVCQUFtQixDQUFDLGNBQUQsQ0FBbkI7QUFDQUM7QUFDQUM7QUFDRCxHQUxEOztBQU9BLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsbUJBQUcsZ0NBQUgsRUFBcUM7QUFBQSxhQUNuQ0gsa0JBQWtCSSxPQUFsQixDQUEwQixpQkFBUztBQUNqQ0YsZUFBT0csTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxRQUFuQixDQUE0QkMsS0FBNUI7QUFDQU4sZUFBT00sS0FBUCxFQUFjSCxNQUFkLENBQXFCSSxFQUFyQixDQUF3QkMsQ0FBeEIsQ0FBMEIsVUFBMUI7QUFDRCxPQUhELENBRG1DO0FBQUEsS0FBckM7QUFLRCxHQU5EOztBQVFBLHVCQUFTLDJCQUFULEVBQXNDLFlBQU07QUFDMUMsbUJBQUcsK0JBQUgsRUFBb0M7QUFBQSxhQUNsQ1QsaUJBQWlCRyxPQUFqQixDQUF5QixtQkFBVztBQUNsQ0Qsa0JBQVVFLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCQyxRQUF0QixDQUErQkksT0FBL0I7QUFDQVIsa0JBQVVRLE9BQVYsRUFBbUJOLE1BQW5CLENBQTBCSSxFQUExQixDQUE2QkMsQ0FBN0IsQ0FBK0IsVUFBL0I7QUFDRCxPQUhELENBRGtDO0FBQUEsS0FBcEM7QUFLRCxHQU5EO0FBT0QsQ0E3QkQ7QUFIQSIsImZpbGUiOiJpbmRleC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgaXQgfSBmcm9tICcuL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHsgdXRpbHMsIHdyYXBwZXJzIH0gZnJvbSAnLi8uLi9tYWluJ1xuXG5kZXNjcmliZSgnSnNVdGlscycsICgpID0+IHtcbiAgbGV0XG4gICAgZXhwZWN0ZWRVdGlsaXRpZXMsXG4gICAgZXhwZWN0ZWRXcmFwcGVycyxcbiAgICBfdXRpbHMsXG4gICAgX3dyYXBwZXJzXG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICBleHBlY3RlZFV0aWxpdGllcyA9IFsnY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSddXG4gICAgZXhwZWN0ZWRXcmFwcGVycyA9IFsnYXhpb3NXcmFwcGVyJ11cbiAgICBfdXRpbHMgPSB1dGlsc1xuICAgIF93cmFwcGVycyA9IHdyYXBwZXJzXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyB0aGUgdXRpbGl0aWVzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBleHBlY3RlZCB1dGlsaXRpZXMnLCAoKSA9PlxuICAgICAgZXhwZWN0ZWRVdGlsaXRpZXMuZm9yRWFjaCh1dGlscyA9PiB7XG4gICAgICAgIF91dGlscy5zaG91bGQuaGF2ZS5wcm9wZXJ0eSh1dGlscylcbiAgICAgICAgX3V0aWxzW3V0aWxzXS5zaG91bGQuYmUuYSgnZnVuY3Rpb24nKVxuICAgICAgfSkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gZ2V0dGluZyB0aGUgd3JhcHBlcnMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYXZlIGV4cGVjdGVkIHdyYXBwZXJzJywgKCkgPT5cbiAgICAgIGV4cGVjdGVkV3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcbiAgICAgICAgX3dyYXBwZXJzLnNob3VsZC5oYXZlLnByb3BlcnR5KHdyYXBwZXIpXG4gICAgICAgIF93cmFwcGVyc1t3cmFwcGVyXS5zaG91bGQuYmUuYSgnZnVuY3Rpb24nKVxuICAgICAgfSkpXG4gIH0pXG59KVxuIl19