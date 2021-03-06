;(function() {
  "use strict";
  angular.module('RDash')
    .service('brokersHTTP', ['$http', 'authService', function($http, authService) {

      this.add = function add(client) {
        return $http.post("/api/brokers", client);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        if (!criteria_.id) {
          return $http.get("/api/brokers", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/brokers/" + criteria.id);
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/brokers/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/brokers/" + client.id, client);
      };
    }]);
})();
