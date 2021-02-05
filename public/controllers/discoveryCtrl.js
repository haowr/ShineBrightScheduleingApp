(function () {

    var app = angular.module('discoveryController', ['authServices','userServices'])

    app.config(function () {

            console.log("discovery Controller Loaded...")

    })

    app.controller('discoveryCtrl', function ($rootScope, $scope, Auth, User, $timeout, $location, $rootScope,$window,$interval) {

        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()  
          

            if(!Auth.isLoggedIn()){

                Auth.logout()
                $location.path('/')

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

            $scope.dateDataForUser  = {}

            $scope.bookDiscovery8 = true
            $scope.bookDiscovery9 = true;
            $scope.bookDiscovery18 = true;
            $scope.bookDiscovery19 = true;
            $scope.bookDiscovery28 = true;
            $scope.bookDiscovery29 = true;
            $scope.bookDiscovery39 = true;
            $scope.bookDiscovery49 = true;
            $scope.bookDiscovery59 = true;
            $scope.bookDiscovery10 = true;
            $scope.bookDiscovery110 = true;
            $scope.bookDiscovery210 = true;
            $scope.bookDiscovery310 = true;
            $scope.bookDiscovery410 = true;
            $scope.bookDiscovery510 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery111 = true;
            $scope.bookDiscovery211 = true;
            $scope.bookDiscovery311 = true;
            $scope.bookDiscovery411 = true;
            $scope.bookDiscovery511 = true;
            $scope.bookDiscovery12 = true;
            $scope.bookDiscovery112 = true;
            $scope.bookDiscovery212 = true;
            $scope.bookDiscovery312 = true;
            $scope.bookDiscovery412 = true;
            $scope.bookDiscovery512 = true;
            $scope.bookDiscovery1 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery21 = true;
            $scope.bookDiscovery31 = true;
            $scope.bookDiscovery41 = true;
            $scope.bookDiscovery51 = true;
            $scope.bookDiscovery2 = true;
            $scope.bookDiscovery102 = true;
            $scope.bookDiscovery22 = true;
            $scope.bookDiscovery32 = true;
            $scope.bookDiscovery42 = true;
            $scope.bookDiscovery52 = true;
            $scope.bookDiscovery3 = true;
            $scope.bookDiscovery13 = true;
            $scope.bookDiscovery23 = true;
            $scope.bookDiscovery33 = true;
            $scope.bookDiscovery43 = true;
            $scope.bookDiscovery53 = true;
            $scope.bookDiscovery38 = true;
            $scope.bookDiscovery48 = true;
            $scope.bookDiscovery58 = true;

            $scope.fadeInLoading = true;
            $scope.fadeInLoading1 = true;
            $scope.fadeInLoading2 = true;
            $scope.fadeInLoading3 = true;
            $scope.fadeInLoading4 = true;
            $scope.fadeInLoading5 = true;

            $scope.currentHour = $window.localStorage.getItem('hour')
            console.log("Current Hour", $scope.currentHour)
            $scope.currentDate = $window.localStorage.getItem('currentDate')


    // store the interval promise in this variable
    var promise;
    var promise2;
    var promise11, promise12, promise21, promise22, promise31, promise32, promise41, promise42,promise51, promise52
  
    
    // starts the interval
    $scope.start = function(hour) {
      // stops any running interval to avoid two intervals running at the same time
      $scope.stop(); 
      
      // store the interval promise

      
      if (hour == "8:00am" || hour == "9:00am") {
        promise =    $interval(function(){

            $scope.fadeInLoading = false;
    
        },500)
        promise2 = $interval(function(){
    
            $scope.fadeInLoading = true;
    
        },1000)
       
    
       } 
  
       if (hour == "8:10am" || hour == "9:10am") {
        promise11 =    $interval(function(){

            $scope.fadeInLoading1 = false;
    
        },500)
        promise12 = $interval(function(){
    
            $scope.fadeInLoading1 = true;
    
        },1000)
       
    
       }
      
    
    if (hour == "8:20am" || hour == "9:20am") {

        promise21 =    $interval(function(){

            $scope.fadeInLoading2 = false;
    
        },500)
    
        promise22 = $interval(function(){
    
            $scope.fadeInLoading2 = true;
    
        },1000)

        console.log("Should be here...")
    
    
    }
    if (hour == "8:30am" || hour == "9:30am") {

        promise31 =    $interval(function(){

            $scope.fadeInLoading3 = false;
    
        },500)

        promise32 =    $interval(function(){
    
            $scope.fadeInLoading3 = true;
    
        },1000)

    
    }
    if (hour == "8:40am" || hour == "9:40am") {

        promise41 =    $interval(function(){

            $scope.fadeInLoading4 = false;
    
        },500)
        promise42 =    $interval(function(){
    
            $scope.fadeInLoading4 = true;
    
        },1000)
    
    
    }
    if (hour == "8:50am" || hour == "9:50am") {

    promise51 =    $interval(function(){

        $scope.fadeInLoading5 = false;

    },500)
    promise52 =    $interval(function(){

        $scope.fadeInLoading5 = true;

    },1000)

}


    };

    // stops the interval
    $scope.stop = function() {
        $interval.cancel(promise)
        $interval.cancel(promise2)  
        $interval.cancel(promise11)
      $interval.cancel(promise12)    
        $interval.cancel(promise21)
        $interval.cancel(promise22)        
      $interval.cancel(promise31)
      $interval.cancel(promise32)
      $interval.cancel(promise41)
      $interval.cancel(promise42)
      $interval.cancel(promise51)
      $interval.cancel(promise52)
      console.log("this has run..")

    };
    //$scope.start()
    // starting the interval by default
 
    // stops the interval when the scope is destroyed,
    // this usually happens when a route is changed and 
    // the ItemsController $scope gets destroyed. The
    // destruction of the ItemsController scope does not
    // guarantee the stopping of any intervals, you must
    // be responsible for stopping it when the scope is
    // is destroyed.
    $scope.$on('$destroy', function() {
      $scope.stop();
    });

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                //console.log(data)

                $scope.globalDateInformation = data.data.date;

                    if ($scope.currentHour == "eight") {

                        console.log("Discovery Date Information...")
                        console.log($scope.globalDateInformation['eight'])
                   

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }

                    if ($scope.currentHour == "nine") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                


                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.currentHour == "nine") {
                        //$location.path("/datepage/discovery");


                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                


            })

            $scope.selectTime = function (time, booked) {

                console.log('Oy')
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

            $scope.openBookingPage = function (slot) {

                $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
                
                $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

            }

            $scope.submitDiscovery = function (hour) {
            
                if (!$scope.isCurrentlyBooked){
    
                    $scope.shinebrightloading.play();
    
                    if ($scope.discoveryData.time == "8:00am" || $scope.discoveryData.time == "9:00am") {
    

                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
    
                        //$scope.loadingBooking   = true;
                        $scope.start($scope.discoveryData.time)
                        
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            console.log(data)
    
    
                            data.data.date[hour].state[0] = 2
                            data.data.date[hour].state[1] = 2
                            data.data.date[hour].state[2] = 2
                            $scope.dateData.dateInfo = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
    
                                
                                $scope.discovery810AMSelected   = false;
                                $scope.discovery820AMSelected   = false;
                                $scope.discovery830AMSelected   = false;
                                $scope.discovery840AMSelected   = false;
                                $scope.discovery850AMSelected   = false;
                                $scope.discovery8AMSelected     = false;
                                $scope.discovery910AMSelected   = false;
                                $scope.discovery920AMSelected   = false;
                                $scope.discovery930AMSelected   = false;
                                $scope.discovery940AMSelected   = false;
                                $scope.discovery950AMSelected   = false;
                                $scope.discovery9AMSelected     = false;
    
    
                                $scope.dateDataForUser.date     = $scope.currentDate;
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[0] === 2) {
    
                                        $scope.bookDiscovery8 = false;
                                        $scope.bookDiscovery9 = false;
    
                                        $timeout(function () {
    
                                            $scope.bookDiscovery18 = false;
                                            $scope.bookDiscovery19 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery28 = false;
                                                $scope.bookDiscovery29 = false;
    
                                                $timeout(function () {
    
                                                    //$scope.loadingBooking = false;
                                                    $scope.stop()
                                                    $scope.shinebrightsuccess.play()
    
                                                }, 500)
    
                                            }, 500)
    
                                        }, 500)
    
                                    }
    
                                }, 1000)
    
                                if ($scope.discoveryData.time == "8:00am") {
    
                                    $scope.dateDataForUser.time = "8:00am - 8:30am"
                                    $scope.dateDataForUser.hour = "eight";
                                    $scope.dateDataForUser.slot = 0;
    
                                }
                                if ($scope.discoveryData.time == "9:00am") {
    
                                    $scope.dateDataForUser.time = "9:00am - 9:30am"
                                    $scope.dateDataForUser.hour = "nine";
                                    $scope.dateDataForUser.slot = 0;
    
                                }
    
                                $scope.dateDataForUser.appointmentType  = "Discovery!";
                                $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                
                                User.addBooking($scope.dateDataForUser).then(function (data) {
                                
                                    if (data.data.user.calender["88"][22]) {
    
                                        $scope.booked1222 = true;
    
                                    }
                                
    
                                })
    
                            })
    
                        })
    
                    }
                    
    
                    if ($scope.discoveryData.time == "8:10am" || $scope.discoveryData.time == "9:10am" ||
                        $scope.discoveryData.time == "10:10am" || $scope.discoveryData.time == "11:10am" ||
                        $scope.discoveryData.time == "12:10pm" || $scope.discoveryData.time == "1:10pm" ||
                        $scope.discoveryData.time == "2:10pm" || $scope.discoveryData.time == "3:10pm") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
                        $scope.bookDiscovery    = false;
                        //$scope.loadingBooking1  = true;
                        $scope.start($scope.discoveryData.time)

    
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
                            data.data.date[hour].state[1] = 2
                            data.data.date[hour].state[2] = 2
                            data.data.date[hour].state[3] = 2
    
                            $scope.dateData.dateInfo = data.data.date[hour].state
    
                            if (data.data.date[hour].state[4] === 2) {
    
                                $scope.discovery810AMNoRoom = true;
                                $scope.shinebrighterror.play()
    
                            } else {
    
                                User.updateDate($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[1] === 2) {
    
                                            $scope.bookDiscovery8 = false;
                                            $scope.bookDiscovery9 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery18 = false;
                                                $scope.bookDiscovery19 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery28 = false;
                                                    $scope.bookDiscovery29 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.bookDiscovery38 = false;
                                                        $scope.bookDiscovery39 = false;
    
                                                        $timeout(function () {
    
                                                            //$scope.loadingBooking1 = false;
                                                            $scope.stop()
                                                            $scope.shinebrightsuccess.play()
    
                                                        }, 500)
    
                                                    }, 500)
    
                                                }, 500)
    
                                            }, 500)
    
                                        }
    
                                    }, 1000)
    
                                    if ($scope.discoveryData.time == "8:10am") {
    
                                        $scope.dateDataForUser.time = "8:10am - 8:40am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 1;
    
                                    }
                                    if ($scope.discoveryData.time == "9:10am") {
    
                                        $scope.dateDataForUser.time = "9:10am - 9:40am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 1;
    
                                    }
    
                                    $scope.dateDataForUser.appointmentType = "Discovery!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
                                        
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
                                            //console.log("hero")
                                        }
                                       
                                    })
    
                                })
    
                            }
    
                        })
    
                    }
    
                    if ($scope.discoveryData.time == "8:20am" || $scope.discoveryData.time == "9:20am" ||
                        $scope.discoveryData.time == "10:20am" || $scope.discoveryData.time == "11:20am" ||
                        $scope.discoveryData.time == "12:20pm" || $scope.discoveryData.time == "1:20pm" ||
                        $scope.discoveryData.time == "2:20pm" || $scope.discoveryData.time == "3:20pm") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
    
                        $scope.bookDiscovery    = false;
                        $scope.start($scope.discoveryData.time)
    
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
                            if (data.data.date[hour].state[3] === 2) {
    
                                $scope.discovery820AMNoRoom = true;
                                $scope.shinebrighterror.play()
    
                            } else {
    
                                data.data.date[hour].state[2] = 2
                                data.data.date[hour].state[3] = 2
                                data.data.date[hour].state[4] = 2
    
                                $scope.dateData.dateInfo = data.data.date[hour].state
    
                                User.updateDate($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[2] === 2) {
    
                                            $scope.bookDiscovery8 = false;
                                            $scope.bookDiscovery9 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery18 = false;
                                                $scope.bookDiscovery19 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery28 = false;
                                                    $scope.bookDiscovery29 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.bookDiscovery38 = false;
                                                        $scope.bookDiscovery39 = false;
    
                                                        $timeout(function () {
    
                                                            $scope.bookDiscovery48 = false;
                                                            $scope.bookDiscovery49 = false;
    
                                                            $timeout(function () {
    
                                                                //$scope.loadingBooking2 = false;
                                                                $scope.stop()
                                                                $scope.shinebrightsuccess.play()
    
                                                            }, 500)
    
                                                        }, 500)
    
                                                    }, 500)
    
                                                }, 500)
    
                                            }, 500)
    
    
                                        }
    
                                    }, 1000)
    
                                    if ($scope.discoveryData.time == "8:20am") {
    
                                        $scope.dateDataForUser.time = "8:20am - 8:50am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 2;
    
                                    }
                                    if ($scope.discoveryData.time == "9:20am") {
    
                                        $scope.dateDataForUser.time = "9:20am - 9:50am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 2;
    
                                    }
    
                                    $scope.dateDataForUser.appointmentType = "Discovery!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
    
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
                                            //console.log("hero")
                                        }
                                       
                                    })
    
                                })
    
                            }
    
                        })
    
                    }
    
                    if ($scope.discoveryData.time == "8:30am" || $scope.discoveryData.time == "9:30am" ||
                        $scope.discoveryData.time == "10:30am" || $scope.discoveryData.time == "11:30am" ||
                        $scope.discoveryData.time == "12:30pm" || $scope.discoveryData.time == "1:30pm" ||
                        $scope.discoveryData.time == "2:30pm" || $scope.discoveryData.time == "3:30pm") {
    
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
    
                        $scope.bookDiscovery    = false;
                        $scope.start($scope.discoveryData.time)
    
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
    
                            data.data.date[hour].state[3] = 2
                            data.data.date[hour].state[4] = 2
                            data.data.date[hour].state[5] = 2
                            $scope.dateData.dateInfo = data.data.date[hour].state
    
                            User.updateDate($scope.dateData).then(function (data) {
    
    
                                $scope.dateDataForUser.date = $scope.currentDate;
    
                                $timeout(function () {
    
                                    if (data.data.date[hour].state[3] === 2) {
    
                                        $scope.bookDiscovery18 = false;
                                        $scope.bookDiscovery19 = false;
    
                                        $timeout(function () {
    
                                            $scope.bookDiscovery28 = false;
                                            $scope.bookDiscovery29 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery38 = false;
                                                $scope.bookDiscovery39 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery48 = false;
                                                    $scope.bookDiscovery49 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.bookDiscovery58 = false;
                                                        $scope.bookDiscovery59 = false;
    
                                                        $timeout(function () {
                                                            
                                                            $scope.stop()
                                                            $scope.shinebrightsuccess.play()
    
                                                        }, 500)
    
                                                    }, 500)
    
                                                }, 500)
    
                                            }, 500)
    
                                        }, 500)
    
                                        if ($scope.discoveryData.time == "8:30am") {
    
                                            $scope.dateDataForUser.time = "8:30am - 9:00am"
                                            $scope.dateDataForUser.hour = "eight";
                                            $scope.dateDataForUser.slot = 3;
            
                                        }
                                        if ($scope.discoveryData.time == "9:30am") {
            
                                            $scope.dateDataForUser.time = "9:30am - 10:00am"
                                            $scope.dateDataForUser.hour = "nine";
                                            $scope.dateDataForUser.slot = 3;
            
                                        }
            
                                        $scope.dateDataForUser.appointmentType = "Discovery!";
                                        $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                        
                                        User.addBooking($scope.dateDataForUser).then(function (data) {
         
                                            if (data.data.user.calender["88"][22]) {
                
                                                $scope.booked1222 = true;
                                                //console.log("hero")
                                            }
                                    
                                        })
    
                                    }
    
                                }, 1000)
    
                            })
                        })
                    }
    
                    if ($scope.discoveryData.time == "8:40am" || $scope.discoveryData.time == "9:40am" ||
                        $scope.discoveryData.time == "10:40am" || $scope.discoveryData.time == "11:40am" ||
                        $scope.discoveryData.time == "12:40pm" || $scope.discoveryData.time == "1:40pm" ||
                        $scope.discoveryData.time == "2:40pm" || $scope.discoveryData.time == "3:40pm") {
   
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
    
                        $scope.bookDiscovery    = false;
                        $scope.start($scope.discoveryData.time)
    
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
                            data.data.date[hour].state[4] = 2
                            data.data.date[hour].state[5] = 2
    
                            if (hour == 'eight' && data.data.date['nine'].state[0] === 0) {
    
                                $scope.hourPlusOne                          = 'nine'
                                data.data.date[$scope.hourPlusOne].state[0] = 2
    
                                $scope.dateData.dateInfo                    = data.data.date[hour].state
                                $scope.dateData.nexthour                    = $scope.hourPlusOne
                                $scope.dateData.dateInfoNextHour            = data.data.date[$scope.hourPlusOne].state
    
                                User.updateDateNextHour($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[4] === 2) {
    
                                            $scope.bookDiscovery18 = false;
                                            $scope.bookDiscovery19 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery28 = false;
                                                $scope.bookDiscovery29 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery38 = false;
                                                    $scope.bookDiscovery39 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.bookDiscovery48 = false;
                                                        $scope.bookDiscovery49 = false;
    
                                                        $timeout(function () {
    
                                                            $scope.bookDiscovery58 = false;
                                                            $scope.bookDiscovery59 = false;
    
                                                            $timeout(function () {

                                                                $scope.stop()
                                                                $scope.shinebrightsuccess.play()
    
                                                            }, 500)
    
                                                        }, 500)
    
                                                    }, 500)
    
                                                }, 500)
    
                                            }, 500)
    
                                        }
    
                                    }, 1000)
    
                                    if ($scope.discoveryData.time == "8:40am") {
    
                                        $scope.dateDataForUser.time = "8:40am - 9:10am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 4;
    
                                    }
                                    if ($scope.discoveryData.time == "9:40am") {
            
                                        $scope.dateDataForUser.time = "9:40am - 10:10am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 4;
        
                                    }
        
             
    
                                    $scope.dateDataForUser.appointmentType  = "Discovery!";
                                    $scope.dateDataForUser.id               = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
    
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
    
                                        }
                                    
                                    })
                                    
                                })
    
                            }
    
                            if (hour == 'nine' && data.data.date['nine'].state[0] === 0) {
    
                                $scope.hourPlusOne                          = 'nine'
                                data.data.date[$scope.hourPlusOne].state[0] = 2
    
                                $scope.dateData.dateInfo            = data.data.date[hour].state
                                $scope.dateData.nexthour            = $scope.hourPlusOne
                                $scope.dateData.dateInfoNextHour    = data.data.date[$scope.hourPlusOne].state
    
                                User.updateDateNextHour($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[4] === 2) {
    
                                            $scope.bookDiscovery29 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery39 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery49 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.bookDiscovery59 = false;
    
                                                        $timeout(function () {

                                                            //$scope.stop()
                                                            $scope.shinebrightsuccess.play()
    
                                                        }, 500)
    
    
                                                    }, 500)
    
                                                }, 500)
    
                                            }, 500)
    
                                        }
    
                                    }, 1000)
    
                                    if ($scope.discoveryData.time == "9:40am") {
    
                                        $scope.dateDataForUser.time = "9:40am - 10:10am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 4;
    
                                    }
    
                                    $scope.dateDataForUser.appointmentType = "Discovery!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
    
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
    
                                        }
                                
                                    })
    
                                })
    
                            }
    
                        })
    
                    }
    
                    if ($scope.discoveryData.time == "8:50am" || $scope.discoveryData.time == "9:50am" ||
                        $scope.discoveryData.time == "10:50am" || $scope.discoveryData.time == "11:50am" ||
                        $scope.discoveryData.time == "12:50pm" || $scope.discoveryData.time == "1:50pm" ||
                        $scope.discoveryData.time == "2:50pm" || $scope.discoveryData.time == "3:50pm") {

                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";
    
                        $scope.bookDiscovery    = false;
                        $scope.start($scope.discoveryData.time)

    
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {
    
                            data.data.date[hour].state[5] = 2
    
                            if (hour == 'eight' && data.data.date['nine'].state[0] === 0) {
    
                                $scope.hourPlusOne                          = 'nine'
                                data.data.date[$scope.hourPlusOne].state[0] = 2
                                data.data.date[$scope.hourPlusOne].state[1] = 2
    
                                $scope.dateData.dateInfo            = data.data.date[hour].state
                                $scope.dateData.nexthour            = $scope.hourPlusOne
                                $scope.dateData.dateInfoNextHour    = data.data.date[$scope.hourPlusOne].state
    
                                User.updateDateNextHour($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[5] === 2) {
    
                                            $scope.bookDiscovery38 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery48 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery58 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.stop()
                                                        $scope.shinebrightsuccess.play()
    
                                                    }, 500)
    
    
                                                }, 500)
    
                                            }, 500)
    
                                        }
    
                                    }, 1000)
                                    
                                    if ($scope.discoveryData.time == "8:50am") {
    
                                        $scope.dateDataForUser.time = "8:50am - 9:20am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 5;
    
                                    }
    
                                    $scope.dateDataForUser.appointmentType = "Discovery!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
    
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
    
                                        }
                                
                                    })
    
                                })
                            }
                            if (hour == 'nine' ) {
    
                                $scope.hourPlusOne = 'ten'
                                data.data.date[$scope.hourPlusOne].state[0] = 2
    
                                $scope.dateData.dateInfo            = data.data.date[hour].state
                                $scope.dateData.nexthour            = $scope.hourPlusOne
                                $scope.dateData.dateInfoNextHour    = data.data.date[$scope.hourPlusOne].state
    
                                User.updateDateNextHour($scope.dateData).then(function (data) {
    
                                    $scope.dateDataForUser.date = $scope.currentDate;
                                    console.log("NINER")
    
                                    $timeout(function () {
    
                                        if (data.data.date[hour].state[5] === 2) {
    
                                            $scope.bookDiscovery39 = false;
    
                                            $timeout(function () {
    
                                                $scope.bookDiscovery49 = false;
    
                                                $timeout(function () {
    
                                                    $scope.bookDiscovery59 = false;
    
                                                    $timeout(function () {
    
                                                        $scope.loadingBooking5 = false;
                                                        $scope.shinebrightsuccess.play()
    
                                                    }, 500)
    
    
                                                }, 500)
    
                                            }, 500)
    
                                        }
    
                                    }, 1000)
                                    if ($scope.discoveryData.time == "9:50am") {
    
                                        $scope.dateDataForUser.time = "9:50am - 10:20am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 5;
    
                                    }
    
                                    $scope.dateDataForUser.appointmentType = "Discovery!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {
    
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
    
                                        }
                                
                                    })
    
                                })
                            }
    
                        })
    
                    }
    
                }else{
    
                    $scope.shinebrighterror.play()
    
                }
    
            }
    
    })

}());