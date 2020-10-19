var buscaCid = angular.module('buscaCid', [])

buscaCid.controller('BuscaCidController', ['$scope', function($scope,){

    fetch('http://localhost:3001/api/cids')
    .then(res => {
        return res.json()
    }) 
    .then(json => {
        $scope.arrayJson = json.docs
    })
}])