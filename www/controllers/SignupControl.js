angular.module('Project')

.controller('SignupControl',function ($scope,$state) {
  console.log('Signup Controller start...');

//หน้าสมัครใช้งาน ปุ่มกลับ เชื่อมกลับไป หน้าล๊อกอิน
  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('login');
  }

})
