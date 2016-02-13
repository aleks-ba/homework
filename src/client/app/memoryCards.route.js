(function(){
  angular
      .module('memoryCards')
      .config(configRouter);
  configRouter.$inject = ['$routeProvider'];

  function configRouter($routeProvider) {
    $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }
})();