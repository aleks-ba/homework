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