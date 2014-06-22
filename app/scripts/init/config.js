angular.module('getitright')
  .config(['diffProvider', function(diffProvider) {
    diffProvider.setTemplates('<ins>%s</ins>', '<del>%s</del>', '%s');
  }])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/enter', {
      templateUrl: 'templates/enter.html'
    })
    .otherwise({
      templateUrl: 'templates/intro.html'
    });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });
