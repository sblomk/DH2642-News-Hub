var myApp = angular.module('articleApp',['ngResource','ui.router','firebase','ngDragDrop', 'xeditable']);

// Ui router är typ som ngRoute som användes i labb 5, för att komma åt olika views.
// de olika "states:en" är då de olika viewsen
myApp.config(['$stateProvider', function($stateProvider){
  console.log("Kommer vi hit 2?");

var homeState = {
  name: "start",
  url: '',
  // component: 'toggleHomeView'
  templateUrl: "partials/view.html"
}

// View som visar sources
var viewState = {
  name: "view",
  url: "/view",
  templateUrl: "partials/view.html"
}

// View som visar artiklar
var articlesState = {
  name: "articles",
  url: "/articles/:contactId",
  views: {
    '': {
      templateUrl: "partials/articles.html"
    }
  }
}


var favoriteState = {
  name: "favorites",
  url: "/favorites",
  templateUrl: "partials/favorites.html"
}

var firebaseState = {
  name: "firebase",
  url: "/firebase",
  templateUrl: "partials/firebase_test.html"
}

var contactState = {
  name: "contact",
  url: "/contact",
  templateUrl: "partials/contact.html"
}

// Hämtar de olika statesen
$stateProvider.state(homeState);
$stateProvider.state(viewState);
$stateProvider.state(articlesState);
$stateProvider.state(favoriteState);
$stateProvider.state(firebaseState);
$stateProvider.state(contactState);

}]);
