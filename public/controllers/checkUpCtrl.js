(function () {

    var app = angular.module('checkUpController', ['authServices','userServices'])

    app.config(function () {

            console.log("checkUp Controller Loaded...")

    })

    app.controller('checkUpCtrl', function ($rootScope, $scope, Auth, User, $timeout, $location, $rootScope,$window,$interval) {

        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()    
            console.log($window.innerHeight)
            $scope.$watch('windowHeight', function(newValue, oldValue) {
                if(newValue!==oldValue) {
                 console.log(newValue);
                 $scope.windowHeight = 731
                } 
             });
            //$rootScope.windowHeight = 10000

            if(!Auth.isLoggedIn()){

                Auth.logout()

            }

        })


        $scope.checkUpData      = {

        }
        
        $scope.sessionData      = {

        }

        $scope.timeData         = {

        }

        $scope.discoveryData    = {

        }

        $scope.checkupData      = {

        }
        
        $scope.dateData         = {

        }


        $scope.bookCheckUp8 = true
        $scope.bookCheckUp9 = true;
        $scope.bookCheckUp18 = true;
        $scope.bookCheckUp19 = true;
        $scope.bookCheckUp29 = true;
        $scope.bookCheckUp39 = true;
        $scope.bookCheckUp49 = true;
        $scope.bookCheckUp59 = true;
        $scope.bookCheckUp28 = true;
        $scope.bookCheckUp29 = true;
        $scope.bookCheckUp39 = true;
        $scope.bookCheckUp49 = true;
        $scope.bookCheckUp59 = true;
        $scope.bookCheckUp10 = true;
        $scope.bookCheckUp110 = true;
        $scope.bookCheckUp210 = true;
        $scope.bookCheckUp310 = true;
        $scope.bookCheckUp410 = true;
        $scope.bookCheckUp510 = true;
        $scope.bookCheckUp11 = true;
        $scope.bookCheckUp111 = true;
        $scope.bookCheckUp211 = true;
        $scope.bookCheckUp311 = true;
        $scope.bookCheckUp411 = true;
        $scope.bookCheckUp511 = true;
        $scope.bookCheckUp12 = true;
        $scope.bookCheckUp112 = true;
        $scope.bookCheckUp212 = true;
        $scope.bookCheckUp312 = true;
        $scope.bookCheckUp412 = true;
        $scope.bookCheckUp512 = true;
        $scope.bookCheckUp1 = true;
        $scope.bookCheckUp11 = true;
        $scope.bookCheckUp21 = true;
        $scope.bookCheckUp31 = true;
        $scope.bookCheckUp41 = true;
        $scope.bookCheckUp51 = true;
        $scope.bookCheckUp2 = true;
        $scope.bookCheckUp102 = true;
        $scope.bookCheckUp22 = true;
        $scope.bookCheckUp32 = true;
        $scope.bookCheckUp42 = true;
        $scope.bookCheckUp52 = true;
        $scope.bookCheckUp3 = true;
        $scope.bookCheckUp13 = true;
        $scope.bookCheckUp23 = true;
        $scope.bookCheckUp33 = true;
        $scope.bookCheckUp43 = true;
        $scope.bookCheckUp53 = true;
        $scope.bookCheckUp38 = true;
        $scope.bookCheckUp48 = true;
        $scope.bookCheckUp58 = true;

        $scope.nineOClock = false;
        $scope.eightOClock = false;

        $scope.audio                = new Audio("../audio/shinebrightclick.wav")
        $scope.shinebrighterror     = new Audio("../audio/shinebrighterror.wav");
        $scope.shinebrightloading   = new Audio('../audio/shinebrightloading.wav');
        $scope.shinebrightsuccess   = new Audio('../audio/shinebrightsuccess.wav');
        $scope.shinebrighttap       = new Audio('../audio/shinebrighttap.wav');

        $scope.isCurrentlybooked = false;

        $scope.fadeInLoading = true;

        $scope.checkUpData = {

        }


            $scope.currentHour = $window.localStorage.getItem('hour')

            $scope.condition = { show : ($scope.test  === 'test1')};

            console.log($window.localStorage.getItem('currentDate') == "2020-22-30")
            console.log($window.localStorage.getItem('hour') == "nine")

            if($window.localStorage.getItem('hour') == 'nine'){

                $scope.nineOClock = true;
                $scope.eightOClock = false;
                console.log("This Should Run...")
                
            }else{

                $scope.eightOClock = true;
                $scope.nineOClock = false;


            }
            console.log("currentHour", $scope.currentHour)
            $scope.currentDate = $window.localStorage.getItem('currentDate')


            $scope.selectTime = function (time, booked) {

                $scope.isCurrentlyBooked      = booked;
    
                $scope.discovery800AMIsBooked = false;
                $scope.discovery810AMIsBooked = false;
                $scope.discovery820AMIsBooked = false;
                $scope.discovery830AMIsBooked = false;
                $scope.discovery840AMIsBooked = false;
                $scope.discovery850AMIsBooked = false;
                $scope.session800AMIsBooked = false;
                $scope.session810AMIsBooked = false;
                $scope.session820AMIsBooked = false;
                $scope.session830AMIsBooked = false;
                $scope.session840AMIsBooked = false;
                $scope.session850AMIsBooked = false;
                $scope.checkUp800AMIsBooked = false;
                $scope.checkUp810AMIsBooked = false;
                $scope.checkUp820AMIsBooked = false;
                $scope.checkUp830AMIsBooked = false;
                $scope.checkUp840AMIsBooked = false;
                $scope.checkUp850AMIsBooked = false;
                $scope.discovery900AMIsBooked = false;
                $scope.discovery910AMIsBooked = false;
                $scope.discovery920AMIsBooked = false;
                $scope.discovery930AMIsBooked = false;
                $scope.discovery940AMIsBooked = false;
                $scope.discovery950AMIsBooked = false;
                $scope.session900AMIsBooked = false;
                $scope.session910AMIsBooked = false;
                $scope.session920AMIsBooked = false;
                $scope.session930AMIsBooked = false;
                $scope.session940AMIsBooked = false;
                $scope.session950AMIsBooked = false;
                $scope.checkUp900AMIsBooked = false;
                $scope.checkUp910AMIsBooked = false;
                $scope.checkUp920AMIsBooked = false;
                $scope.checkUp930AMIsBooked = false;
                $scope.checkUp940AMIsBooked = false;
                $scope.checkUp950AMIsBooked = false;
    
    
                if (time == "8:10") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = true;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = true;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = true;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time = "8:10am"
                        $scope.sessionData.time = "8:10am"
                        $scope.checkUpData.time = "8:10am"
    
                    } else {
    
                        $scope.discovery810AMIsBooked   = true;
                        $scope.session810AMIsBooked     = true;
                        $scope.checkUp810AMIsBooked     = true;
    
                    }
    
                }
                if (time == "8:20") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = true;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = true;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = true;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:20am"
                        $scope.sessionData.time     = "8:20am"
                        $scope.checkUpData.time     = "8:20am"
    
    
    
    
                    } else {
    
                        $scope.discovery820AMIsBooked   = true;
                        $scope.session820AMIsBooked     = true;
                        $scope.checkUp820AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
    
                    }
    
                }
                if (time == "8:30") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = true;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = true;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = true;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:30am"
                        $scope.sessionData.time     = "8:30am"
                        $scope.checkUpData.time     = "8:30am"
    
                    } else {
    
                        $scope.discovery830AMIsBooked   = true;
                        $scope.session830AMIsBooked     = true;
                        $scope.checkUp830AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
                    }
    
                }
                if (time == "8:40") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = true;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = true;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = true;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:40am"
                        $scope.sessionData.time     = "8:40am"
                        $scope.checkUpData.time     = "8:40am"
    
    
    
    
                    } else {
    
                        $scope.discovery840AMIsBooked   = true;
                        $scope.session840AMIsBooked     = true;
                        $scope.checkUp840AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
                    }
    
                }
                if (time == "8:50") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = true;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = true;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = true;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:50am"
                        $scope.sessionData.time     = "8:50am"
                        $scope.checkUpData.time     = "8:50am"
    
    
    
                    } else {
    
                        $scope.discovery850AMIsBooked   = true;
                        $scope.session850AMIsBooked     = true;
                        $scope.checkUp850AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
    
                    }
    
                }
                if (time == "8:00") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = true;
                        $scope.session800AMSelected = true;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = true;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:00am"
                        $scope.sessionData.time     = "8:00am"
                        $scope.checkUpData.time     = "8:00am"
    
    
    
                    } else {
    
                        $scope.discovery800AMIsBooked   = true;
                        $scope.session800AMIsBooked     = true;
                        $scope.checkUp800AMIsBooked     = true;
                        $scope.shinebrighterror.play()
                    }
    
                }
    
 
                if (time == "9:10") {
    
                    if (!booked) {

               
                        $scope.discovery910AMSelected = true;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = true;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = true;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:10am"
                        $scope.sessionData.time     = "9:10am"
                        $scope.checkUpData.time     = "9:10am"
    
    
    
                    } else {
    
                        $scope.discovery910AMIsBooked   = true;
                        $scope.session910AMIsBooked     = true;
                        $scope.checkUp910AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:20") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = true;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = true;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = true;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:20am"
                        $scope.sessionData.time     = "9:20am"
                        $scope.checkUpData.time     = "9:20am"
    
    
    
                    } else {
    
                        $scope.discovery920AMIsBooked   = true;
                        $scope.session920AMIsBooked     = true;
                        $scope.checkUp920AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:30") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = true;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = true;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = true;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:30am"
                        $scope.sessionData.time     = "9:30am"
                        $scope.checkUpData.time     = "9:30am"
    
    
                    } else {
    
                        $scope.discovery930AMIsBooked   = true;
                        $scope.session930AMIsBooked     = true;
                        $scope.checkUp930AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:40") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = true;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = true;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = true;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:40am"
                        $scope.sessionData.time     = "9:40am"
                        $scope.checkUpData.time     = "9:40am"

                        /*
                        $interval(function(){

                            $scope.fadeInLoading = false;

                        },500)

                        $interval(function(){

                            $scope.fadeInLoading = true;

                        },1000)
                        */
    
    
    
                    } else {
    
                        $scope.discovery940AMIsBooked   = true;
                        $scope.session940AMIsBooked     = true;
                        $scope.checkUp940AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:50") {
                    console.log("here")
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = true;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = true;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = true;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:50am"
                        $scope.sessionData.time     = "9:50am"
                        $scope.checkUpData.time     = "9:50am"
    
    
                    } else {
    
                        $scope.discovery950AMIsBooked   = true;
                        $scope.session950AMIsBooked     = true;
                        $scope.checkUp950AMIsBooked     = true;
                        console.log('HErEx',$scope.checkUp950AMSelected)
                        
    
                    }
    
                }
                if (time == "9:00") {
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = true;
                        $scope.session900AMSelected = true;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = true;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:00am"
                        $scope.sessionData.time     = "9:00am"
                        $scope.checkUpData.time     = "9:00am"
    
    
                    } else {
    
                        $scope.discovery900AMIsBooked   = true;
                        $scope.session900AMIsBooked     = true;
                        $scope.checkUp900AMIsBooked     = true;
    
                    }
    
                }
    
    
            }
            $scope.dateDataForUser = {}

            $scope.submitCheckUp = function (hour) {

                //$scope.windowHeight = $window.innerHeight +150

                if (!$scope.isCurrentlyBooked){
    
                    $scope.shinebrightloading.play();
    
                    if ($scope.checkUpData.time == "8:00am" || $scope.checkUpData.time == "9:00am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"

                        console.log("Oy")
    
                        $scope.loadingBooking   = true;
                            
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[0]   = 2;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[0] === 2) {
    
    
                                        $timeout(function () {
    
                                            $scope.bookCheckUp8 = false;
                                            $scope.bookCheckUp9 = false;
    
                                            $timeout(function () {
    
                                                $scope.loadingBooking = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:00am") {
    
                                    $scope.dateDataForUser.time = "8:00am - 8:10am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 0
    
    
                                }
                                if ($scope.checkUpData.time == "9:00am") {
    
                                    $scope.dateDataForUser.time = "9:00am - 9:10am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 0
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
                    if ($scope.checkUpData.time == "8:10am" || $scope.checkUpData.time == "9:10am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"
    
                        $scope.loadingBooking1   = true;
                            
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[1]   = 2;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[1] === 2) {
    
    
                                        $timeout(function () {
    
                                            $scope.bookCheckUp18 = false;
                                            $scope.bookCheckUp19 = false;
    
                                            $timeout(function () {
    
                                                $scope.loadingBooking1 = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:10am") {
    
                                    $scope.dateDataForUser.time = "8:10am - 8:20am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 1
    
    
                                }
                                if ($scope.checkUpData.time == "9:10am") {
    
                                    $scope.dateDataForUser.time = "9:10am - 9:20am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 1
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
                    if ($scope.checkUpData.time == "8:20am" || $scope.checkUpData.time == "9:20am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"
    
                        $scope.loadingBooking2   = true;
                            
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[2]   = 2;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[2] === 2) {
    
    
                                        $timeout(function () {
    
                                            $scope.bookCheckUp28 = false;
                                            $scope.bookCheckUp29 = false;
    
                                            $timeout(function () {
    
                                                $scope.loadingBooking2 = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:20am") {
    
                                    $scope.dateDataForUser.time = "8:20am - 8:30am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 2
    
    
                                }
                                if ($scope.checkUpData.time == "9:20am") {
    
                                    $scope.dateDataForUser.time = "9:20am - 9:30am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 2
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
                    if ($scope.checkUpData.time == "8:30am" || $scope.checkUpData.time == "9:30am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"
    
                        $scope.loadingBooking3   = true;
                            
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[3]   = 2;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[3] === 2) {
    
    
                                        $timeout(function () {
                                            
                                            if($scope.checkUpData.time == "8:30am"){

                                                $scope.bookCheckUp38 = false;

                                            }

                                            if($scope.checkUpData.time == "9:30am"){

                                                $scope.bookCheckUp39 = false;
                                                console.log("oy")

                                            }
    
                                            $timeout(function () {
    
                                                $scope.loadingBooking3 = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:30am") {
    
                                    $scope.dateDataForUser.time = "8:30am - 8:40am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 3
    
    
                                }
                                if ($scope.checkUpData.time == "9:30am") {
    
                                    $scope.dateDataForUser.time = "9:30am - 9:40am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 3
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
                    if ($scope.checkUpData.time == "8:40am" || $scope.checkUpData.time == "9:40am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"
                        //$scope.loadingBooking4   = true;


                        $interval(function(){

                            $scope.fadeInLoading = false;

                        },500)

                        $interval(function(){

                            $scope.fadeInLoading = true;

                        },1000)
    
                        $scope.bookCheckUp49 = false;



                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
                            data.data.date[hour].state[4]   = 0;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[4] === 2) {
    
    
                                        $timeout(function () {
    
                                            $scope.bookCheckUp48 = false;
    
                                            $timeout(function () {
    
                                                $scope.loadingBooking4 = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:40am") {
    
                                    $scope.dateDataForUser.time = "8:40am - 8:50am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 4
    
    
                                }
                                if ($scope.checkUpData.time == "9:40am") {
    
                                    $scope.dateDataForUser.time = "9:40am - 9:50am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 4
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
                    if ($scope.checkUpData.time == "8:50am" || $scope.checkUpData.time == "9:50am") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0"
                        $scope.loadingBooking5   = true;
                            
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[5]   = 2;
                            $scope.dateData.dateInfo        = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
                                $scope.checkUp810AMSelected = false;
                                $scope.checkUp820AMSelected = false;
                                $scope.checkUp830AMSelected = false;
                                $scope.checkUp840AMSelected = false;
                                $scope.checkUp850AMSelected = false;
                                $scope.checkUp8AMSelected   = false;
                                $scope.checkUp910AMSelected = false;
                                $scope.checkUp920AMSelected = false;
                                $scope.checkUp930AMSelected = false;
                                $scope.checkUp940AMSelected = false;
                                $scope.checkUp950AMSelected = false;
                                $scope.checkUp9AMSelected   = false;
    
                                $scope.dateDataForUser.date = $scope.currentDate;

                                console.log(data.data)
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[5] === 2) {
    
    
                                        $timeout(function () {
    
                                            $scope.bookCheckUp58 = false;
                                            $scope.bookCheckUp59 = false;
                                            $rootScope.windowHeight = $window.innerHeight

    
                                            $timeout(function () {
    
                                                $scope.loadingBooking5 = false;
                                                $scope.shinebrightsuccess.play()
    
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.checkUpData.time == "8:50am") {
    
                                    $scope.dateDataForUser.time = "8:50am - 9:00am";
                                    $scope.dateDataForUser.hour = 'eight';
                                    $scope.dateDataForUser.slot = 5
    
    
                                }
                                if ($scope.checkUpData.time == "9:50am") {
    
                                    $scope.dateDataForUser.time = "9:50am - 10:00am";
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 5
    
                                }
                                
                                $scope.dateDataForUser.appointmentType = "Check-Up!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
    
                                User.addBooking($scope.dateDataForUser).then(function (data) {

                                    console.log(data)
    
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                  
                                })
    
                            })
    
                        })
    
                    }
    
    
            }else{
    
                $scope.shinebrighterror.play()
    
            }
    
            }

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                console.log(data)

                $scope.globalDateInformation = data.data.date;

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.currentHour == "nine") {


                        
                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookCheckUp29 = false;
                            console.log("THIS SHOULDN'T RUN THERE ARE NO 3s")

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.currentHour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            console.log("THIS SHOULDN'T RUN NO THREES")

                        }
                        

                    }

                    
                    if ($scope.currentHour == "eight") {
                        

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookCheckUp28 = false;
                            console.log("shouldn't be here...")

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.currentHour == "nine") {

                        console.log($scope.globalDateInformation[$scope.currentHour].state[2])

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookCheckUp19 = false;
                            console.log("this shouldn't run")

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookCheckUp29 = false;
                            console.log("THIS SHOULDN'T RUN")

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {
                            console.log("$scope.bookCheckUp29", $scope.bookCheckUp29)


                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookCheckUp59 = false;

                        }

           

                    }
                    

                    console.log("$scope.bookCheckUp29", $scope.bookCheckUp29)



            })

        
        $scope.openBookingPage = function (slot) {

            $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
            
            $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

        }

      
    
    })

}());