'use strict';

var _setup = require('./setup');

var _main = require('./../main');

(0, _setup.describe)('JsUtils', function () {
  var expectedUtilities = void 0,
      expectedWrappers = void 0,
      _utils = void 0,
      _wrappers = void 0;

  (0, _setup.before)(function () {
    expectedUtilities = ['createDefensivePromise', 'foldLeft', 'groupArrayItems'];
    expectedWrappers = ['axiosWrapper'];
    _utils = _main.utils;
    _wrappers = _main.wrappers;
  });

  (0, _setup.describe)('When getting the utilities', function () {
    (0, _setup.it)('should have expected utilities', function () {
      return expectedUtilities.forEach(function (utils) {
        _utils.should.have.own.property(utils);
        _utils[utils].should.be.a('function');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnNwZWMuanMiXSwibmFtZXMiOlsiZXhwZWN0ZWRVdGlsaXRpZXMiLCJleHBlY3RlZFdyYXBwZXJzIiwiX3V0aWxzIiwiX3dyYXBwZXJzIiwiZm9yRWFjaCIsInNob3VsZCIsImhhdmUiLCJvd24iLCJwcm9wZXJ0eSIsInV0aWxzIiwiYmUiLCJhIiwid3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFFQSxxQkFBUyxTQUFULEVBQW9CLFlBQU07QUFDeEIsTUFDRUEsMEJBREY7QUFBQSxNQUVFQyx5QkFGRjtBQUFBLE1BR0VDLGVBSEY7QUFBQSxNQUlFQyxrQkFKRjs7QUFNQSxxQkFBTyxZQUFNO0FBQ1hILHdCQUFvQixDQUNsQix3QkFEa0IsRUFFbEIsVUFGa0IsRUFHbEIsaUJBSGtCLENBQXBCO0FBS0FDLHVCQUFtQixDQUFDLGNBQUQsQ0FBbkI7QUFDQUM7QUFDQUM7QUFDRCxHQVREOztBQVdBLHVCQUFTLDRCQUFULEVBQXVDLFlBQU07QUFDM0MsbUJBQUcsZ0NBQUgsRUFBcUM7QUFBQSxhQUNuQ0gsa0JBQWtCSSxPQUFsQixDQUEwQixpQkFBUztBQUNqQ0YsZUFBT0csTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxHQUFuQixDQUF1QkMsUUFBdkIsQ0FBZ0NDLEtBQWhDO0FBQ0FQLGVBQU9PLEtBQVAsRUFBY0osTUFBZCxDQUFxQkssRUFBckIsQ0FBd0JDLENBQXhCLENBQTBCLFVBQTFCO0FBQ0QsT0FIRCxDQURtQztBQUFBLEtBQXJDO0FBS0QsR0FORDs7QUFRQSx1QkFBUywyQkFBVCxFQUFzQyxZQUFNO0FBQzFDLG1CQUFHLCtCQUFILEVBQW9DO0FBQUEsYUFDbENWLGlCQUFpQkcsT0FBakIsQ0FBeUIsbUJBQVc7QUFDbENELGtCQUFVRSxNQUFWLENBQWlCQyxJQUFqQixDQUFzQkMsR0FBdEIsQ0FBMEJDLFFBQTFCLENBQW1DSSxPQUFuQztBQUNBVCxrQkFBVVMsT0FBVixFQUFtQlAsTUFBbkIsQ0FBMEJLLEVBQTFCLENBQTZCQyxDQUE3QixDQUErQixVQUEvQjtBQUNELE9BSEQsQ0FEa0M7QUFBQSxLQUFwQztBQUtELEdBTkQ7QUFPRCxDQWpDRDtBQUhBIiwiZmlsZSI6ImluZGV4LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBpdCB9IGZyb20gJy4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgeyB1dGlscywgd3JhcHBlcnMgfSBmcm9tICcuLy4uL21haW4nXG5cbmRlc2NyaWJlKCdKc1V0aWxzJywgKCkgPT4ge1xuICBsZXRcbiAgICBleHBlY3RlZFV0aWxpdGllcyxcbiAgICBleHBlY3RlZFdyYXBwZXJzLFxuICAgIF91dGlscyxcbiAgICBfd3JhcHBlcnNcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGV4cGVjdGVkVXRpbGl0aWVzID0gW1xuICAgICAgJ2NyZWF0ZURlZmVuc2l2ZVByb21pc2UnLFxuICAgICAgJ2ZvbGRMZWZ0JyxcbiAgICAgICdncm91cEFycmF5SXRlbXMnXG4gICAgXVxuICAgIGV4cGVjdGVkV3JhcHBlcnMgPSBbJ2F4aW9zV3JhcHBlciddXG4gICAgX3V0aWxzID0gdXRpbHNcbiAgICBfd3JhcHBlcnMgPSB3cmFwcGVyc1xuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGdldHRpbmcgdGhlIHV0aWxpdGllcycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgdXRpbGl0aWVzJywgKCkgPT5cbiAgICAgIGV4cGVjdGVkVXRpbGl0aWVzLmZvckVhY2godXRpbHMgPT4ge1xuICAgICAgICBfdXRpbHMuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KHV0aWxzKVxuICAgICAgICBfdXRpbHNbdXRpbHNdLnNob3VsZC5iZS5hKCdmdW5jdGlvbicpXG4gICAgICB9KSlcbiAgfSlcblxuICBkZXNjcmliZSgnV2hlbiBnZXR0aW5nIHRoZSB3cmFwcGVycycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgZXhwZWN0ZWQgd3JhcHBlcnMnLCAoKSA9PlxuICAgICAgZXhwZWN0ZWRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xuICAgICAgICBfd3JhcHBlcnMuc2hvdWxkLmhhdmUub3duLnByb3BlcnR5KHdyYXBwZXIpXG4gICAgICAgIF93cmFwcGVyc1t3cmFwcGVyXS5zaG91bGQuYmUuYSgnZnVuY3Rpb24nKVxuICAgICAgfSkpXG4gIH0pXG59KVxuIl19