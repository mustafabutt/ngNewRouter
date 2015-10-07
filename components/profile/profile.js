angular.module('myApp.profile',[])
.controller('ProfileController', function ($routeParams){
	this.id=$routeParams.id;
})