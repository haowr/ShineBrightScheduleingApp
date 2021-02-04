(function () {

    var app = angular.module("appRoutes", ['ngRoute','authServices']);

    app.config(function ($routeProvider, $locationProvider) {

        console.log("routes.js loaded...")

        $routeProvider
            .when('/', {
                templateUrl: '../views/pages/login.html',
                controller: 'loginCtrl',
                name: "QLH | HOME",
                resolve : {
                        //This function is injected with the AuthService where you'll put your authentication logic

                        'auth' : function(Auth){

                           // console.log(Auth.isLoggedIn())
                            return Auth.isLoggedIn();

                        }

                    }
                
            })
            .when('/clientprofile', {
                templateUrl: '../views/pages/clientprofile.html',
                name: "QLH | SERVICES",
                controller: "clientProfileCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {

                        
                    }
                }
            })
            .when('/messages', {
                templateUrl: '../views/pages/messagepage.html',
                name: "QLH | PROFILE",
                controller: "clientProfileCtrl",
                controllerAs: 'profile'

            })
            .when('/schedule', {
                templateUrl: '../views/pages/schedulepage.html',
                name: "QLH | PROFILE",
                controller: "scheduleCtrl",
                controllerAs: 'schedule'

            })
            .when('/datepage/checkup', {
                templateUrl: '../views/pages/checkup.html',
                name: "SB| CHECKUP",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/datepage/discovery', {
                templateUrl: '../views/pages/discovery.html',
                name: "SB| DISCOVERY",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/datepage/session', {
                templateUrl: '../views/pages/session.html',
                name: "SB| SESSION",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/datepage/session/nine', {
                templateUrl: '../views/pages/nine.html',
                name: "SB| SESSION",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/datepage/session/eight', {
                templateUrl: '../views/pages/eight.html',
                name: "SB| SESSION",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/datepage', {
                templateUrl: '../views/pages/datepage.html',
                name: "SB| CHECKUP",
                controller: "scheduleCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/login', {
                templateUrl: '../views/pages/login.html',
                name: "QLH | SERVICES",
                controller: "loginCtrl",
                controllerAs: 'login',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
            .when('/schedule/:date', {
                templateUrl: '../views/pages/scheduledjobpage.html',
                name: "QLH | DATE INFO",
                controller: "dateCtrl",
                controllerAs: 'profile'

            })
            .when('/schedule/:date/checkup', {
                templateUrl: '../views/pages/checkup.html',
                name: "QLH | BOOKINGS",
                controller: "checkUpCtrl",
                controllerAs: 'profile'

            })
            .when('/schedule/:date/session', {
                templateUrl: '../views/pages/session.html',
                name: "QLH | BOOKINGS",
                controller: "sessionCtrl",
                controllerAs: 'profile'

            })            
            .when('/schedule/:date/discovery', {
                templateUrl: '../views/pages/discovery.html',
                name: "QLH | BOOKINGS",
                controller: "discoveryCtrl",
                controllerAs: 'profile'

            })
       
         
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })


    })
   

    app.run(['$rootScope', '$location','Auth', function ($rootScope, $location, $routeUpdate, $routeParams,Auth) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
          //console.log( Auth)

        });


    }]);

}())