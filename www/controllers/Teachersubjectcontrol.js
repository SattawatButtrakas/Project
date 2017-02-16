angular.module('Project')

.controller('TeachersubjectControl',function($scope,$state) {
  console.log('Teachersubject START.');

  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('Teacher');
  }

  $scope.btngoCheckTime = function () {
    console.log('CheckTime pressed.');
    $state.go('CheckTime');
  }
  })
