angular.module('Project')

.controller('AdminControl',function($scope,$state) {
  console.log('Admin START.');


  $scope.btngoAddactivities= function () {
    console.log('Addactivities pressed.');
    $state.go('Addactivities');
  }

  })
