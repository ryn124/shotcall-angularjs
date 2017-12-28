app.controller("shotDescriptionController", function ($scope, $stateParams, $state, shotDescriptionService, contactsService) {

  $scope.plannerFirst = titleCase(contactsService.plannerName().firstName);
  $scope.plannerLast = titleCase(contactsService.plannerName().lastName);

  function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $scope.addDescription = function (description) {
    shotDescriptionService.addDescription(description);
  }

  $scope.descriptionButtons = true;

  $scope.descriptionSwitch = function(){
    $scope.descriptionButtons = false;
  }

  $scope.updateDescription = function() {
    $scope.shotDescription = shotDescriptionService.descriptionUpdate();
    $scope.descriptionButtons = true;
  }


})