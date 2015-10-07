# ngNewRouter
component routing in angular 1.4
<h2>ngNewRouter</h2><p> is a  main feature in angularjs.ngRoute and ui-router have been used for this purpose since its launching stage in which a poprtion of view is was change along
the change in url.However, ngNewRouter is introduced as an addition in routing.This feature introduces the component routing in which a component is loaded while 
a state is activated. 
A component is a combination of a template(view file) and a controller. When a state is activated,it loads a component also and in component controller tells the
template which part of view is to papulate.Inshort component's router tells the component what to put inside the viewports based on URL. The configuration maps routes to components for each viewport. 
lets get started...
	Make an index.html file</p>
	&ltscript src="./lib/angular.js">&lt/script&gt <br>
     &ltscript src="./lib/router.es5.js">&lt/script&gt<p>
First you will need to include these two libraries first one is core angularjs lib. and second one is for component routing.

Your index.html file should look like this
<p>&lthtml lang="en"&gt<br>
    &lthead&gt<br>
       
        &lttitle&gtMy app&lt/title&gt<br>
        &ltscript src="./lib/angular.js"&gt&lt/script&gt<br>
        &ltscript src="./lib/router.es5.js"&gt&lt/script&gt<br>
        &ltscript src="app.js"&gt&lt/script&gt<br>
        &ltscript src="./components/about/about.js"&gt&lt/script&gt<br>
        &ltscript src="./components/home/home.js"&gt&lt/script&gt<br>
    
    &lt/head&gt
    &ltbody ng-app="myApp" ng-controller="AppController as app"&gt  //ng-app will be assign the name of your module.<br>
     &lta ng-link="home"&gtlink to home &lt/a&gt                        //ng-link will link your pages <br>
     &lta ng-link="profile({id:5})"&gtlink to home &lt/a&gt <br>
        &ltdiv ng-viewport&gt &lt/div&gt<br>

    &lt/body&gt<br>
&lt/html&gt</p><br>
<b>your directory structure should look like this...</b>
app.js<br>
index.html<br>
mkdir -p components/home<br>
touch components/home/home.html components/home/home.js<br>
touch components/about/about.html components/about/about.js<br>
touch components/profile/profile.html components/profile/profile.js<br>
<h3>ng-viewport</h3>ng-view is replaced by ng-viewport. <div ng-viewport></div>
<p>Now lets make app.js file which will contain the main routing of our app.</p>

<ol>
<li>angular.module('myApp', ['ngNewRouter','myApp.about','myApp.home','myApp.profile'])</li>
<li>.controller('AppController', ['$router', AppController]);</li>
 
<li>function AppController($router) {</li>

<li>$router.config([</li>
<li>    { 
<li>        path: '/', component: 'about'</li>
<li>    },</li>
<li>    {</li>
<li>        path:'home', component: 'home'</li>
<li>    },</li>
<li>   {</li>
<li>        path:'profile/:id', component: 'profile'</li>
<li>    }</li>
<li>   ]);</li>
<li>}</li>
</ol>
<p>Make a core module and name it what you want in my case its myApp.
Second argument is an array of dependencies.ngNewRouter provides service for component routing.
The rest two dependencies are the names of our controllers which we will see later.
</p>
<b>$router</b> service provides 
<b>$router.config</b> is a routing block in which you will define your routing states along with components.

<p>Now lets com to the components. you will make a directory name <b>home</b>and create
two files one is home.js(controller) and home.html(template).By convention both files should have the same name as their parent directory. </p>
Here you will make these three components on the same patren.

<p>home.js
<ol>
<li>angular.module('myApp.home', [])</li>
<li>  .controller('HomeController', function () {</li>
    
<li>    this.name = 'Friend';</li>

<li>  });</li> 
</ol></p>

<p>home.html
<p>Hello {{home.name}}!</p>
</p>

<p>profile.js
<ol>
<li>angular.module('myApp.profile',[])</li>
<li>.controller('ProfileController', function ($routeParams){</li>
<li>    this.id=$routeParams.id;</li>
<li>})</li>
</ol></p>
<p>profile.html
<p>Your id is {{profile.id}}</p></p>
<p>about.js
<ol>
<li>angular.module('myApp.about', [])</li>
<li>  .controller('AboutController', function () {</li>
    
<li>    this.name = 'about';</li>

<li>  });</li></ol></p>
<p>about.html
<p>Hello {{about.name}}!</p></p>

