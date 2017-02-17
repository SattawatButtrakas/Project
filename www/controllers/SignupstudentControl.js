angular.module('app')
	.controller('SignupstudentControl',function($scope, $state, $ionicPopup) {
     console.log('Signupstudent START.');
     $scope.RE = /^[a-zA-Zก-ฮ่้ัีิ์ืเาุู๊ ]{1,25}$/;
     $scope.NE = /^[0-9 ]{1,8}$/;
     $scope.Email = /^([0-9])\d+@([\bkmitl()?\b])+\.([a])+c+\.+th/;
    $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('SignupMenu');
	}

     
 })