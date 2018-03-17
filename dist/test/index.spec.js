'use strict';

var _setup = require('./setup');

var _main = require('./../main');

var _main2 = _interopRequireDefault(_main);

var _createDefensivePromise = require('./../main/utils/createDefensivePromise');

var _createDefensivePromise2 = _interopRequireDefault(_createDefensivePromise);

var _axiosWrapper = require('./../main/wrappers/axiosWrapper');

var _axiosWrapper2 = _interopRequireDefault(_axiosWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sideEffects
(0, _setup.describe)('JsUtils', function () {
  var expectedProperties = void 0;

  (0, _setup.before)(function () {
    expectedProperties = [{
      name: 'utils.createDefensivePromise',
      property: _createDefensivePromise2.default
    }, {
      name: 'wrappers.axiosWrapper',
      property: _axiosWrapper2.default
    }];
  });

  (0, _setup.describe)('When getting the utilities', function () {
    (0, _setup.it)('should have expected properties', function () {
      return expectedProperties.forEach(function (_ref) {
        var name = _ref.name,
            property = _ref.property;

        _main2.default.should.have.nested.property(name);
        (0, _setup.getNestedProperty)(_main2.default, name).should.equal(property);
      });
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnNwZWMuanMiXSwibmFtZXMiOlsiZXhwZWN0ZWRQcm9wZXJ0aWVzIiwibmFtZSIsInByb3BlcnR5IiwiZm9yRWFjaCIsInNob3VsZCIsImhhdmUiLCJuZXN0ZWQiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUEscUJBQVMsU0FBVCxFQUFvQixZQUFNO0FBQ3hCLE1BQUlBLDJCQUFKOztBQUVBLHFCQUFPLFlBQU07QUFDWEEseUJBQXFCLENBQ25CO0FBQ0VDLFlBQU0sOEJBRFI7QUFFRUM7QUFGRixLQURtQixFQUtuQjtBQUNFRCxZQUFNLHVCQURSO0FBRUVDO0FBRkYsS0FMbUIsQ0FBckI7QUFVRCxHQVhEOztBQWFBLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsbUJBQUcsaUNBQUgsRUFBc0M7QUFBQSxhQUNwQ0YsbUJBQW1CRyxPQUFuQixDQUEyQixnQkFBd0I7QUFBQSxZQUFyQkYsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsWUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNqRCx1QkFBUUUsTUFBUixDQUFlQyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQkosUUFBM0IsQ0FBb0NELElBQXBDO0FBQ0Esc0RBQTJCQSxJQUEzQixFQUFpQ0csTUFBakMsQ0FBd0NHLEtBQXhDLENBQThDTCxRQUE5QztBQUNELE9BSEQsQ0FEb0M7QUFBQSxLQUF0QztBQUtELEdBTkQ7QUFPRCxDQXZCRDtBQU5BIiwiZmlsZSI6ImluZGV4LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBpdCwgZ2V0TmVzdGVkUHJvcGVydHkgfSBmcm9tICcuL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IGpzVXRpbHMgZnJvbSAnLi8uLi9tYWluJ1xuLy8gc2lkZUVmZmVjdHNcbmltcG9ydCBjcmVhdGVEZWZlbnNpdmVQcm9taXNlIGZyb20gJy4vLi4vbWFpbi91dGlscy9jcmVhdGVEZWZlbnNpdmVQcm9taXNlJ1xuaW1wb3J0IGF4aW9zV3JhcHBlciBmcm9tICcuLy4uL21haW4vd3JhcHBlcnMvYXhpb3NXcmFwcGVyJ1xuXG5kZXNjcmliZSgnSnNVdGlscycsICgpID0+IHtcbiAgbGV0IGV4cGVjdGVkUHJvcGVydGllc1xuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgZXhwZWN0ZWRQcm9wZXJ0aWVzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndXRpbHMuY3JlYXRlRGVmZW5zaXZlUHJvbWlzZScsXG4gICAgICAgIHByb3BlcnR5OiBjcmVhdGVEZWZlbnNpdmVQcm9taXNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnd3JhcHBlcnMuYXhpb3NXcmFwcGVyJyxcbiAgICAgICAgcHJvcGVydHk6IGF4aW9zV3JhcHBlclxuICAgICAgfVxuICAgIF1cbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIHRoZSB1dGlsaXRpZXMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYXZlIGV4cGVjdGVkIHByb3BlcnRpZXMnLCAoKSA9PlxuICAgICAgZXhwZWN0ZWRQcm9wZXJ0aWVzLmZvckVhY2goKHsgbmFtZSwgcHJvcGVydHkgfSkgPT4ge1xuICAgICAgICBqc1V0aWxzLnNob3VsZC5oYXZlLm5lc3RlZC5wcm9wZXJ0eShuYW1lKVxuICAgICAgICBnZXROZXN0ZWRQcm9wZXJ0eShqc1V0aWxzLCBuYW1lKS5zaG91bGQuZXF1YWwocHJvcGVydHkpXG4gICAgICB9KSlcbiAgfSlcbn0pXG4iXX0=