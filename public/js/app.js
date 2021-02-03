(function(){

//console.log("app.js loaded");

var app = angular.module('qlc',['nxGeometryy','mainController','loginController','checkUpController', 'sessionController', 'discoveryController', 'clientProfileController', 'scheduleController', 'dateController','authServices','userServices', 'appRoutes'] );
												//,'angular-fullcalendar'																																				  
app.config(function($compileProvider){

	//$compileProvider.preAssignBindingsEnabled(true);
	console.log("App.js Loaded...")

});
app.controller('qlcCtrl', '$scope', 'Auth' [  function($scope, Auth, $rootScope) {


	$scope.successfulLogin              = false;
	$scope.failedLogin                  = false;
	$scope.loading                      = true;
	$scope.fadein                       = false;
	$scope.errorMsg                     = false;
	$rootScope.atHome					 	= true;
	$scope.shinebrighttap               = new Audio('../audio/shinebrighttap.wav');

console.log("QlhController")
$scope.closeModal = function(){
	              $('#modal1').modal('close');


}
$scope.tap = function(){
	console.log("clickeds")
	$scope.shinebrighttap.play()
}
$scope.test = function(){

	console.log("test")

}

$scope.setDirectiveFn = function(directiveFn) {
	console.log('click')
	$scope.directiveFn = directiveFn;
};




}])
}());


