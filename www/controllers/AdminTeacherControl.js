angular.module('app')
	.controller('AdminTeacherControl',function($scope, $state, $ionicPopup) {
     console.log('AdminTeacher START.');

    
     $scope.btngoAddsubject = function () {
	    console.log('Addsubject pressed.');
	    $state.go('Addsubject');
	    }

    
 })