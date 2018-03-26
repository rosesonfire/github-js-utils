'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Helper function for creating ioc's
 * @param {function} instanceConstructor the constructor for creating the
 *   dependency instance
 * @param {Object} configurations the constructor arguments of primitive types.
 *   Structure:
 *     {
 *       <config1_name>: <config1_value>,
 *       <config2_name>: <config2_value>,
 *       ....
 *     }
 * @param {Object} dependencyInstances the constructor arguments which are
 *   passed directly. Structure:
 *     {
 *       <dependency1_name>: <dependency1_instance>,
 *       <dependency2_name>: <dependency2_instance>,
 *       ....
 *     }
 * @param {Object} dependencyConfig the dependency paths which are used to
 *   resolve the the dependencies through electrolyte. Structure:
 *     {
 *       <dependency1_name>: <dependency1_path>,
 *       <dependency2_name>: <dependency2_path>,
 *       ....
 *     }
 * @param {boolean} isSingleton if the dependency is a singleton
 */
var createNewInstance = exports.createNewInstance = function createNewInstance(_ref) {
  var instanceConstructor = _ref.instanceConstructor,
      _ref$configuration = _ref.configuration,
      configuration = _ref$configuration === undefined ? {} : _ref$configuration,
      _ref$dependencyInstan = _ref.dependencyInstances,
      dependencyInstances = _ref$dependencyInstan === undefined ? {} : _ref$dependencyInstan,
      _ref$dependencyConfig = _ref.dependencyConfig,
      dependencyConfig = _ref$dependencyConfig === undefined ? {} : _ref$dependencyConfig,
      _ref$isSingleton = _ref.isSingleton,
      isSingleton = _ref$isSingleton === undefined ? true : _ref$isSingleton;

  var dependencyNames = Object.keys(dependencyConfig);
  var dependencyPaths = Object.values(dependencyConfig);
  var constructorArguments = Object.assign(Object.assign({}, configuration), dependencyInstances);
  var newInstance = null;
  // This is the module.exports of the caller
  // iocDependencyInstances is injected by electrolyte
  var callerModuleExports = function callerModuleExports() {
    for (var _len = arguments.length, iocDependencyInstances = Array(_len), _key = 0; _key < _len; _key++) {
      iocDependencyInstances[_key] = arguments[_key];
    }

    dependencyNames.forEach(function (dependencyName, index) {
      constructorArguments[dependencyName] = iocDependencyInstances[index];
    });
    newInstance = instanceConstructor(constructorArguments);

    return newInstance;
  };

  // Export the dependency paths
  callerModuleExports['@require'] = dependencyPaths;
  // Export if the ioc is a singleton
  callerModuleExports['@singleton'] = isSingleton;

  return callerModuleExports;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2lvY0hlbHBlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImRlcGVuZGVuY3lDb25maWciLCJpc1NpbmdsZXRvbiIsImRlcGVuZGVuY3lOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkZXBlbmRlbmN5UGF0aHMiLCJ2YWx1ZXMiLCJjb25zdHJ1Y3RvckFyZ3VtZW50cyIsImFzc2lnbiIsIm5ld0luc3RhbmNlIiwiY2FsbGVyTW9kdWxlRXhwb3J0cyIsImlvY0RlcGVuZGVuY3lJbnN0YW5jZXMiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeU5hbWUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJPLElBQU1BLGdEQUFvQixTQUFwQkEsaUJBQW9CLE9BQzJDO0FBQUEsTUFEeENDLG1CQUN3QyxRQUR4Q0EsbUJBQ3dDO0FBQUEsZ0NBRG5CQyxhQUNtQjtBQUFBLE1BRG5CQSxhQUNtQixzQ0FESCxFQUNHO0FBQUEsbUNBQTFFQyxtQkFBMEU7QUFBQSxNQUExRUEsbUJBQTBFLHlDQUFwRCxFQUFvRDtBQUFBLG1DQUFoREMsZ0JBQWdEO0FBQUEsTUFBaERBLGdCQUFnRCx5Q0FBN0IsRUFBNkI7QUFBQSw4QkFBekJDLFdBQXlCO0FBQUEsTUFBekJBLFdBQXlCLG9DQUFYLElBQVc7O0FBQzFFLE1BQU1DLGtCQUFrQkMsT0FBT0MsSUFBUCxDQUFZSixnQkFBWixDQUF4QjtBQUNBLE1BQU1LLGtCQUFrQkYsT0FBT0csTUFBUCxDQUFjTixnQkFBZCxDQUF4QjtBQUNBLE1BQU1PLHVCQUNKSixPQUFPSyxNQUFQLENBQWNMLE9BQU9LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVixhQUFsQixDQUFkLEVBQWdEQyxtQkFBaEQsQ0FERjtBQUVBLE1BQUlVLGNBQWMsSUFBbEI7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBK0I7QUFBQSxzQ0FBM0JDLHNCQUEyQjtBQUEzQkEsNEJBQTJCO0FBQUE7O0FBQ3pEVCxvQkFBZ0JVLE9BQWhCLENBQXdCLFVBQUNDLGNBQUQsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ2pEUCwyQkFBcUJNLGNBQXJCLElBQXVDRix1QkFBdUJHLEtBQXZCLENBQXZDO0FBQ0QsS0FGRDtBQUdBTCxrQkFBY1osb0JBQW9CVSxvQkFBcEIsQ0FBZDs7QUFFQSxXQUFPRSxXQUFQO0FBQ0QsR0FQRDs7QUFTQTtBQUNBQyxzQkFBb0IsVUFBcEIsSUFBa0NMLGVBQWxDO0FBQ0E7QUFDQUssc0JBQW9CLFlBQXBCLElBQW9DVCxXQUFwQzs7QUFFQSxTQUFPUyxtQkFBUDtBQUNELENBeEJNIiwiZmlsZSI6ImlvY0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBpb2Mnc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gaW5zdGFuY2VDb25zdHJ1Y3RvciB0aGUgY29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIHRoZVxuICogICBkZXBlbmRlbmN5IGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbnMgdGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBvZiBwcmltaXRpdmUgdHlwZXMuXG4gKiAgIFN0cnVjdHVyZTpcbiAqICAgICB7XG4gKiAgICAgICA8Y29uZmlnMV9uYW1lPjogPGNvbmZpZzFfdmFsdWU+LFxuICogICAgICAgPGNvbmZpZzJfbmFtZT46IDxjb25maWcyX3ZhbHVlPixcbiAqICAgICAgIC4uLi5cbiAqICAgICB9XG4gKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jeUluc3RhbmNlcyB0aGUgY29uc3RydWN0b3IgYXJndW1lbnRzIHdoaWNoIGFyZVxuICogICBwYXNzZWQgZGlyZWN0bHkuIFN0cnVjdHVyZTpcbiAqICAgICB7XG4gKiAgICAgICA8ZGVwZW5kZW5jeTFfbmFtZT46IDxkZXBlbmRlbmN5MV9pbnN0YW5jZT4sXG4gKiAgICAgICA8ZGVwZW5kZW5jeTJfbmFtZT46IDxkZXBlbmRlbmN5Ml9pbnN0YW5jZT4sXG4gKiAgICAgICAuLi4uXG4gKiAgICAgfVxuICogQHBhcmFtIHtPYmplY3R9IGRlcGVuZGVuY3lDb25maWcgdGhlIGRlcGVuZGVuY3kgcGF0aHMgd2hpY2ggYXJlIHVzZWQgdG9cbiAqICAgcmVzb2x2ZSB0aGUgdGhlIGRlcGVuZGVuY2llcyB0aHJvdWdoIGVsZWN0cm9seXRlLiBTdHJ1Y3R1cmU6XG4gKiAgICAge1xuICogICAgICAgPGRlcGVuZGVuY3kxX25hbWU+OiA8ZGVwZW5kZW5jeTFfcGF0aD4sXG4gKiAgICAgICA8ZGVwZW5kZW5jeTJfbmFtZT46IDxkZXBlbmRlbmN5Ml9wYXRoPixcbiAqICAgICAgIC4uLi5cbiAqICAgICB9XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2luZ2xldG9uIGlmIHRoZSBkZXBlbmRlbmN5IGlzIGEgc2luZ2xldG9uXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdJbnN0YW5jZSA9ICh7IGluc3RhbmNlQ29uc3RydWN0b3IsIGNvbmZpZ3VyYXRpb24gPSB7fSxcbiAgZGVwZW5kZW5jeUluc3RhbmNlcyA9IHt9LCBkZXBlbmRlbmN5Q29uZmlnID0ge30sIGlzU2luZ2xldG9uID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lcyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY3lDb25maWcpXG4gIGNvbnN0IGRlcGVuZGVuY3lQYXRocyA9IE9iamVjdC52YWx1ZXMoZGVwZW5kZW5jeUNvbmZpZylcbiAgY29uc3QgY29uc3RydWN0b3JBcmd1bWVudHMgPVxuICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29uZmlndXJhdGlvbiksIGRlcGVuZGVuY3lJbnN0YW5jZXMpXG4gIGxldCBuZXdJbnN0YW5jZSA9IG51bGxcbiAgLy8gVGhpcyBpcyB0aGUgbW9kdWxlLmV4cG9ydHMgb2YgdGhlIGNhbGxlclxuICAvLyBpb2NEZXBlbmRlbmN5SW5zdGFuY2VzIGlzIGluamVjdGVkIGJ5IGVsZWN0cm9seXRlXG4gIGNvbnN0IGNhbGxlck1vZHVsZUV4cG9ydHMgPSAoLi4uaW9jRGVwZW5kZW5jeUluc3RhbmNlcykgPT4ge1xuICAgIGRlcGVuZGVuY3lOYW1lcy5mb3JFYWNoKChkZXBlbmRlbmN5TmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnRzW2RlcGVuZGVuY3lOYW1lXSA9IGlvY0RlcGVuZGVuY3lJbnN0YW5jZXNbaW5kZXhdXG4gICAgfSlcbiAgICBuZXdJbnN0YW5jZSA9IGluc3RhbmNlQ29uc3RydWN0b3IoY29uc3RydWN0b3JBcmd1bWVudHMpXG5cbiAgICByZXR1cm4gbmV3SW5zdGFuY2VcbiAgfVxuXG4gIC8vIEV4cG9ydCB0aGUgZGVwZW5kZW5jeSBwYXRoc1xuICBjYWxsZXJNb2R1bGVFeHBvcnRzWydAcmVxdWlyZSddID0gZGVwZW5kZW5jeVBhdGhzXG4gIC8vIEV4cG9ydCBpZiB0aGUgaW9jIGlzIGEgc2luZ2xldG9uXG4gIGNhbGxlck1vZHVsZUV4cG9ydHNbJ0BzaW5nbGV0b24nXSA9IGlzU2luZ2xldG9uXG5cbiAgcmV0dXJuIGNhbGxlck1vZHVsZUV4cG9ydHNcbn1cbiJdfQ==