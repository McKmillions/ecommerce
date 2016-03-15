angular.module('ecomApp').controller('mainCtrl', function ($scope, productInfo, mainSrvc) {

    $scope.products = productInfo.data;

});
