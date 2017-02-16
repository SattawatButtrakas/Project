angular.module('Project')

.controller('CheckTimeControl',function($scope,$state) {
  console.log('Check Time START.');

//หน้ารายวิชา ปุ่มกลับ เชื่อมกลับไป Teachersubject
  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('Teachersubject');
  }

})
