(function () {
  'use strict';

  angular.module('myApp')
    .directive('login', login);

  function login() {
    return {
      link: link,
      templateUrl: '/template/is/located/here.html',
      restrict: 'EA'
    };

    function link(scope, element, attrs) {
      /* */
    }
  }

})();