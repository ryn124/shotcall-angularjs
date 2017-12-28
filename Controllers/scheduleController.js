app.controller("scheduleController", function($scope, $stateParams, $state, scheduleService){

  // add a schedule
  $scope.addEvent = function(){
    scheduleService.addEvent($scope.schedule);
  }

  // view events
  $scope.events = scheduleService.getEvents()

  $scope.scheduleHeading = "Let's Create the Schedule"

  $scope.scheduleUpdateButton = false;

  // load an event
  $scope.eventFill = function(schedule){
    $scope.schedule.time = schedule.time;
    $scope.schedule.eventName = schedule.eventName;
    $scope.schedule.eventDescription = schedule.eventDescription;
    $scope.scheduleHeading = "Updating" + "" + schedule.eventName.toUpperCase();
    $scope.scheduleUpdateButton = true;
    scheduleService.loadEvent(schedule);
    $scope.scheduleAddButton = false;
  }

  $scope.scheduleAddButton = true;

  // update and event
  $scope.updateEvent = function(schedule){
    $scope.scheduleHeading = "Let's Create the Schedule";
    scheduleService.updateEvent($scope.schedule);
    $scope.scheduleUpdateButton = false;
    $scope.scheduleAddButton = true;
  }
})