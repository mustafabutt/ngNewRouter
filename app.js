angular.module('myApp', ['ngNewRouter','myApp.about','myApp.home','myApp.profile'])
.controller('AppController', ['$router', AppController]);
 
function AppController($router) {

   $router.config([
   	{ 
    	path: '/', component: 'about'
    },
 	{
 	 	path:'home', component: 'home'
 	},
 	{
 	 	path:'profile/:id', component: 'profile'
 	}
   ]);
}