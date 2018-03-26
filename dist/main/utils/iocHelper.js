'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * Helper function for creating ioc's
   * @param {function} instanceConstructor the constructor for creating the
   *   dependency instance
   * @param {Object} configurations the constructor arguments of primitive types
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
  createNewInstance: function createNewInstance(_ref) {
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
    // This is the module.exports of the caller
    // iocDependencyInstances is injected by electrolyte
    var callerModuleExports = function callerModuleExports() {
      for (var _len = arguments.length, iocDependencyInstances = Array(_len), _key = 0; _key < _len; _key++) {
        iocDependencyInstances[_key] = arguments[_key];
      }

      dependencyNames.forEach(function (dependencyName, index) {
        constructorArguments[dependencyName] = iocDependencyInstances[index];
      });

      var newInstance = instanceConstructor(constructorArguments);

      return newInstance;
    };

    // Export the dependency paths
    callerModuleExports['@require'] = dependencyPaths;
    // Export if the ioc is a singleton
    callerModuleExports['@singleton'] = isSingleton;

    return callerModuleExports;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2lvY0hlbHBlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImRlcGVuZGVuY3lDb25maWciLCJpc1NpbmdsZXRvbiIsImRlcGVuZGVuY3lOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkZXBlbmRlbmN5UGF0aHMiLCJ2YWx1ZXMiLCJjb25zdHJ1Y3RvckFyZ3VtZW50cyIsImFzc2lnbiIsImNhbGxlck1vZHVsZUV4cG9ydHMiLCJpb2NEZXBlbmRlbmN5SW5zdGFuY2VzIiwiZm9yRWFjaCIsImRlcGVuZGVuY3lOYW1lIiwiaW5kZXgiLCJuZXdJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQWU7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBQSxxQkFBbUIsaUNBQ3lEO0FBQUEsUUFEdERDLG1CQUNzRCxRQUR0REEsbUJBQ3NEO0FBQUEsa0NBRGpDQyxhQUNpQztBQUFBLFFBRGpDQSxhQUNpQyxzQ0FEakIsRUFDaUI7QUFBQSxxQ0FBMUVDLG1CQUEwRTtBQUFBLFFBQTFFQSxtQkFBMEUseUNBQXBELEVBQW9EO0FBQUEscUNBQWhEQyxnQkFBZ0Q7QUFBQSxRQUFoREEsZ0JBQWdELHlDQUE3QixFQUE2QjtBQUFBLGdDQUF6QkMsV0FBeUI7QUFBQSxRQUF6QkEsV0FBeUIsb0NBQVgsSUFBVzs7QUFDMUUsUUFBTUMsa0JBQWtCQyxPQUFPQyxJQUFQLENBQVlKLGdCQUFaLENBQXhCO0FBQ0EsUUFBTUssa0JBQWtCRixPQUFPRyxNQUFQLENBQWNOLGdCQUFkLENBQXhCO0FBQ0EsUUFBTU8sdUJBQ0pKLE9BQU9LLE1BQVAsQ0FBY0wsT0FBT0ssTUFBUCxDQUFjLEVBQWQsRUFBa0JWLGFBQWxCLENBQWQsRUFBZ0RDLG1CQUFoRCxDQURGO0FBRUE7QUFDQTtBQUNBLFFBQU1VLHNCQUFzQixTQUF0QkEsbUJBQXNCLEdBQStCO0FBQUEsd0NBQTNCQyxzQkFBMkI7QUFBM0JBLDhCQUEyQjtBQUFBOztBQUN6RFIsc0JBQWdCUyxPQUFoQixDQUF3QixVQUFDQyxjQUFELEVBQWlCQyxLQUFqQixFQUEyQjtBQUNqRE4sNkJBQXFCSyxjQUFyQixJQUF1Q0YsdUJBQXVCRyxLQUF2QixDQUF2QztBQUNELE9BRkQ7O0FBSUEsVUFBTUMsY0FBY2pCLG9CQUFvQlUsb0JBQXBCLENBQXBCOztBQUVBLGFBQU9PLFdBQVA7QUFDRCxLQVJEOztBQVVBO0FBQ0FMLHdCQUFvQixVQUFwQixJQUFrQ0osZUFBbEM7QUFDQTtBQUNBSSx3QkFBb0IsWUFBcEIsSUFBb0NSLFdBQXBDOztBQUVBLFdBQU9RLG1CQUFQO0FBQ0Q7QUFwRFksQyIsImZpbGUiOiJpb2NIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGlvYydzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGluc3RhbmNlQ29uc3RydWN0b3IgdGhlIGNvbnN0cnVjdG9yIGZvciBjcmVhdGluZyB0aGVcbiAgICogICBkZXBlbmRlbmN5IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9ucyB0aGUgY29uc3RydWN0b3IgYXJndW1lbnRzIG9mIHByaW1pdGl2ZSB0eXBlc1xuICAgKiAgIFN0cnVjdHVyZTpcbiAgICogICAgIHtcbiAgICogICAgICAgPGNvbmZpZzFfbmFtZT46IDxjb25maWcxX3ZhbHVlPixcbiAgICogICAgICAgPGNvbmZpZzJfbmFtZT46IDxjb25maWcyX3ZhbHVlPixcbiAgICogICAgICAgLi4uLlxuICAgKiAgICAgfVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jeUluc3RhbmNlcyB0aGUgY29uc3RydWN0b3IgYXJndW1lbnRzIHdoaWNoIGFyZVxuICAgKiAgIHBhc3NlZCBkaXJlY3RseS4gU3RydWN0dXJlOlxuICAgKiAgICAge1xuICAgKiAgICAgICA8ZGVwZW5kZW5jeTFfbmFtZT46IDxkZXBlbmRlbmN5MV9pbnN0YW5jZT4sXG4gICAqICAgICAgIDxkZXBlbmRlbmN5Ml9uYW1lPjogPGRlcGVuZGVuY3kyX2luc3RhbmNlPixcbiAgICogICAgICAgLi4uLlxuICAgKiAgICAgfVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jeUNvbmZpZyB0aGUgZGVwZW5kZW5jeSBwYXRocyB3aGljaCBhcmUgdXNlZCB0b1xuICAgKiAgIHJlc29sdmUgdGhlIHRoZSBkZXBlbmRlbmNpZXMgdGhyb3VnaCBlbGVjdHJvbHl0ZS4gU3RydWN0dXJlOlxuICAgKiAgICAge1xuICAgKiAgICAgICA8ZGVwZW5kZW5jeTFfbmFtZT46IDxkZXBlbmRlbmN5MV9wYXRoPixcbiAgICogICAgICAgPGRlcGVuZGVuY3kyX25hbWU+OiA8ZGVwZW5kZW5jeTJfcGF0aD4sXG4gICAqICAgICAgIC4uLi5cbiAgICogICAgIH1cbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NpbmdsZXRvbiBpZiB0aGUgZGVwZW5kZW5jeSBpcyBhIHNpbmdsZXRvblxuICAgKi9cbiAgY3JlYXRlTmV3SW5zdGFuY2U6ICh7IGluc3RhbmNlQ29uc3RydWN0b3IsIGNvbmZpZ3VyYXRpb24gPSB7fSxcbiAgICBkZXBlbmRlbmN5SW5zdGFuY2VzID0ge30sIGRlcGVuZGVuY3lDb25maWcgPSB7fSwgaXNTaW5nbGV0b24gPSB0cnVlIH0pID0+IHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZXMgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmN5Q29uZmlnKVxuICAgIGNvbnN0IGRlcGVuZGVuY3lQYXRocyA9IE9iamVjdC52YWx1ZXMoZGVwZW5kZW5jeUNvbmZpZylcbiAgICBjb25zdCBjb25zdHJ1Y3RvckFyZ3VtZW50cyA9XG4gICAgICBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3VyYXRpb24pLCBkZXBlbmRlbmN5SW5zdGFuY2VzKVxuICAgIC8vIFRoaXMgaXMgdGhlIG1vZHVsZS5leHBvcnRzIG9mIHRoZSBjYWxsZXJcbiAgICAvLyBpb2NEZXBlbmRlbmN5SW5zdGFuY2VzIGlzIGluamVjdGVkIGJ5IGVsZWN0cm9seXRlXG4gICAgY29uc3QgY2FsbGVyTW9kdWxlRXhwb3J0cyA9ICguLi5pb2NEZXBlbmRlbmN5SW5zdGFuY2VzKSA9PiB7XG4gICAgICBkZXBlbmRlbmN5TmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnRzW2RlcGVuZGVuY3lOYW1lXSA9IGlvY0RlcGVuZGVuY3lJbnN0YW5jZXNbaW5kZXhdXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IGluc3RhbmNlQ29uc3RydWN0b3IoY29uc3RydWN0b3JBcmd1bWVudHMpXG5cbiAgICAgIHJldHVybiBuZXdJbnN0YW5jZVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCB0aGUgZGVwZW5kZW5jeSBwYXRoc1xuICAgIGNhbGxlck1vZHVsZUV4cG9ydHNbJ0ByZXF1aXJlJ10gPSBkZXBlbmRlbmN5UGF0aHNcbiAgICAvLyBFeHBvcnQgaWYgdGhlIGlvYyBpcyBhIHNpbmdsZXRvblxuICAgIGNhbGxlck1vZHVsZUV4cG9ydHNbJ0BzaW5nbGV0b24nXSA9IGlzU2luZ2xldG9uXG5cbiAgICByZXR1cm4gY2FsbGVyTW9kdWxlRXhwb3J0c1xuICB9XG59XG4iXX0=