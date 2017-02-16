angular.module('app')
	.controller('AddminControl',function($scope, $state, $ionicPopup) {
     console.log('Addmin START.');

    
	 $scope.btngoAddminTeacher = function () {
	    console.log('AddminTeacher pressed.');
	    $state.go('AddminTeacher');
	    }

	 $scope.btngoAddminAddmin = function () {
	    console.log('AddminAddmin pressed.');
	    $state.go('AddminAddmin');
	    }

 

 })