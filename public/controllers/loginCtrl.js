(function () {

    var app = angular.module('loginController', ['authServices','nxGeometryy'])

    app.config(function () {

  
    })

    app.controller('loginCtrl', function ($rootScope, $scope, Auth, $timeout, $location, $rootScope,$window) {


        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()    

            if(!Auth.isLoggedIn()){

                Auth.logout()
                $location.path('/')

            }

        })

        $scope.successfulLogin              = false;
        $scope.failedLogin                  = false;
        $scope.loading                      = false;
        $scope.fadein                       = false;
        $scope.errorMsg                     = false;
        $rootScope.atHome                   = true;

        $scope.audio                        = new Audio("../audio/shinebrightclick.wav")
        $scope.shinebrighterror             = new Audio("../audio/shinebrighterror.wav");
        $scope.shinebrightloading           = new Audio('../audio/shinebrightloading.wav');
        $scope.shinebrightsuccess           = new Audio('../audio/shinebrightsuccess.wav');
        $scope.shinebrighttap               = new Audio('../audio/shinebrighttap.wav');
    

      
        $scope.openModal = function () {

            $('#modal2').modal('open');
            
        }

        $scope.openModal();

        $scope.loginUser = function (loginData, valid) {


            $scope.failedLogin      = false;
            $scope.fadein           = true;
            $scope.succesfulLogin   = false;
            $scope.loading          = true;

            $scope.shinebrightloading.play()

            Auth.login(this.loginData).then(function (data) {
                console.log("SUCCESS")

                if (data.data.success) {

                    $rootScope.payPeriodIcon    = true;
                    $scope.fadein               = true;

                   // $scope.shinebrightsuccess.play()
                    $window.localStorage.setItem('_id', data.data.user._id)
                    $window.localStorage.setItem('intakeId', data.data.user._id)

                    if ( data.data.user.userclass == "admin" ) {

                        if(data.data.user.wellness){

                            $rootScope.viewWellness   = true;
                            
                        }else{

                            $rootScope.createWellness = true;

                        }
                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;

                            $location.path('/profile/' + data.data.user._id)

                        }, 3000)

                    } else if (data.data.user.userclass == "employee") {

                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;
                            $rootScope.loggedIn     = true;
                            console.log($rootScope.loggedIn)
                            $scope.shinebrightsuccess.play()   
                            $scope.loading              = false;
                            $scope.successfulLogin      = true;

                            //$window.location.href = "/clientprofile";
                            console.log("here")

                        }, 6000)

                        $timeout(function(){

                            $location.path('/clientprofile')
                            $scope.successfulLogin      = false;
                            $rootScope.atHome           = false;




                        },7000)
                    } else {

                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;
                            $rootScope.loggedIn     = true;
                            $location.path('/management')

                        }, 3000)

                    }


                } else {

                    $scope.loading      = false;
                    $scope.failedLogin  = true;
                    $scope.errorMsg     = data.data.message;

                    $timeout(function(){

                        $scope.fadein       = false;
                        $scope.failedLogin  = false;
                        $scope.errorMsg     = ""

                    },5000)

                }

            })

        }

        //function MyCtrl($scope) {
            $scope.setDirectiveFn = function(directiveFn) {
                $scope.directiveFn = directiveFn;
            };
        //}
        //MyCtrl()
        //console.log($scope.directiveFn)
    })

}());