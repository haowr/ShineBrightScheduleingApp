(function(){

    var app = angular.module('scheduleController',['userServices','authServices'])

    app.config(function(){
        console.log(
            "Schedule Controller Loaded..."
        )
    })

    app.controller('scheduleCtrl', function($rootScope,$scope,$http,$location,User,$timeout,$rootScope,Auth,$window){
               
        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()    
            

            if(!Auth.isLoggedIn()){

                Auth.logout()
                $location.path('/')

            }

        })

        
        $scope.schedulePageOpen             = true;
        $scope.infoPageOpen                 = false;
        $scope.messagePageOpen              = false;
        $scope.messageSubjectCannotBeEmpty  = false;
        $scope.messageBodyCannotBeEmpty     = false;
        $scope.bookingsPageOpen             = false;

        $scope.appointmentType              = ""
        $scope.hour                         = ""
        $scope.currentDate                  = "2020-22-30"


        $scope.discoveryPageOpen    = false;
        $scope.sessionPageOpen      = false;
        $scope.checkUpPageOpen      = true;
        $scope.checkUpAvailable8    = true;
        $scope.sessionAvailable8    = true;
        $scope.discoveryAvailable8  = true;
        $scope.checkUpAvailable9    = true;
        $scope.sessionAvailable9    = true;
        $scope.discoveryAvailable9  = true;
        $scope.checkUpAvailable10   = true;
        $scope.sessionAvailable10   = true;
        $scope.discoveryAvailable10 = true;
        $scope.checkUpAvailable11   = true;
        $scope.sessionAvailable11   = true;
        $scope.discoveryAvailable11 = true;
        $scope.checkUpAvailable12   = true;
        $scope.sessionAvailable12   = true;
        $scope.discoveryAvailable12 = true;
        $scope.checkUpAvailable1    = true;
        $scope.sessionAvailable1    = true;
        $scope.discoveryAvailable1  = true;
        $scope.checkUpAvailable2    = true;
        $scope.sessionAvailable2    = true;
        $scope.discoveryAvailable2  = true;
        $scope.checkUpAvailable3    = true;
        $scope.sessionAvailable3    = true;
        $scope.discoveryAvailable3  = true;

        $scope.openModal = function () {

            $('#modal2large').modal('open');
            
        }
       
        if($window.screen.availWidth > 800){

            $scope.openModal();


        }
            
            $scope.loadingBooking           = false;
            $scope.loadingBooking1          = false;
            $scope.loadingBooking2          = false;
            $scope.loadingBooking3          = false;
            $scope.loadingBooking4          = false;
            $scope.loadingBooking5          = false;
            $scope.loadingBookingDeletion   = false;
            $scope.loadingClientBookings    = true;

    
            $scope.dateDataForUser = {
                date: "",
                time: "",
                id: ""
            }
            
            $scope.hour = ""

            $scope.openModal = function (size) {

                if(size == 'small'){
    
                    $('#modal1').modal('open');
    
    
                }else{
    
                    $('#modal1large').modal('open');
    
                }
                
            }
    
    
            $scope.openScheduledJobPageMobile = function (currentdate, id, datecondensed) {

                $scope.id               = id
                $scope.dateCondensed    = datecondensed
               // 
               $location.path("/schedule/"+$scope.dateCondensed)
               $window.localStorage.setItem('dateCondensed', $scope.dateCondensed)
               $window.localStorage.setItem('currentDate', "2020-22-30")
    
                console.log("openScheduledJobPage")
    
                if (!$scope.scheduledJobPageOpen) {
                    $scope.schedulePageOpen     = false;
    
                    $scope.scheduledJobPageOpen = true;
                    $scope.currentDate          = "2020-22-30"
    
                   
    
                }
            }
        
        $scope.openScheduledJobPage = function (currentdate, id, datecondensed) {

            $scope.id               = id
            $scope.dateCondensed    = datecondensed
           // 
           $location.path("/schedule/"+$scope.dateCondensed)
           $window.localStorage.setItem('dateCondensed', $scope.dateCondensed)
           $window.localStorage.setItem('currentDate', "2020-22-30")

            console.log("openScheduledJobPage")

            if (!$scope.scheduledJobPageOpen) {
                $scope.schedulePageOpen     = false;

                $scope.scheduledJobPageOpen = true;
                $scope.currentDate          = "2020-22-30"

               

            }
        }


        $scope.openBookingPage = function (slot) {

            console.log("Inside Schedule Controller...")

            $scope.slot                     = slot;
            $scope.hour                     = slot;
            $window.localStorage.setItem('hour', slot)

            console.log($scope.hour)

            $scope.bookingPageOpen          = true;
            $scope.scheduledJobPageOpen     = false;
            $scope.scheduleSDOrCiPageOpen   = false;
            $scope.discovery800AMIsBooked   = false;
            $scope.discovery810AMIsBooked   = false;
            $scope.discovery820AMIsBooked   = false;
            $scope.discovery830AMIsBooked   = false;
            $scope.discovery840AMIsBooked   = false;
            $scope.discovery850AMIsBooked   = false;
            $scope.session800AMIsBooked     = false;
            $scope.session810AMIsBooked     = false;
            $scope.session820AMIsBooked     = false;
            $scope.session830AMIsBooked     = false;
            $scope.session840AMIsBooked     = false;
            $scope.session850AMIsBooked     = false;
            $scope.checkUp800AMIsBooked     = false;
            $scope.checkUp810AMIsBooked     = false;
            $scope.checkUp820AMIsBooked     = false;
            $scope.checkUp830AMIsBooked     = false;
            $scope.checkUp840AMIsBooked     = false;
            $scope.checkUp850AMIsBooked     = false;
            $scope.discovery900AMIsBooked   = false;
            $scope.discovery910AMIsBooked   = false;
            $scope.discovery920AMIsBooked   = false;
            $scope.discovery930AMIsBooked   = false;
            $scope.discovery940AMIsBooked   = false;
            $scope.discovery950AMIsBooked   = false;
            $scope.session900AMIsBooked     = false;
            $scope.session910AMIsBooked     = false;
            $scope.session920AMIsBooked     = false;
            $scope.session930AMIsBooked     = false;
            $scope.session940AMIsBooked     = false;
            $scope.session950AMIsBooked     = false;
            $scope.checkUp900AMIsBooked     = false;
            $scope.checkUp910AMIsBooked     = false;
            $scope.checkUp920AMIsBooked     = false;
            $scope.checkUp930AMIsBooked     = false;
            $scope.checkUp940AMIsBooked     = false;
            $scope.checkUp950AMIsBooked     = false;
            $scope.globalDateInformation    = {};

          

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {


                $scope.globalDateInformation = data.data.date;


                if ($scope.appointmentType == "discovery") {

                    console.log("Discovery Date Information...")
                    console.log($scope.globalDateInformation[$scope.hour].state)

                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery8 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }

                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }
                if ($scope.appointmentType == "discovery") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.hour == "nine") {

                        $location.path("/datepage/discovery");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }

                if ($scope.appointmentType == "checkup") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.hour == "nine") {

                        $location.path("/datepage/checkup");

                        
                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }
                        

                    }

                }

                if ($scope.appointmentType == "checkup") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

                if ($scope.appointmentType == "session") { 


                    if ($scope.hour == "eight") {

                        $location.path("/datepage/session/eight");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.hour == "nine") {

                        $location.path("/datepage/session/nine");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

                if ($scope.appointmentType == "session") { 


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

            })

        }


        


    })

}());