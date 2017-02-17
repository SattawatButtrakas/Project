angular.module('app.controllers', [])
.controller('loginCtrl', function($scope, $rootScope, $ionicHistory, sharedUtils, $state, $ionicSideMenuDelegate) {
    $rootScope.extras = false; 
    // For hiding the side bar and nav icon
    // When the user logs out and reaches login page,
    // we clear all the history and cache to prevent back link
    $scope.$on('$ionicView.enter', function(ev) {
        if (ev.targetScope !== $scope) {
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
        }
    });
    //Check if user already logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $ionicHistory.nextViewOptions({
                historyRoot: true
            });
            $ionicSideMenuDelegate.canDragContent(true); // Sets up the sideMenu dragable
            $rootScope.extras = true;
            sharedUtils.hideLoading();
            $state.go('menu2', {}, { location: "replace" });
        }
    });
    $scope.loginEmail = function(formName, cred) {
        if (formName.$valid) { // Check if the form data is valid or not
            sharedUtils.showLoading();
            //Email
            firebase.auth().signInWithEmailAndPassword(cred.email, cred.password).then(function(result) {
                    // You dont need to save the users session as firebase handles it
                    // You only need to :
                    // 1. clear the login page history from the history stack so that you cant come back
                    // 2. Set rootScope.extra;
                    // 3. Turn off the loading
                    // 4. Got to menu page
                    $ionicHistory.nextViewOptions({                        historyRoot: true
                    });
                    $rootScope.extras = true;
                    sharedUtils.hideLoading();
                    $state.go('menu2', {}, { location: "replace" });
                },
                function(error) {
                    sharedUtils.hideLoading();
                    sharedUtils.showAlert("Please note", "Authentication Error");
                }
            );
        } else {
            sharedUtils.showAlert("Please note", "Entered data is not valid");
        }
    };
    $scope.loginGmail = function() {
        //Gmail Login
    };
})
.controller('signupCtrl', function($scope, $rootScope, sharedUtils, $ionicSideMenuDelegate,
    $state, fireBaseData, $ionicHistory) {
    $rootScope.extras = false; // For hiding the side bar and nav icon
    $scope.signupEmail = function(formName, cred) {
        if (formName.$valid) { // Check if the form data is valid or not
            sharedUtils.showLoading();
            //Main Firebase Authentication part
            firebase.auth().createUserWithEmailAndPassword(cred.email, cred.password).then(function(result) {
                //Add name and default dp to the Autherisation table
                result.updateProfile({
                    displayName: cred.name,
                    photoURL: "default_dp"
                }).then(function() {}, function(error) {});
                //Registered OK
                $ionicHistory.nextViewOptions({
                    historyRoot: true
                });
                $ionicSideMenuDelegate.canDragContent(true); // Sets up the sideMenu dragable
                $rootScope.extras = true;
                sharedUtils.hideLoading();
                $state.go('menu2', {}, { location: "replace" });
            }, function(error) {
                sharedUtils.hideLoading();
                sharedUtils.showAlert("Please note", "Sign up Error");
            });
        } else {
            sharedUtils.showAlert("Please note", "Entered data is not valid");
        }
    }
})
.controller('indexCtrl', function($scope, $rootScope, sharedUtils, $ionicHistory, $state, $ionicSideMenuDelegate, sharedCartService) {

    //Check if user already logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.user_info = user; //Saves data to user_info

            //Only when the user is logged in, the cart qty is shown
            //Else it will show unwanted console error till we get the user object
            $scope.get_total = function() {
                var total_qty = 0;
                for (var i = 0; i < sharedCartService.cart_items.length; i++) {
                    total_qty += sharedCartService.cart_items[i].item_qty;
                }
                return total_qty;
            };

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

    $scope.logout = function() {

        sharedUtils.showLoading();

        // Main Firebase logout
        firebase.auth().signOut().then(function() {


            $ionicSideMenuDelegate.toggleLeft(); //To close the side bar
            $ionicSideMenuDelegate.canDragContent(false); // To remove the sidemenu white space

            $ionicHistory.nextViewOptions({
                historyRoot: true
            });


            $rootScope.extras = false;
            sharedUtils.hideLoading();
            $state.go('tabsController.login', {}, { location: "replace" });

        }, function(error) {
            sharedUtils.showAlert("Error", "Logout Failed")
        });

    }
})
.controller('favouriteCtrl', function($scope, $rootScope) {

    $rootScope.extras = true;
})
.controller('settingsCtrl', function($scope, $rootScope, fireBaseData, $firebaseObject,
    $ionicPopup, $state, $window, $firebaseArray,
    sharedUtils) {
    //Bugs are most prevailing here
    $rootScope.extras = true;
    //Shows loading bar
    sharedUtils.showLoading();
    //Check if user already logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // firebaseObject is good for accessing single objects for eg:- telephone. Don't use it for array of objects
            $scope.user_extras = $firebaseObject(fireBaseData.refUser().child(user.uid));
            $scope.user_info = user; //Saves data to user_info
            //NOTE: $scope.user_info is not writable ie you can't use it inside ng-model of <input>
            $scope.$apply();
            sharedUtils.hideLoading();
        }
    });
    $scope.save = function(extras) {
        //1. Edit name doesnt show popup 2. Using extras and editable  // Bugs
        if (extras.Name != "" && extras.Name != null) {
            //Update  name
            fireBaseData.refUser().child($scope.user_info.uid).update({ // set
                Name: extras.Name
            });
        }
        if (extras.StudentID != "" && extras.StudentID != null) {
            //Update  StudentID
            fireBaseData.refUser().child($scope.user_info.uid).update({ // set
                StudentID: extras.StudentID
            });
        }
        if (extras.Faculty != "" && extras.Faculty != null) {
            //Update  Faculty
            fireBaseData.refUser().child($scope.user_info.uid).update({ // set
                Faculty: extras.Faculty
            });
        }
        if (extras.Program != "" && extras.Program != null) {
            //Update  Program
            fireBaseData.refUser().child($scope.user_info.uid).update({ // set
                Program: extras.Program
            });
        }
        if (extras.Major != "" && extras.Major != null) {
            //Update Major
            fireBaseData.refUser().child($scope.user_info.uid).update({ // set
                Major: extras.Major
            });
        }
    };
    $scope.cancel = function() {
        // Simple Reload
        $window.location.reload(true);
        console.log("CANCEL");
    }
})

//.controller('menu2Ctrl', function($scope, $rootScope, $ionicSideMenuDelegate, fireBaseData, $state,
//    $ionicHistory, $firebaseArray, sharedCartService, sharedUtils) {
//
//    //Check if user already logged in
//   firebase.auth().onAuthStateChanged(function(user) {
//        if (user) {
//            $scope.user_info = user; //Saves data to user_info
//        } else {
//
//            $ionicSideMenuDelegate.toggleLeft(); //To close the side bar
//            $ionicSideMenuDelegate.canDragContent(false); // To remove the sidemenu white space
//
//            $ionicHistory.nextViewOptions({
//                historyRoot: true
//            });
//            $rootScope.extras = false;
//            sharedUtils.hideLoading();
//            $state.go('tabsController.login', {}, { location: "replace" });
//
//        }
//    });
//
//    // On Loggin in to menu page, the sideMenu drag state is set to true
//    $ionicSideMenuDelegate.canDragContent(true);
//    $rootScope.extras = true;
//
//    // When user visits A-> B -> C -> A and clicks back, he will close the app instead of back linking
//    $scope.$on('$ionicView.enter', function(ev) {
//        if (ev.targetScope !== $scope) {
//            $ionicHistory.clearHistory();
//            $ionicHistory.clearCache();
//        }
//    });
//
//
//
//    $scope.loadMenu = function() {
//        sharedUtils.showLoading();
//        $scope.menu = $firebaseArray(fireBaseData.refMenu());
//        sharedUtils.hideLoading();
//    }
//
//    $scope.showProductInfo = function(id) {
//
//    };
//    $scope.addToCart = function(item) {
//        sharedCartService.add(item);
//    };
//
//})




