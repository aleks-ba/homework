'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).


    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/register', {
        templateUrl: 'components/register/register.tpl.html',
        controller: 'View1Ctrl'
      });
    }])

;(function () {
  'use strict';

  angular.module('myApp')
    .directive('login', login);

  function login(login) {
    return {
      link: link,
      templateUrl: 'components/login/login.tpl.html',
      restrict: 'A'
    };

    function link(scope, element, attrs) {

      scope.isValid = true;

      scope.auth = function(){
        scope.isValid  = true;
        login.auth().then(success, reject);
      }



      function success(result) {
        scope.isValid  = true;
        console.log(result);
      }

      function reject(result) {
        scope.isValid  = false;
        console.log(result);
      }

    }
  }

})();
;(function(){
  'use strict';
  angular
      .module('myApp')
      .factory('login', login);

  function login($timeout, $q) {
    return {
      auth: authMock
    }

    function auth() {
      console.log('test');
    }

    function authMock() {
      var defer = $q.defer();

      $timeout(function(){
        defer.reject('reject');
      },2000)

      return defer.promise
    }
  }
})();
(function () {
  'use strict';

  angular.module('myApp')
    .directive('register', register);

  function register(login) {
    return {
      link: link,
      templateUrl: 'components/register/register.tpl.html',
      restrict: 'A'
    };

    function link(scope, element, attrs) {

      scope.isValid = true;

      scope.auth = function(){
        scope.isValid  = true;
        login.auth().then(success, reject);
      }



      function success(result) {
        scope.isValid  = true;
        console.log(result);
      }

      function reject(result) {
        scope.isValid  = false;
        console.log(result);
      }

    }
  }

})();
(function(){
  'use strict';
  angular
      .module('myApp')
      .factory('register', register);

  function register($timeout, $q) {
    return {
      auth: authMock
    }

    function auth() {
      console.log('test');
    }

    function authMock() {
      var defer = $q.defer();

      $timeout(function(){
        defer.reject('reject');
      },2000)

      return defer.promise
    }
  }
})();
'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImxvZ2luL2xvZ2luLmRydC5qcyIsImxvZ2luL2xvZ2luLnNydmMuanMiLCJyZWdpc3Rlci9yZWdpc3Rlci5kcnQuanMiLCJyZWdpc3Rlci9yZWdpc3Rlci5zcnZjLmpzIiwidmVyc2lvbi9pbnRlcnBvbGF0ZS1maWx0ZXIuanMiLCJ2ZXJzaW9uL3ZlcnNpb24tZGlyZWN0aXZlLmpzIiwidmVyc2lvbi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBEZWNsYXJlIGFwcCBsZXZlbCBtb2R1bGUgd2hpY2ggZGVwZW5kcyBvbiB2aWV3cywgYW5kIGNvbXBvbmVudHNcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFtcbiAgJ25nUm91dGUnLFxuICAnbXlBcHAudmlldzEnLFxuICAnbXlBcHAudmlldzInLFxuICAnbXlBcHAudmVyc2lvbidcbl0pLlxuXG5cbiAgICBjb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvcmVnaXN0ZXInLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3MUN0cmwnXG4gICAgICB9KTtcbiAgICB9XSlcbiIsIjsoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ215QXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ2xvZ2luJywgbG9naW4pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbihsb2dpbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGluazogbGluayxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2xvZ2luL2xvZ2luLnRwbC5odG1sJyxcclxuICAgICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cclxuICAgICAgc2NvcGUuaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICBzY29wZS5hdXRoID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBzY29wZS5pc1ZhbGlkICA9IHRydWU7XHJcbiAgICAgICAgbG9naW4uYXV0aCgpLnRoZW4oc3VjY2VzcywgcmVqZWN0KTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgIHNjb3BlLmlzVmFsaWQgID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiByZWplY3QocmVzdWx0KSB7XHJcbiAgICAgICAgc2NvcGUuaXNWYWxpZCAgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7IiwiOyhmdW5jdGlvbigpe1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBhbmd1bGFyXHJcbiAgICAgIC5tb2R1bGUoJ215QXBwJylcclxuICAgICAgLmZhY3RvcnkoJ2xvZ2luJywgbG9naW4pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbigkdGltZW91dCwgJHEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF1dGg6IGF1dGhNb2NrXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRoTW9jaygpIHtcclxuICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVmZXIucmVqZWN0KCdyZWplY3QnKTtcclxuICAgICAgfSwyMDAwKVxyXG5cclxuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2VcclxuICAgIH1cclxuICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXHJcbiAgICAuZGlyZWN0aXZlKCdyZWdpc3RlcicsIHJlZ2lzdGVyKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVnaXN0ZXIobG9naW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXHJcbiAgICAgIHJlc3RyaWN0OiAnQSdcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHJcbiAgICAgIHNjb3BlLmlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgc2NvcGUuYXV0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2NvcGUuaXNWYWxpZCAgPSB0cnVlO1xyXG4gICAgICAgIGxvZ2luLmF1dGgoKS50aGVuKHN1Y2Nlc3MsIHJlamVjdCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICBzY29wZS5pc1ZhbGlkICA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVqZWN0KHJlc3VsdCkge1xyXG4gICAgICAgIHNjb3BlLmlzVmFsaWQgID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBhbmd1bGFyXHJcbiAgICAgIC5tb2R1bGUoJ215QXBwJylcclxuICAgICAgLmZhY3RvcnkoJ3JlZ2lzdGVyJywgcmVnaXN0ZXIpO1xyXG5cclxuICBmdW5jdGlvbiByZWdpc3RlcigkdGltZW91dCwgJHEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF1dGg6IGF1dGhNb2NrXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRoTW9jaygpIHtcclxuICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVmZXIucmVqZWN0KCdyZWplY3QnKTtcclxuICAgICAgfSwyMDAwKVxyXG5cclxuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2VcclxuICAgIH1cclxuICB9XHJcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAudmVyc2lvbi5pbnRlcnBvbGF0ZS1maWx0ZXInLCBbXSlcblxuLmZpbHRlcignaW50ZXJwb2xhdGUnLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuIFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uKTtcbiAgfTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ215QXBwLnZlcnNpb24udmVyc2lvbi1kaXJlY3RpdmUnLCBbXSlcblxuLmRpcmVjdGl2ZSgnYXBwVmVyc2lvbicsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgZWxtLnRleHQodmVyc2lvbik7XG4gIH07XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcC52ZXJzaW9uJywgW1xuICAnbXlBcHAudmVyc2lvbi5pbnRlcnBvbGF0ZS1maWx0ZXInLFxuICAnbXlBcHAudmVyc2lvbi52ZXJzaW9uLWRpcmVjdGl2ZSdcbl0pXG5cbi52YWx1ZSgndmVyc2lvbicsICcwLjEnKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
