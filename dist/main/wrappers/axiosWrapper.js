'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtils = require('js-utils');

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
      return (0, _jsUtils.createDefensivePromise)(async function (resolve, reject) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3dyYXBwZXJzL2F4aW9zV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJheGlvcyIsIlJ4IiwibWF4UG9sbFRyaWVzIiwicG9sbGluZ0ludGVydmFsIiwiZ2V0IiwiYmluZCIsInBvc3RXaXRoUG9sbGluZyIsInVybCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdFJlc3BvbnNlIiwicG9zdCIsImNhdGNoIiwiZSIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVxdWVzdFRva2VuIiwiX3BvbGxSZXN1bHQiLCJsb2NrZWQiLCJjb21wbGV0ZWQiLCJzdWNjZWVkZWQiLCJlcnJvciIsIkVycm9yIiwiT2JzZXJ2YWJsZSIsImludGVydmFsIiwidGFrZSIsIm1hcCIsInBvbGxSZXN1bHQiLCJ0aGVuIiwicG9sbFJlc3BvbnNlIiwiZXJyIiwidGFrZVdoaWxlIiwidGFrZUxhc3QiLCJmaW5hbGx5Iiwic3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7Ozs7OztrQkFPZTtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEVBQVYsUUFBVUEsRUFBVjtBQUFBLE1BQWNDLFlBQWQsUUFBY0EsWUFBZDtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUFtRDs7QUFFaEVDLFNBQUtKLE1BQU1JLEdBQU4sQ0FBVUMsSUFBVixDQUFlTCxLQUFmLENBRjJEOztBQUloRU0scUJBQWlCLHlCQUFDQyxHQUFELEVBQU1DLElBQU47QUFBQSxhQUNmLHFDQUF1QixnQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFDaEQsWUFBTUMsZUFBZSxNQUFNWCxNQUFNWSxJQUFOLENBQVdMLEdBQVgsRUFBZ0JDLElBQWhCLEVBQ3hCSyxLQUR3QixDQUNsQjtBQUFBLGlCQUFLQyxFQUFFQyxRQUFGLElBQWNELENBQW5CO0FBQUEsU0FEa0IsQ0FBM0I7O0FBR0EsWUFBSUgsYUFBYUssTUFBYixL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S3hCLE9BQU8sOEJBQVAsQ0FBTDtBQUFBLFdBdERYLEVBdURHeUIsU0F2REg7QUF3REQsU0FuRUQsTUFtRU8sSUFBSXhCLGFBQWFLLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDdEM7QUFDQU4saUJBQU8sSUFBSWEsS0FBSixDQUFVLDZCQUFWLENBQVA7QUFDRCxTQUhNLE1BR0E7QUFDTDtBQUNBYixpQkFBTyxJQUFJYSxLQUFKLENBQVVaLFlBQVYsQ0FBUDtBQUNEO0FBQ0YsT0E5RUQsQ0FEZTtBQUFBO0FBSitDLEdBQW5EO0FBQUEsQyIsImZpbGUiOiJheGlvc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWZlbnNpdmVQcm9taXNlIH0gZnJvbSAnanMtdXRpbHMnXG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgYXhpb3MgaHR0cCBsaWJyYXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gYXhpb3MgdGhlIGNvcmUgYXhpb3MgbGlicmFyeVxuICogQHBhcmFtIHtvYmplY3R9IFJ4IHRoZSBSeCBsaWJyYXJ5XG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UG9sbFRyaWVzIHRoZSBtYXhpbXVtIHBvbGxzIHRvIHRyeSB0byBnZXQgdGhlIHJlc3BvbnNlXG4gICogQHBhcmFtIHtudW1iZXJ9IHBvbGxpbmdJbnRlcnZhbCB0aW1lIGludGVydmFsIGJldHdlZW4gcG9sbGluZyByZXF1ZXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCAoeyBheGlvcywgUngsIG1heFBvbGxUcmllcywgcG9sbGluZ0ludGVydmFsIH0pID0+ICh7XG5cbiAgZ2V0OiBheGlvcy5nZXQuYmluZChheGlvcyksXG5cbiAgcG9zdFdpdGhQb2xsaW5nOiAodXJsLCBkYXRhKSA9PlxuICAgIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC5jYXRjaChlID0+IGUucmVzcG9uc2UgfHwgZSlcblxuICAgICAgaWYgKHBvc3RSZXNwb25zZS5zdGF0dXMgPT09IDIwMikge1xuICAgICAgICAvLyBSZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nXG4gICAgICAgIGNvbnN0IHJlcXVlc3RUb2tlbiA9IHBvc3RSZXNwb25zZS5kYXRhLnJlcXVlc3RUb2tlblxuICAgICAgICBjb25zdCBfcG9sbFJlc3VsdCA9IHtcbiAgICAgICAgICByZXF1ZXN0VG9rZW4sXG4gICAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIHN1Y2NlZWRlZDogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihgRXhoYXVzdGVkIGFsbCAoJHttYXhQb2xsVHJpZXN9KSBwb2xsIHRyaWVzYClcbiAgICAgICAgfVxuXG4gICAgICAgIFJ4Lk9ic2VydmFibGVcbiAgICAgICAgICAuaW50ZXJ2YWwocG9sbGluZ0ludGVydmFsKVxuICAgICAgICAgIC50YWtlKG1heFBvbGxUcmllcylcbiAgICAgICAgICAubWFwKF8gPT4gX3BvbGxSZXN1bHQpXG4gICAgICAgICAgLm1hcChwb2xsUmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICghKHBvbGxSZXN1bHQubG9ja2VkKSAmJiAhKHBvbGxSZXN1bHQuY29tcGxldGVkKSkge1xuICAgICAgICAgICAgICBwb2xsUmVzdWx0LmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIHsgcmVxdWVzdFRva2VuIH0pLmNhdGNoKGUgPT4gZS5yZXNwb25zZSB8fCBlKVxuICAgICAgICAgICAgICAgIC50aGVuKHBvbGxSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocG9sbFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxseSBwb3N0ZWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPSBudWxsXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDIwMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGlsbCBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQubG9ja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9sbFJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhaWxlZCB0byBwb3N0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5lcnJvciA9IG5ldyBFcnJvcihgRmFpbGVkOiAke3BvbGxSZXNwb25zZS5kYXRhfWApXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0VG9rZW4gbm90IGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUmVxdWVzdElEICgke3JlcXVlc3RUb2tlbn0pIG5vdCBmb3VuZGApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmtub3duIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgJHtwb2xsUmVzcG9uc2Uuc3RhdHVzfTogJHtwb2xsUmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG9sbFJlc3VsdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRha2VXaGlsZShwb2xsUmVzdWx0ID0+ICEocG9sbFJlc3VsdC5jb21wbGV0ZWQpKVxuICAgICAgICAgIC50YWtlTGFzdCgxKVxuICAgICAgICAgIC5tYXAocG9sbFJlc3VsdCA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgIHJlcXVlc3RUb2tlbjogcG9sbFJlc3VsdC5yZXF1ZXN0VG9rZW4sXG4gICAgICAgICAgICBzdWNjZWVkZWQ6IHBvbGxSZXN1bHQuc3VjY2VlZGVkLFxuICAgICAgICAgICAgZXJyb3I6IHBvbGxSZXN1bHQuZXJyb3IgfSkpXG4gICAgICAgICAgLy8gdW5rbm93biBlcnJvcnNcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKVxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBtYXhQb2xsVHJpZXMgYXJlIGV4aGF1c3RlZFxuICAgICAgICAgIC5maW5hbGx5KF8gPT4gcmVqZWN0KCdGYWlsZWQgdG8gcG9sbCBiYWNrIHJlc3BvbnNlJykpXG4gICAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgICB9IGVsc2UgaWYgKHBvc3RSZXNwb25zZS5zdGF0dXMgPT09IDUwMykge1xuICAgICAgICAvLyBSZXF1ZXN0IHF1ZXVlIGlzIG92ZXJsb2FkZWRcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignUmVxdWVzdCBxdWV1ZSBpcyBvdmVybG9hZGVkJykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVbmtub3duIGVycm9yXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocG9zdFJlc3BvbnNlKSlcbiAgICAgIH1cbiAgICB9KVxufSlcbiJdfQ==