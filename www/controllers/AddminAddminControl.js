angular.module('app')
	.controller('AddminAddminControl',function($scope, $state, $ionicPopup) {
     console.log('AddminAddmin START.');


	$scope.btngoAddactivities = function () {
	console.log('Addactivities pressed.');
	$state.go('Addactivities');
	}
    


 })