angular.module('Project')

.controller('TeacherControl',function($scope,$state) {
  console.log('TEACHER START.');

$scope.btnBack = function () {
  console.log('Back pressed');
  $state.go('login');
}

$scope.btngoAddsubject = function () {
  console.log('Addsubject pressed.');
  $state.go('Addsubject');
}

$scope.btngoTeachersubject = function () {
  console.log('Teachersubject pressed.');
  $state.go('Teachersubject');
}
})
