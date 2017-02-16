angular.module('app')
	.controller('AdminControl',function($scope, $state, $ionicPopup) {
     console.log('Admin START.');

    
	 $scope.btngoAdminTeacher = function () {
	    console.log('AdminTeacher pressed.');
	    $state.go('AdminTeacher');
	    }

	 $scope.btngoAdminAdmin = function () {
	    console.log('AdminAdmin pressed.');
	    $state.go('AdminAdmin');
	    }

 

 })