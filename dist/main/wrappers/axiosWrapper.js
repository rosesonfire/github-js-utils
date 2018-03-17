'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createDefensivePromise = require('./../utils/createDefensivePromise');

/**
 * A wrapper for the axios http library
 * @param {object} axios the core axios library
 * @param {object} Rx the Rx library
 * @param {number} maxPollTries the maximum polls to try to get the response
  * @param {number} pollingInterval time interval between polling requests
 */
exports.default = function (_ref) {
  var axios = _ref.axios,
      Rx = _ref.Rx,
      maxPollTries = _ref.maxPollTries,
      pollingInterval = _ref.pollingInterval;
  return {

    get: axios.get.bind(axios),

    postWithPolling: function postWithPolling(url, data) {
      return (0, _createDefensivePromise.createDefensivePromise)(async function (resolve, reject) {
        var postResponse = await axios.post(url, data).catch(function (e) {
          return e.response || e;
        });

        if (postResponse.status === 202) {
          // Request has been accepted for processing
          var requestToken = postResponse.data.requestToken;
          var _pollResult = {
            requestToken: requestToken,
            locked: false,
            completed: false,
            succeeded: false,
            error: new Error('Exhausted all (' + maxPollTries + ') poll tries')
          };

          Rx.Observable.interval(pollingInterval).take(maxPollTries).map(function (_) {
            return _pollResult;
          }).map(function (pollResult) {
            if (!pollResult.locked && !pollResult.completed) {
              pollResult.locked = true;
              axios.post(url, { requestToken: requestToken }).catch(function (e) {
                return e.response || e;
              }).then(function (pollResponse) {
                if (pollResponse.status === 200) {
                  // successfully posted data
                  pollResult.completed = true;
                  pollResult.succeeded = true;
                  pollResult.error = null;
                } else if (pollResponse.status === 202) {
                  // still processing
                  pollResult.locked = false;
                } else if (pollResponse.status === 500) {
                  // failed to post data
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('Failed: ' + pollResponse.data);
                } else if (pollResponse.status === 404) {
                  // requestToken not found
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('RequestID (' + requestToken + ') not found');
                } else {
                  // unknown error
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error(pollResponse.status + ': ' + pollResponse.data);
                }
              }).catch(function (err) {
                pollResult.completed = true;
                pollResult.succeeded = false;
                pollResult.error = err;
              });
            }

            return pollResult;
          }).takeWhile(function (pollResult) {
            return !pollResult.completed;
          }).takeLast(1).map(function (pollResult) {
            return resolve({
              requestToken: pollResult.requestToken,
              succeeded: pollResult.succeeded,
              error: pollResult.error });
          })
          // unknown errors
          .catch(function (err) {
            return reject(err);
          })
          // This can happen if maxPollTries are exhausted
          .finally(function (_) {
            return reject('Failed to poll back response');
          }).subscribe();
        } else if (postResponse.status === 503) {
          // Request queue is overloaded
          reject(new Error('Request queue is overloaded'));
        } else {
          // Unknown error
          reject(new Error(postResponse));
        }
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3dyYXBwZXJzL2F4aW9zV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJheGlvcyIsIlJ4IiwibWF4UG9sbFRyaWVzIiwicG9sbGluZ0ludGVydmFsIiwiZ2V0IiwiYmluZCIsInBvc3RXaXRoUG9sbGluZyIsInVybCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdFJlc3BvbnNlIiwicG9zdCIsImNhdGNoIiwiZSIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVxdWVzdFRva2VuIiwiX3BvbGxSZXN1bHQiLCJsb2NrZWQiLCJjb21wbGV0ZWQiLCJzdWNjZWVkZWQiLCJlcnJvciIsIkVycm9yIiwiT2JzZXJ2YWJsZSIsImludGVydmFsIiwidGFrZSIsIm1hcCIsInBvbGxSZXN1bHQiLCJ0aGVuIiwicG9sbFJlc3BvbnNlIiwiZXJyIiwidGFrZVdoaWxlIiwidGFrZUxhc3QiLCJmaW5hbGx5Iiwic3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7Ozs7OztrQkFPZTtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEVBQVYsUUFBVUEsRUFBVjtBQUFBLE1BQWNDLFlBQWQsUUFBY0EsWUFBZDtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUFtRDs7QUFFaEVDLFNBQUtKLE1BQU1JLEdBQU4sQ0FBVUMsSUFBVixDQUFlTCxLQUFmLENBRjJEOztBQUloRU0scUJBQWlCLHlCQUFDQyxHQUFELEVBQU1DLElBQU47QUFBQSxhQUNmLG9EQUF1QixnQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFDaEQsWUFBTUMsZUFBZSxNQUFNWCxNQUFNWSxJQUFOLENBQVdMLEdBQVgsRUFBZ0JDLElBQWhCLEVBQ3hCSyxLQUR3QixDQUNsQjtBQUFBLGlCQUFLQyxFQUFFQyxRQUFGLElBQWNELENBQW5CO0FBQUEsU0FEa0IsQ0FBM0I7O0FBR0EsWUFBSUgsYUFBYUssTUFBYixL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S3hCLE9BQU8sOEJBQVAsQ0FBTDtBQUFBLFdBdERYLEVBdURHeUIsU0F2REg7QUF3REQsU0FuRUQsTUFtRU8sSUFBSXhCLGFBQWFLLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDdEM7QUFDQU4saUJBQU8sSUFBSWEsS0FBSixDQUFVLDZCQUFWLENBQVA7QUFDRCxTQUhNLE1BR0E7QUFDTDtBQUNBYixpQkFBTyxJQUFJYSxLQUFKLENBQVVaLFlBQVYsQ0FBUDtBQUNEO0FBQ0YsT0E5RUQsQ0FEZTtBQUFBO0FBSitDLEdBQW5EO0FBQUEsQyIsImZpbGUiOiJheGlvc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWZlbnNpdmVQcm9taXNlIH0gZnJvbSAnLi8uLi91dGlscy9jcmVhdGVEZWZlbnNpdmVQcm9taXNlJ1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIGF4aW9zIGh0dHAgbGlicmFyeVxuICogQHBhcmFtIHtvYmplY3R9IGF4aW9zIHRoZSBjb3JlIGF4aW9zIGxpYnJhcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSeCB0aGUgUnggbGlicmFyeVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFBvbGxUcmllcyB0aGUgbWF4aW11bSBwb2xscyB0byB0cnkgdG8gZ2V0IHRoZSByZXNwb25zZVxuICAqIEBwYXJhbSB7bnVtYmVyfSBwb2xsaW5nSW50ZXJ2YWwgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHBvbGxpbmcgcmVxdWVzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHsgYXhpb3MsIFJ4LCBtYXhQb2xsVHJpZXMsIHBvbGxpbmdJbnRlcnZhbCB9KSA9PiAoe1xuXG4gIGdldDogYXhpb3MuZ2V0LmJpbmQoYXhpb3MpLFxuXG4gIHBvc3RXaXRoUG9sbGluZzogKHVybCwgZGF0YSkgPT5cbiAgICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAuY2F0Y2goZSA9PiBlLnJlc3BvbnNlIHx8IGUpXG5cbiAgICAgIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXF1ZXN0VG9rZW4gPSBwb3N0UmVzcG9uc2UuZGF0YS5yZXF1ZXN0VG9rZW5cbiAgICAgICAgY29uc3QgX3BvbGxSZXN1bHQgPSB7XG4gICAgICAgICAgcmVxdWVzdFRva2VuLFxuICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZWVkZWQ6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3IoYEV4aGF1c3RlZCBhbGwgKCR7bWF4UG9sbFRyaWVzfSkgcG9sbCB0cmllc2ApXG4gICAgICAgIH1cblxuICAgICAgICBSeC5PYnNlcnZhYmxlXG4gICAgICAgICAgLmludGVydmFsKHBvbGxpbmdJbnRlcnZhbClcbiAgICAgICAgICAudGFrZShtYXhQb2xsVHJpZXMpXG4gICAgICAgICAgLm1hcChfID0+IF9wb2xsUmVzdWx0KVxuICAgICAgICAgIC5tYXAocG9sbFJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIShwb2xsUmVzdWx0LmxvY2tlZCkgJiYgIShwb2xsUmVzdWx0LmNvbXBsZXRlZCkpIHtcbiAgICAgICAgICAgICAgcG9sbFJlc3VsdC5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCB7IHJlcXVlc3RUb2tlbiB9KS5jYXRjaChlID0+IGUucmVzcG9uc2UgfHwgZSlcbiAgICAgICAgICAgICAgICAudGhlbihwb2xsUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmxvY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gcG9zdCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPSBuZXcgRXJyb3IoYEZhaWxlZDogJHtwb2xsUmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdFRva2VuIG5vdCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJlcXVlc3RJRCAoJHtyZXF1ZXN0VG9rZW59KSBub3QgZm91bmRgKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5rbm93biBlcnJvclxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYCR7cG9sbFJlc3BvbnNlLnN0YXR1c306ICR7cG9sbFJlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvbGxSZXN1bHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50YWtlV2hpbGUocG9sbFJlc3VsdCA9PiAhKHBvbGxSZXN1bHQuY29tcGxldGVkKSlcbiAgICAgICAgICAudGFrZUxhc3QoMSlcbiAgICAgICAgICAubWFwKHBvbGxSZXN1bHQgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICByZXF1ZXN0VG9rZW46IHBvbGxSZXN1bHQucmVxdWVzdFRva2VuLFxuICAgICAgICAgICAgc3VjY2VlZGVkOiBwb2xsUmVzdWx0LnN1Y2NlZWRlZCxcbiAgICAgICAgICAgIGVycm9yOiBwb2xsUmVzdWx0LmVycm9yIH0pKVxuICAgICAgICAgIC8vIHVua25vd24gZXJyb3JzXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgbWF4UG9sbFRyaWVzIGFyZSBleGhhdXN0ZWRcbiAgICAgICAgICAuZmluYWxseShfID0+IHJlamVjdCgnRmFpbGVkIHRvIHBvbGwgYmFjayByZXNwb25zZScpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICAgfSBlbHNlIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSA1MDMpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBxdWV1ZSBpcyBvdmVybG9hZGVkXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1JlcXVlc3QgcXVldWUgaXMgb3ZlcmxvYWRlZCcpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5rbm93biBlcnJvclxuICAgICAgICByZWplY3QobmV3IEVycm9yKHBvc3RSZXNwb25zZSkpXG4gICAgICB9XG4gICAgfSlcbn0pXG4iXX0=