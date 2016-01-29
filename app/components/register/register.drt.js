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