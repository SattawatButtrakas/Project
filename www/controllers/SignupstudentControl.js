angular.module('app')
	.controller('SignupstudentControl',function($scope, $state, $ionicPopup) {
     console.log('Signupstudent START.');

    $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('SignupMenu');
	}

     
 })