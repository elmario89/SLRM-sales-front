;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('goodsFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(client) {
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (reason.valid) {
            var form = angular.copy(client);
            
            delete form.category;
            delete form.provider;
            
            form.categoryId = client.category.id;
            form.providerId = client.provider.id;
            resolve(form);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();