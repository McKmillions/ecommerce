angular.module('ecomApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'mainCtrl',
            resolve: {
                productInfo: function (mainSrv) {
                    return mainSrvc.getProducts();
                }
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: './views/admin.html',
            controller: 'adminCtrl'
        });
});
