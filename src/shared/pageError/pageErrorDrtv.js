;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('pageError', function() {
      return {
        restrict: 'E',
        scope: {

        },
        controller: 'pageErrorController',
        templateUrl: 'shared/pageError/pageErrorTmpl.html'
      };
    });

})();
