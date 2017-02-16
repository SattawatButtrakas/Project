angular.module('app')
    .controller('SignupMenuControl',function($scope, $state, $ionicPopup) {
     console.log('SignupMenu START.');

    $scope.btngoSignupstudent = function () {
    console.log('Signupstudent pressed.');
    $state.go('Signupstudent');
    }

    $scope.btngoSignupAddmin = function () {
    console.log('SignupAddmin pressed.');
    $state.go('SignupAddmin');
    }

    


  
 })
