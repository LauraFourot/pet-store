var app = angular.module('petStoreApp', [
    'ngRoute',
    'petControllers',
    'ngMaterial'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/add/', {
        templateUrl: 'partials/add.html',
        controller: 'AddPetController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('amber');
});
