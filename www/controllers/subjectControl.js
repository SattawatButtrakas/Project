angular.module('app')

.controller('subjectControl',function($scope, $state, $ionicPopup) {
  console.log('SUBJECT START.');


//หน้ารายวิชา ปุ่มกลับ เชื่อมกลับไป หน้าเมนู
  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('manu');
  }

//   $scope.showPopup = function () {
//     $scope.data = {};
//
//   var myPopup = $ionicPopup.show({
//     // template: '<input type="text" ng-model="data.firstName"> <input type="text" ng-model="data.lastName">',
//     // template: '<span class="input-label">FirstName</span> <input ng-model="newUser.firstName" type="text"<span class="input-label">Last Name</span><input ng-model="newUser.lastName" type="text">',
//     title: 'ได้ทำการยืนยันตัวต้น',
//     subTitle: 'กรอกชื่อและนามสกุลที่ต้องการเปลี่ยน',
//     scope: $scope,
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: '<b>OK</b>',
//         type: 'button-positive',
//       }
//     ]
//   }
//   )
// }

  //Popupการเเจ้งเตือน
  $scope.info = function() {
    var alert = $ionicPopup.alert({
      title:'แจ้งเตือน',
      template:'ได้ทำการลงชื่อเข้าเรียนเรียบร้อยแล้ว'
    })
  }

  //จำลอง data
  $scope.data = [
    {name: 'EDUCATIONAL COMPUTER TECHNOLOGY', id: 1},
    {name: 'TECHNOLOGY PHOTOGRAPHY', id: 2},
    {name: 'COMPUTER SECURTY', id: 3},
    {name: 'AAAAAAAAAA', id: 4},
    {name: 'SSSSSSSSSS', id: 5},
    {name: 'SSSSSSSSSS', id: 5},
   
  ];
})
