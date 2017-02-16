angular.module('app')

.controller('menu2Ctrl', function($scope, $rootScope, $ionicSideMenuDelegate, fireBaseData, $state,
    $ionicHistory, $firebaseArray, sharedCartService, sharedUtils) {
	console.log('MANU START.');

    //Check if user already logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.user_info = user; //Saves data to user_info
        } else {

            $ionicSideMenuDelegate.toggleLeft(); //To close the side bar
            $ionicSideMenuDelegate.canDragContent(false); // To remove the sidemenu white space

            $ionicHistory.nextViewOptions({
                historyRoot: true
            });
            $rootScope.extras = false;
            sharedUtils.hideLoading();
            $state.go('tabsController.login', {}, { location: "replace" });

        }
    });

    // On Loggin in to menu page, the sideMenu drag state is set to true
    $ionicSideMenuDelegate.canDragContent(true);
    $rootScope.extras = true;

    // When user visits A-> B -> C -> A and clicks back, he will close the app instead of back linking
    $scope.$on('$ionicView.enter', function(ev) {
        if (ev.targetScope !== $scope) {
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
        }
    });



    $scope.loadMenu = function() {
        sharedUtils.showLoading();
        $scope.menu = $firebaseArray(fireBaseData.refMenu());
        sharedUtils.hideLoading();
    }

    $scope.showProductInfo = function(id) {

    };
    $scope.addToCart = function(item) {
        sharedCartService.add(item);
    };

	//Tae
    $scope.btngosubject = function () {
    console.log('subject pressed.');
    $state.go('subject');
    }

    $scope.btngoactivities = function () {
    console.log('activities pressed.');
    $state.go('activities');
    }

})