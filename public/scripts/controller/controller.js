var petControllers = angular.module('petControllers', []);

petControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

    $http.get('data.json').success(function(data) {
        $scope.pets = data;
    });

}]);

petControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams ) {

    $http.get('data.json').success(function(data) {
        $scope.pets = data;
        $scope.whichItem = $routeParams.itemId;
        $scope.categories = ['Chat', 'Chien', 'Furet', 'Lapin', 'Poisson'];
        $scope.dt = new Date(data[$scope.whichItem].birth_date);
    });
}]);

petControllers.controller('AddPetController', ['$scope', function($scope) {
  $scope.categories = ['Chat', 'Chien', 'Furet', 'Lapin', 'Poisson'];
  $scope.genders = ['F', 'M'];

}]);
