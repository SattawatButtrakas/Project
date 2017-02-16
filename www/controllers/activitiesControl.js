angular.module('app')

.controller('activitiesControl',function($scope, $state, $ionicPopup) {
  console.log('Activities START.');

//หน้ารายวิชา ปุ่มกลับ เชื่อมกลับไป หน้าเมนู
  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('manu');
  }

  //Popupการเเจ้งเตือน
  $scope.info = function() {
    var alert = $ionicPopup.alert({
      title:'แจ้งเตือน',
      template:'ได้ทำการลงชื่อเข้ากิจกรรมเรียบร้อยแล้ว'
    })
  }
  //จำลอง data
  $scope.data = [
    {name: 'กิจกรรมรับน้อง', id: 1},
    {name: 'โครงการปฐมนิเทศนักศึกษา', id: 2},
    {name: 'โครงการเสริมสร้ามความเป็นคร', id: 3},
  ];


})