angular.module('app')
	.controller('SignupAddminControl',function($scope, $state, $ionicPopup) {
     console.log('SignupAddmin START.');

     $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('SignupMenu');
	}


 })