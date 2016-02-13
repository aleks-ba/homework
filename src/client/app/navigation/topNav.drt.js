(function() {
  'use strict';

  angular
      .module('memoryCards')
      .directive('topNav', topNav);

  /* @ngInject */
  function topNav () {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '@'
      },
      templateUrl: './navigation/top-nav.html'
    };


    /* @ngInject */
    function TopNavController() {
      var vm = this;
      console.log('2');

      vm.title = 'Memory Cards';
    }

    return directive;
  }
})();
