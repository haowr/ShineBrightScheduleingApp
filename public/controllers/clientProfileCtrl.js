(function () {

    var app = angular.module('clientProfileController', ['authServices','userServices'])
    
    app.config(function () {

        console.log("Client Profile Controller Loaded...")
        
    })

    app.controller('clientProfileCtrl', function ($rootScope, $scope, Auth, User, $timeout, $location, $rootScope, $window) {


        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()    

            if(!Auth.isLoggedIn()){

                Auth.logout()
                $location.path('/')

            }

        })

        /*

        if(!Auth.isLoggedIn()){

            $location.path('/')
            $rootScope.loggedIn = false;
            console.log("I'm not logged in...")

        }else{

            $rootScope.loggedIn = true;
        }*/

        $scope.idFromLocalStorage           = $window.localStorage.getItem('_id')
        $scope.clientName                   = $window.localStorage.getItem('name');
        $scope.currentBookingTitle          = "";
        $scope.currentBooking               = 0;
        $scope.infoPageOpen                 = true;
        $scope.bookingsPageOpen             = false;
        $scope.scheduledJobPageOpen         = false;
        $scope.loadingBookingStatus         = false;
        $scope.audio                        = new Audio("../audio/shinebrightclick.wav")
        $scope.shinebrighterror             = new Audio("../audio/shinebrighterror.wav");
        $scope.shinebrightloading           = new Audio('../audio/shinebrightloading.wav');
        $scope.shinebrightsuccess           = new Audio('../audio/shinebrightsuccess.wav');
        $scope.shinebrighttap               = new Audio('../audio/shinebrighttap.wav');

        $scope.discoveryPageOpen    = false;
        $scope.sessionPageOpen      = false;
        $scope.inboxOpen            = true;
        $scope.checkUpPageOpen      = true;
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

        $scope.messageObject                = {
            id: "5bff0b83ccf498187c715bd3",
            from: $scope.clientName,
            to: "Leah Kelly",
            subject: "",
            read: false,
            body:""
        }

        
        $scope.bookingInfo = {

            id: $scope.idFromLocalStorage

        }
        $scope.openInfoPage = function(){


            console.log("Oy")
        }
        $scope.openInbox = function () {
            $scope.shinebrighttap.play()
            if (!$scope.inboxOpen) {

                $scope.inboxOpen                    = true;
                $scope.composeOpen                  = false;
                $scope.messageSubjectCannotBeEmpty  = false;
                $scope.messageBodyCannotBeEmpty     = false;

            }

        }
   
        $scope.submitMessage2 = function () {

            console.log("oy")
            $scope.shinebrighttap.play()

            if($scope.messageObject.subject == ""){

                $scope.messageSubjectCannotBeEmpty  = true;

            }

            if($scope.messageObject.body == ""){

                $scope.messageBodyCannotBeEmpty     = true;

            }

            if($scope.messageObject.body    !== "" &&
               $scope.messageObject.subject  == ""){

                $scope.messageSubjectCannotBeEmpty  = true;
                $scope.messageBodyCannotBeEmpty     = false;

                
            }
            if( $scope.messageObject.subject   !== "" &&
                $scope.messageObject.body       == ""){

                 $scope.messageSubjectCannotBeEmpty  = false;
                 $scope.messageBodyCannotBeEmpty     = true;

            }

            if($scope.messageObject.body    !== "" &&
               $scope.messageObject.subject !== ""){
                
                $scope.messageBodyCannotBeEmpty     = false;
                $scope.messageSubjectCannotBeEmpty  = false;
                $scope.sendingMessage               = true
                $scope.shinebrightloading.play()

                $timeout(function () {

                User.messageAdmin($scope.messageObject).then(function (data) {

                    $scope.sendingMessage   = false
                    $scope.messageSent      = true;

                    $scope.shinebrightsuccess.play()

                    $timeout(function () {

                        $scope.messageSent              = false;
                        $scope.messageObject.subject    = ""
                        $scope.messageObject.body   = ""

                    }, 2500)

                })

            }, 2500)

        }

        }
        $scope.submitMessageAdmin = function () {

            $scope.sendingMessage = true;

            if($scope.messageObject.subject == ""){

                $scope.messageSubjectCannotBeEmpty  = true;

            }

            if($scope.messageObject.body == ""){

                $scope.messabeBodyCannotBeEmpty     = true;

            }

            if($scope.messageObject.body !== "" &&
               $scope.messageObeject.subject !== ""){
                
                $timeout(function () {

                User.sendMessage($scope.messageObject).then(function (data) {

                    $scope.sendingMessage   = false
                    $scope.messageSent      = true;

                    $timeout(function () {

                        $scope.messageSent              = false;
                        $scope.messageObject.subject    = "";
                        $scope.messageObject.body       = "";

                    }, 2500)

                })

                }, 2500)
                
            }


        }

        $scope.openCompose = function () {
            $scope.shinebrighttap.play()

            if (!$scope.composeOpen) {

                $scope.composeOpen      = true;
                $scope.inboxOpen        = false;
                $scope.userListOpen     = true;

            }

        }

        User.getUser($scope.idFromLocalStorage).then(function (data) {
            console.log("LOADING...")
            $scope.clientName                   = data.data.user.name;
            $scope.currentUserBookingsArray     = data.data.user.bookings;
        

            if($scope.currentUserBookingsArray.length > 0){

                $scope.currentBookingTitle      = $scope.currentUserBookingsArray.length
                $scope.currentBooking           = $scope.currentUserBookingsArray.length -1

            }else{

                $scope.currentBookingTitle      = 0;
                $scope.currentBooking           = 0;

            }

            if($scope.currentUserBookingsArray.length > 0){
        
                $scope.currentBookingTitle      = $scope.currentUserBookingsArray.length
                $scope.currentBooking           = 0

            }else{

                $scope.currentBookingTitle      = 0;
                $scope.currentBooking           = 0;
                $scope.loadingClientBookings    = false;
                $scope.shake                    = true;
                $scope.shinebrighterror.play()

                $timeout(function(){

                    $scope.shake                = false;

                },1000)

            }
            
            console.log("$scope.currentBooking", $scope.currentBooking)
            console.log("$scope.currentUserBookingsArray", $scope.currentUserBookingsArray)


        })

        $scope.changeBookingLeft = function () {


            User.getUser($scope.idFromLocalStorage).then(function (data) {

                    $scope.currentUserBookingsArray     = data.data.user.bookings;
                    console.log("$scope.currentUserBookingsArray", $scope.currentUserBookingsArray)

                    if ( $scope.currentBooking > 0 ) {

                        $scope.currentBooking       = $scope.currentBooking - 1;
                        $scope.currentBookingTitle  = $scope.currentBooking +1;
                        $scope.shinebrighttap.play()

                    } 
                    
                else {

                        $scope.currentBooking       = $scope.currentUserBookingsArray.length - 1;
                        $scope.currentBookingTitle  = $scope.currentUserBookingsArray.length ;
                        console.log("ERRE?")
                        console.log($scope.currentBooking)


                        if($scope.currentUserBookingsArray.length == 0){

                            $scope.currentBookingTitle  = 0;
                            console.log("ERRE??")
                            $scope.shake                = true;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }
                    
                    }    
                    console.log("$scope.currentBooking", $scope.currentBooking)
                    console.log("currentUserBookingsArray", $scope.currentUserBookingsArray[$scope.currentBooking])

                
            })

        }

        $scope.changeBookingRight = function () {

            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.currentUserBookingsArray     = data.data.user.bookings;

                    if ( $scope.currentBooking < $scope.currentUserBookingsArray.length - 1 ) {

                        $scope.currentBooking       = $scope.currentBooking + 1;
                        $scope.currentBookingTitle  = $scope.currentBooking + 1;
                        $scope.shinebrighttap.play()

                    } else{

                        $scope.currentBooking       = 0;
                        $scope.currentBookingTitle  = 1;

                        if($scope.currentUserBookingsArray.length == 0){

                            console.log("Should be here...")

                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = 0;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }


                    }
                
            })

        }

        $scope.markAsCompleted = function(currentbooking){ 

                $scope.currentBooking = currentbooking;

                if(currentbooking <= -1){

                }else{

                    $scope.loadingBookingStatus = true;
                    $scope.shinebrightloading.play()

                    User.getUser($scope.idFromLocalStorage).then(function (data) {

                        $scope.bookingInfo.currentbooking   = $scope.currentBooking;

                        User.markBookingAsCompleted($scope.bookingInfo).then(function(data){
        
                            $scope.currentUserBookingsArray = data.data.user.bookings
        
                            $timeout(function(){
        
                                $scope.loadingBookingStatus = false;
        
                                $scope.shinebrightsuccess.play()
        
                            },1000)
            
                        })
        
                    })

                }  

        }
        $scope.index = 0;

        $scope.deleteBooking = function(currentbooking){

                $scope.loadingBookingDeletion       = true;
                $scope.index                        = currentbooking 
                console.log("INDEX", $scope.index)

                

                User.getUser($scope.idFromLocalStorage).then(function (data) {
                
                    $scope.bookingInfo.currentbooking   = $scope.index;
                    console.log("INDEX", $scope.index)
                    $scope.bookingInfo.appointmentType  = $scope.currentUserBookingsArray[$scope.index].appointmentType;
                    $scope.bookingInfo.hour             = $scope.currentUserBookingsArray[$scope.index].hour;
                    $scope.bookingInfo.slot             = $scope.currentUserBookingsArray[$scope.index].slot;
                    $scope.bookingInfo.time             = $scope.currentUserBookingsArray[$scope.index].time;
                    $scope.bookingInfo.date             = $scope.currentUserBookingsArray[$scope.index].date;

             
                    User.deleteBooking($scope.bookingInfo).then(function(data){

                        console.log(data)

                        User.getUser($scope.idFromLocalStorage).then(function(data){

                            console.log(data)
                            $scope.currentUserBookingsArray = data.data.user.bookings

                        if($scope.currentUserBookingsArray.length > 0){

                            $scope.loadingBookingDeletion   = false;
                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = $scope.currentUserBookingsArray.length
                            $scope.currentBooking           = 0;

                        }else{

                            $scope.loadingBookingDeletion   = false;
                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = 0;
                            $scope.currentBooking           = 0;
                            $scope.shinebrighterror.play()

                            $timeout(function(){

                                $scope.shake = false;
        
                            },1000)

                        }

                    })

                })

            })
                
        }

        $scope.markAsNotCompleted = function(currentbooking){


                $scope.loadingBookingStatus = true;

                if(currentbooking <= -1){

                }else{

                    $scope.shinebrightloading.play()


                    User.getUser($scope.idFromLocalStorage).then(function (data) {

                        $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
                        $scope.bookingInfo.currentbooking   = currentbooking;
                        $scope.currentBooking               = currentbooking;
        
                        User.markBookingAsNotCompleted($scope.bookingInfo).then(function(data){
        
        
                            $scope.currentUserBookingsArray = data.data.user.bookings
        
                            $timeout(function(){
        
                                $scope.loadingBookingStatus = false;
        
                                $scope.shinebrightsuccess.play()
        
                            },1000)
            
                        })
        
                    })


                }

                
                
        }

        $scope.openMessagePage = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $scope.audio.play()

        }
        /*
        
        $scope.openSchedulePage = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $scope.audio.play()

        }
        */

    })

}());