angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
  .state('tabsController.signup', {
    url:'/SignupMenu',
    views: {
      'tab3': {
        templateUrl: 'templates/SignupMenu.html',
         controller:'SignupMenuControl'
      }
    }
  })
  .state('menu2', {
      url: '/page7',
      templateUrl: 'templates/menu2.html',
      controller: 'menu2Ctrl'
    })
  .state('favourite', {
    url: '/page11',
    templateUrl: 'templates/favourite.html',
    controller: 'favouriteCtrl'
  })
  .state('settings', {
    url: '/page12',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })
  .state('tabsController.forgotPassword', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
      }
    }
  })
//**Controllers Tae
.state('subject',{
    url:'/subject',
    templateUrl:'templates/subject.html',
    controller:'subjectControl'
  })
.state('activities',{
    url:'/activities',
    templateUrl:'templates/activities.html',
    controller:'activitiesControl'
  })
.state('SignupMenu',{
    url:'/SignupMenu',
    templateUrl:'templates/SignupMenu.html',
    controller:'SignupMenuControl'
  })
.state('Signupstudent',{
    url:'/Signupstudent',
    templateUrl:'templates/Signupstudent.html',
    controller:'SignupstudentControl'
  })
.state('SignupAddmin',{
    url:'/SignupAddmin',
    templateUrl:'templates/SignupAddmin.html',
    controller:'SignupAddminControl'
  })
.state('Admin',{
    url:'/Admin',
    templateUrl:'templates/Admin.html',
    controller:'AdminControl'
  })
.state('AdminTeacher',{
    url:'/AdminTeacher',
    templateUrl:'templates/AdminTeacher.html',
    controller:'AdminTeacherControl'
  })
.state('AdminAdmin',{
    url:'/AdminAdmin',
    templateUrl:'templates/AdminAdmin.html',
    controller:'AdminAdminControl'
  })
.state('Addsubject',{
    url:'/Addsubject',
    templateUrl:'templates/Addsubject.html',
    controller:'AddsubjectControl'
  })
.state('Addactivities',{
    url:'/Addactivities',
    templateUrl:'templates/Addactivities.html',
    controller:'AddactivitiesControl'
  })
$urlRouterProvider.otherwise('/page1/page5')
});
