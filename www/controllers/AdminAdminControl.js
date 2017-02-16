angular.module('app')
	.controller('AdminAdminControl',function($scope, $state, $ionicPopup) {
     console.log('AdminAdmin START.');


	$scope.btngoAddactivities = function () {
	console.log('Addactivities pressed.');
	$state.go('Addactivities');
	}
    


 })