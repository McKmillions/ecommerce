angular.module('ecomApp').controller('adminCtrl', function ($scope, mainSrvc) {

    $scope.createProduct = function(product) {
        return mainSrvc.createProduct(product);
    };

});
