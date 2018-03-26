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
  },
  /**
   * Helper method to get the configuration file
   * @param {object} configFileOptions the configuration file options.
   *  Structure:
   *    {
   *      'NODE_ENV value 1': 'relative path to configuration file 1',
   *      'NODE_ENV value 2': 'relative path to configuration file 2',
   *    }
   * @param {string} defaultConfigFile the default config file if NODE_ENV
   *  cannot resolve to a configuration file
   */
  getConfigFile: function getConfigFile(configFileOptions, defaultConfigFile) {
    var env = process.env.NODE_ENV;

    return configFileOptions[env] || defaultConfigFile;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3V0aWxzL2lvY0hlbHBlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImRlcGVuZGVuY3lDb25maWciLCJpc1NpbmdsZXRvbiIsImRlcGVuZGVuY3lOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkZXBlbmRlbmN5UGF0aHMiLCJ2YWx1ZXMiLCJjb25zdHJ1Y3RvckFyZ3VtZW50cyIsImFzc2lnbiIsImNhbGxlck1vZHVsZUV4cG9ydHMiLCJpb2NEZXBlbmRlbmN5SW5zdGFuY2VzIiwiZm9yRWFjaCIsImRlcGVuZGVuY3lOYW1lIiwiaW5kZXgiLCJuZXdJbnN0YW5jZSIsImdldENvbmZpZ0ZpbGUiLCJjb25maWdGaWxlT3B0aW9ucyIsImRlZmF1bHRDb25maWdGaWxlIiwiZW52IiwicHJvY2VzcyIsIk5PREVfRU5WIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkFBLHFCQUFtQixpQ0FDeUQ7QUFBQSxRQUR0REMsbUJBQ3NELFFBRHREQSxtQkFDc0Q7QUFBQSxrQ0FEakNDLGFBQ2lDO0FBQUEsUUFEakNBLGFBQ2lDLHNDQURqQixFQUNpQjtBQUFBLHFDQUExRUMsbUJBQTBFO0FBQUEsUUFBMUVBLG1CQUEwRSx5Q0FBcEQsRUFBb0Q7QUFBQSxxQ0FBaERDLGdCQUFnRDtBQUFBLFFBQWhEQSxnQkFBZ0QseUNBQTdCLEVBQTZCO0FBQUEsZ0NBQXpCQyxXQUF5QjtBQUFBLFFBQXpCQSxXQUF5QixvQ0FBWCxJQUFXOztBQUMxRSxRQUFNQyxrQkFBa0JDLE9BQU9DLElBQVAsQ0FBWUosZ0JBQVosQ0FBeEI7QUFDQSxRQUFNSyxrQkFBa0JGLE9BQU9HLE1BQVAsQ0FBY04sZ0JBQWQsQ0FBeEI7QUFDQSxRQUFNTyx1QkFDSkosT0FBT0ssTUFBUCxDQUFjTCxPQUFPSyxNQUFQLENBQWMsRUFBZCxFQUFrQlYsYUFBbEIsQ0FBZCxFQUFnREMsbUJBQWhELENBREY7QUFFQTtBQUNBO0FBQ0EsUUFBTVUsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBK0I7QUFBQSx3Q0FBM0JDLHNCQUEyQjtBQUEzQkEsOEJBQTJCO0FBQUE7O0FBQ3pEUixzQkFBZ0JTLE9BQWhCLENBQXdCLFVBQUNDLGNBQUQsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ2pETiw2QkFBcUJLLGNBQXJCLElBQXVDRix1QkFBdUJHLEtBQXZCLENBQXZDO0FBQ0QsT0FGRDs7QUFJQSxVQUFNQyxjQUFjakIsb0JBQW9CVSxvQkFBcEIsQ0FBcEI7O0FBRUEsYUFBT08sV0FBUDtBQUNELEtBUkQ7O0FBVUE7QUFDQUwsd0JBQW9CLFVBQXBCLElBQWtDSixlQUFsQztBQUNBO0FBQ0FJLHdCQUFvQixZQUFwQixJQUFvQ1IsV0FBcEM7O0FBRUEsV0FBT1EsbUJBQVA7QUFDRCxHQXBEWTtBQXFEYjs7Ozs7Ozs7Ozs7QUFXQU0saUJBQWUsdUJBQUNDLGlCQUFELEVBQW9CQyxpQkFBcEIsRUFBMEM7QUFDdkQsUUFBTUMsTUFBTUMsUUFBUUQsR0FBUixDQUFZRSxRQUF4Qjs7QUFFQSxXQUFPSixrQkFBa0JFLEdBQWxCLEtBQTBCRCxpQkFBakM7QUFDRDtBQXBFWSxDIiwiZmlsZSI6ImlvY0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgaW9jJ3NcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaW5zdGFuY2VDb25zdHJ1Y3RvciB0aGUgY29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIHRoZVxuICAgKiAgIGRlcGVuZGVuY3kgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb25zIHRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudHMgb2YgcHJpbWl0aXZlIHR5cGVzXG4gICAqICAgU3RydWN0dXJlOlxuICAgKiAgICAge1xuICAgKiAgICAgICA8Y29uZmlnMV9uYW1lPjogPGNvbmZpZzFfdmFsdWU+LFxuICAgKiAgICAgICA8Y29uZmlnMl9uYW1lPjogPGNvbmZpZzJfdmFsdWU+LFxuICAgKiAgICAgICAuLi4uXG4gICAqICAgICB9XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmN5SW5zdGFuY2VzIHRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudHMgd2hpY2ggYXJlXG4gICAqICAgcGFzc2VkIGRpcmVjdGx5LiBTdHJ1Y3R1cmU6XG4gICAqICAgICB7XG4gICAqICAgICAgIDxkZXBlbmRlbmN5MV9uYW1lPjogPGRlcGVuZGVuY3kxX2luc3RhbmNlPixcbiAgICogICAgICAgPGRlcGVuZGVuY3kyX25hbWU+OiA8ZGVwZW5kZW5jeTJfaW5zdGFuY2U+LFxuICAgKiAgICAgICAuLi4uXG4gICAqICAgICB9XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmN5Q29uZmlnIHRoZSBkZXBlbmRlbmN5IHBhdGhzIHdoaWNoIGFyZSB1c2VkIHRvXG4gICAqICAgcmVzb2x2ZSB0aGUgdGhlIGRlcGVuZGVuY2llcyB0aHJvdWdoIGVsZWN0cm9seXRlLiBTdHJ1Y3R1cmU6XG4gICAqICAgICB7XG4gICAqICAgICAgIDxkZXBlbmRlbmN5MV9uYW1lPjogPGRlcGVuZGVuY3kxX3BhdGg+LFxuICAgKiAgICAgICA8ZGVwZW5kZW5jeTJfbmFtZT46IDxkZXBlbmRlbmN5Ml9wYXRoPixcbiAgICogICAgICAgLi4uLlxuICAgKiAgICAgfVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2luZ2xldG9uIGlmIHRoZSBkZXBlbmRlbmN5IGlzIGEgc2luZ2xldG9uXG4gICAqL1xuICBjcmVhdGVOZXdJbnN0YW5jZTogKHsgaW5zdGFuY2VDb25zdHJ1Y3RvciwgY29uZmlndXJhdGlvbiA9IHt9LFxuICAgIGRlcGVuZGVuY3lJbnN0YW5jZXMgPSB7fSwgZGVwZW5kZW5jeUNvbmZpZyA9IHt9LCBpc1NpbmdsZXRvbiA9IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lcyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY3lDb25maWcpXG4gICAgY29uc3QgZGVwZW5kZW5jeVBhdGhzID0gT2JqZWN0LnZhbHVlcyhkZXBlbmRlbmN5Q29uZmlnKVxuICAgIGNvbnN0IGNvbnN0cnVjdG9yQXJndW1lbnRzID1cbiAgICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29uZmlndXJhdGlvbiksIGRlcGVuZGVuY3lJbnN0YW5jZXMpXG4gICAgLy8gVGhpcyBpcyB0aGUgbW9kdWxlLmV4cG9ydHMgb2YgdGhlIGNhbGxlclxuICAgIC8vIGlvY0RlcGVuZGVuY3lJbnN0YW5jZXMgaXMgaW5qZWN0ZWQgYnkgZWxlY3Ryb2x5dGVcbiAgICBjb25zdCBjYWxsZXJNb2R1bGVFeHBvcnRzID0gKC4uLmlvY0RlcGVuZGVuY3lJbnN0YW5jZXMpID0+IHtcbiAgICAgIGRlcGVuZGVuY3lOYW1lcy5mb3JFYWNoKChkZXBlbmRlbmN5TmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3RydWN0b3JBcmd1bWVudHNbZGVwZW5kZW5jeU5hbWVdID0gaW9jRGVwZW5kZW5jeUluc3RhbmNlc1tpbmRleF1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gaW5zdGFuY2VDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckFyZ3VtZW50cylcblxuICAgICAgcmV0dXJuIG5ld0luc3RhbmNlXG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IHRoZSBkZXBlbmRlbmN5IHBhdGhzXG4gICAgY2FsbGVyTW9kdWxlRXhwb3J0c1snQHJlcXVpcmUnXSA9IGRlcGVuZGVuY3lQYXRoc1xuICAgIC8vIEV4cG9ydCBpZiB0aGUgaW9jIGlzIGEgc2luZ2xldG9uXG4gICAgY2FsbGVyTW9kdWxlRXhwb3J0c1snQHNpbmdsZXRvbiddID0gaXNTaW5nbGV0b25cblxuICAgIHJldHVybiBjYWxsZXJNb2R1bGVFeHBvcnRzXG4gIH0sXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdGaWxlT3B0aW9ucyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIG9wdGlvbnMuXG4gICAqICBTdHJ1Y3R1cmU6XG4gICAqICAgIHtcbiAgICogICAgICAnTk9ERV9FTlYgdmFsdWUgMSc6ICdyZWxhdGl2ZSBwYXRoIHRvIGNvbmZpZ3VyYXRpb24gZmlsZSAxJyxcbiAgICogICAgICAnTk9ERV9FTlYgdmFsdWUgMic6ICdyZWxhdGl2ZSBwYXRoIHRvIGNvbmZpZ3VyYXRpb24gZmlsZSAyJyxcbiAgICogICAgfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENvbmZpZ0ZpbGUgdGhlIGRlZmF1bHQgY29uZmlnIGZpbGUgaWYgTk9ERV9FTlZcbiAgICogIGNhbm5vdCByZXNvbHZlIHRvIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqL1xuICBnZXRDb25maWdGaWxlOiAoY29uZmlnRmlsZU9wdGlvbnMsIGRlZmF1bHRDb25maWdGaWxlKSA9PiB7XG4gICAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcblxuICAgIHJldHVybiBjb25maWdGaWxlT3B0aW9uc1tlbnZdIHx8IGRlZmF1bHRDb25maWdGaWxlXG4gIH1cbn1cbiJdfQ==