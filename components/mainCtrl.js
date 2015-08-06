;(function() {
  "use strict";
  angular
    .module('SLRM')
    .controller('mainCtrl', ['$scope', 'authService', function($scope, authService) {
      
    function runAuthorized() {
      
    }
      
      // for every function... should we do this??
      authService
        .check('main')
        .then(runAuthorized);
    }
  ]);
})();