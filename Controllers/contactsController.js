app.controller("contactsController", function($scope, $stateParams, $state, contactsService) {

  
  $scope.people = contactsService.getPeople()
  console.log($scope.people)
  // add person
  $scope.addPerson = function() {
    contactsService.addPerson($scope.person)
  }

  // view people
  $scope.people = contactsService.getPeople()

  // view person
  if($stateParams.id == "" || $stateParams.id == null || $stateParams.id == undefined){
    $scope.person = contactsService.getPersonById($stateParams.id);
  }
  else {
    for (var i = 0; i < $scope.people.length; i++){
      if($scope.people[i].id == $stateParams.id){
        $scope.people = contactsService.getPersonById($stateParams.id);
      }
    }
  }

  // show contact card
  $scope.showContact = function(person){
  console.log(person);
  person.show = !person.show;
  }

  $scope.addButton = true;

    // load person to update
    $scope.personFill = function (person){
      $scope.person.firstName = person.firstName;
      $scope.person.lastName = person.lastName;
      $scope.person.phone = person.phone;
      $scope.person.email = person.email;
      $scope.person.notes = person.notes;
      $scope.person.role = person.role;
      $scope.heading = "Updating " + person.firstName.toUpperCase() + " " + person.lastName.toUpperCase() + "'s Contact Information"
      contactsService.loadPerson(person)
      $scope.addButton = false;
    }
  
  $scope.heading = "Enter the Contact information of each attendee."
  // update a person
  $scope.updatePerson = function (person){
    $scope.heading = "Enter the Contact information of each attendee."
    contactsService.updatePerson($scope.person);
    $scope.addButton = true;
  }

  // delete a person
  $scope.deletePerson = function(person) {
    contactsService.loadPerson(person)
    contactsService.deletePerson($scope.person);
  }

  // planner button
  $scope.beginButton = function(){
    $state.go("contacts");
  }

  $scope.mapShow = true;

  // date button
  $scope.dateButton = function(date){
    contactsService.shootDate(date);
    $state.go("begin")
  }

})