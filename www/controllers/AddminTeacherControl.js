angular.module('app')
	.controller('AddminTeacherControl',function($scope, $state, $ionicPopup) {
     console.log('AddminTeacher START.');

    
     $scope.btngoAddsubject = function () {
	    console.log('Addsubject pressed.');
	    $state.go('Addsubject');
	    }

    
 })