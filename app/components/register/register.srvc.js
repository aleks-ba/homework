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