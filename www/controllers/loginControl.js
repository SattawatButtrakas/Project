angular.module('Project')

.controller('loginControl',function($scope,$state) {
  console.log('LOGIN START.');

//หน้าล๊อกอินเชื่อมจากปุ่มล๊อกอินไปหน้าเมนู
  $scope.btngomanu = function () {
    console.log('pressed.');
    $state.go('manu');
  }

  //หน้าล๊อกอินเชื่อมจากปุ่มสมัครใช้งานไปหน้าสมัครใช้งาน
  $scope.btngoSignup = function () {
    console.log('Signup pressed.')
    $state.go('Signup');
  }
})
