var app = angular.module("shotApp", ["ui.router", "ngAnimate"])


app.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "contactsController"
    })
  .state("when", {
    url: "/when",
    templateUrl: "./views/when.html",
    controller: "contactsController"
  })
  .state("begin", {
    url: "/begin",
    templateUrl: "./views/begin.html",
    controller: "contactsController"
  })
  .state("contacts", {
    url: "/contacts",
    templateUrl: "./views/contacts.html",
    controller: "contactsController"
  })
  .state("shotDescription", {
    url: "/shotdescription",
    templateUrl: "./views/shotdescription.html",
    controller: "shotDescriptionController"
  })
  .state("locations", {
    url: "/locations",
    templateUrl: "./views/locations.html",
    controller: "locationsController"
  })
  .state("schedule", {
    url: "/schedule",
    templateUrl: "./views/schedule.html",
    controller: "scheduleController"
  })
  .state("callsheet", {
    url: "/callsheet",
    templateUrl: "./views/callsheet.html",
    controller: "callSheetController"
  })

  })